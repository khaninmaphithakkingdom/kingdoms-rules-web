import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
import {KTX2Loader} from "three/addons/loaders/KTX2Loader.js";
import {MeshoptDecoder} from "three/addons/libs/meshopt_decoder.module.js";

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const game=window.KI_GAME_DATA||{species:{}};
const primaryName="Tyrannosaurus", compareName="Carnotaurus";
const speciesData=name=>game.species?.[name]||null;
const morphStages={
  Tyrannosaurus:["Hatchling","Juvenile","SubAdult","Adult","Elder"],
  Carnotaurus:["Juvenile","Adult","Elder"]
};
const capsuleHalfHeight={Tyrannosaurus:200,Carnotaurus:136};
const state={growth:.75,path:"frail",animation:"Idle",playing:true,lang:"th",compare:true,compareScale:1};
const ui={
  th:{lead:"ดู Tyrannosaurus แบบ 3D พร้อมเทียบ Carnotaurus ที่ Growth เดียวกัน",loading:"กำลังโหลดโมเดล",ready:"พร้อมใช้งาน",fail:"โหลดโมเดลไม่สำเร็จ",reportNote:"ค่าทั้งหมดคำนวณจาก lifecycle curve ใน Game Guide ปัจจุบัน"},
  en:{lead:"Explore Tyrannosaurus in 3D and compare Carnotaurus at the same Growth.",loading:"LOADING MODELS",ready:"READY",fail:"MODEL LOAD FAILED",reportNote:"All values are derived from the current Game Guide lifecycle curves."},
  vi:{lead:"Xem Tyrannosaurus 3D và so sánh Carnotaurus ở cùng Growth.",loading:"ĐANG TẢI MÔ HÌNH",ready:"SẴN SÀNG",fail:"KHÔNG TẢI ĐƯỢC MÔ HÌNH",reportNote:"Các giá trị được tính từ lifecycle curve hiện tại trong Game Guide."}
};

let renderer,scene,camera,controls,clock,baseScale=1;
const models={},mixers={},clips={},actions={};

function bz(a,b,c,d,t){const q=1-t;return q*q*q*a+3*q*q*t*b+3*q*t*t*c+t*t*t*d}
function wb(p){return p&&(p.w===1||p.w===3)}
function wa(p){return p&&(p.w===2||p.w===3)}
function rw(a,b,t){const span=b.t-a.t,target=(t-a.t)/span,leave=a.lt??0,arrive=b.at??0;let ang=Math.atan(leave);const lw=wa(a)?(a.lw??0):Math.hypot(span,leave*span)/3;const p1t=Math.cos(ang)*lw+a.t,p1v=Math.sin(ang)*lw+a.v;ang=Math.atan(arrive);const aw=wb(b)?(b.aw??0):Math.hypot(span,arrive*span)/3;const p2t=-Math.cos(ang)*aw+b.t,p2v=-Math.sin(ang)*aw+b.v,c1=(p1t-a.t)/span,c2=(p2t-a.t)/span;let lo=0,hi=1;for(let i=0;i<50;i++){const m=(lo+hi)/2;bz(0,c1,c2,1,m)<target?lo=m:hi=m}return bz(a.v,p1v,p2v,b.v,(lo+hi)/2)}
function rc(points,t){if(!Array.isArray(points)||!points.length)return null;const first=points[0],last=points[points.length-1];if(t<=first.t)return first.v;if(t>=last.t)return last.v;for(let i=0;i<points.length-1;i++){const a=points[i],b=points[i+1];if(t<a.t||t>b.t)continue;const span=b.t-a.t;if(span<=0)return a.v;const p=(t-a.t)/span;if(!a.c)return a.v+(b.v-a.v)*p;if(a.w||b.w)return rw(a,b,t);const m0=(a.lt??0)*span,m1=(b.at??0)*span,p2=p*p,p3=p2*p;return(2*p3-3*p2+1)*a.v+(p3-2*p2+p)*m0+(-2*p3+3*p2)*b.v+(p3-p2)*m1}return null}
function curveAt(name,k,t,path=state.path){const c=speciesData(name)?.curves?.[k];return c?rc(path==="prime"?c.prime:c.frail,t):null}
function statsAt(name,t,path=state.path){const d=speciesData(name),weight=curveAt(name,"Weight",t,path),speed=curveAt(name,"SprintSpeed",t,path),attack=curveAt(name,"AttackPower",t,path);return{weight,speed,attack,bite:attack!=null&&d?.damageBite!=null?attack*d.damageBite:null}}
function fmt(v,d=1){return v==null||!Number.isFinite(Number(v))?"N/A":Number(v).toLocaleString("en-US",{maximumFractionDigits:d})}
function stageFor(g){if(g>=1)return"ELDER";if(g>=.75)return"ADULT";if(g>=.5)return"SUBADULT";if(g>=.25)return"JUVENILE";return"HATCHLING"}
function percent(g){const n=g*100;return n.toFixed(n%1?1:0)+"%"}

function applySpeciesMorph(root,name,g){
  if(!root)return;
  const stages=morphStages[name]||["Adult"];
  const scaled=THREE.MathUtils.clamp(g,0,1)*(stages.length-1);
  const left=Math.min(stages.length-1,Math.floor(scaled)),right=Math.min(stages.length-1,left+1),mix=scaled-left;
  root.traverse(o=>{
    if(!o.isMesh||!o.morphTargetDictionary||!o.morphTargetInfluences)return;
    o.morphTargetInfluences.fill(0);
    const set=(stage,val)=>{const idx=o.morphTargetDictionary[stage];if(idx!==undefined)o.morphTargetInfluences[idx]=val};
    if(left===right)set(stages[left],1);
    else{set(stages[left],1-mix);set(stages[right],mix)}
  })
}

function updateFood(){
  const menu=speciesData(primaryName)?.diet?.menu||speciesData(primaryName)?.diet?.sources||{};
  const render=(id,arr)=>{$(id).innerHTML=(arr||[]).length?(arr||[]).map(x=>"<span>"+String(x)+"</span>").join(""):"<span>N/A</span>"};
  render("#foodCarb",menu.carb);render("#foodProtein",menu.protein);render("#foodLipid",menu.lipid)
}
function updateReport(){
  const d=speciesData(primaryName),s=statsAt(primaryName,state.growth),stage=stageFor(state.growth),pct=percent(state.growth);
  $("#reportSpecies").textContent=primaryName;
  $("#reportAge").textContent=stage;
  $("#reportDiet").textContent=d?.diet?.type||"N/A";
  $("#reportWeight").textContent=s.weight==null?"N/A":fmt(s.weight)+" kg";
  $("#reportSpeed").textContent=s.speed==null?"N/A":fmt(s.speed*.036)+" km/h";
  $("#reportBite").textContent=s.bite==null?"N/A":fmt(s.bite);
  $("#reportGrowth").textContent=pct;
  $("#reportAttack").textContent=s.attack==null?"N/A":fmt(s.attack,3);
  $("#reportPath").textContent=state.path.toUpperCase();
  $("#reportTitle").textContent=stage+" · "+state.path.toUpperCase()+" PATH";
  $("#reportNote").textContent=ui[state.lang].reportNote
}
function updateStats(){
  const s=statsAt(primaryName,state.growth);
  $("#weightStat").textContent=s.weight==null?"N/A":fmt(s.weight)+" kg";
  $("#speedStat").textContent=s.speed==null?"N/A":fmt(s.speed*.036)+" km/h";
  $("#attackStat").textContent=s.attack==null?"N/A":fmt(s.attack,3);
  $("#biteStat").textContent=s.bite==null?"N/A":fmt(s.bite);
  const c=statsAt(compareName,state.growth);
  $("#compareWeight").textContent=c.weight==null?"N/A":fmt(c.weight)+" kg";
  $("#compareSpeed").textContent=c.speed==null?"N/A":fmt(c.speed*.036)+" km/h";
  $("#compareBite").textContent=c.bite==null?"N/A":fmt(c.bite);
  $("#compareAttack").textContent=c.attack==null?"N/A":fmt(c.attack,3);
  $("#compareStage").textContent=percent(state.growth)+" · "+stageFor(state.growth);
  $("#compareDiet").textContent=speciesData(compareName)?.diet?.type||"N/A";
  updateReport()
}
function syncUrl(){
  const u=new URL(location.href);
  u.searchParams.set("species",primaryName);
  u.searchParams.set("growth",(state.growth*100).toFixed(3).replace(/0+$/,"").replace(/\.$/,""));
  u.searchParams.set("path",state.path);
  u.searchParams.set("animation",state.animation);
  if(state.compare)u.searchParams.set("compare",compareName);else u.searchParams.delete("compare");
  u.searchParams.set("compareScale",String(Math.round(state.compareScale*100)));
  u.searchParams.delete("tab");
  history.replaceState(null,"",u)
}
function setAnimation(name){
  state.animation=name;$("#animationSelect").value=name;
  for(const speciesName of Object.keys(models)){
    if(!mixers[speciesName]||!clips[speciesName]?.[name])continue;
    if(actions[speciesName])actions[speciesName].fadeOut(.2);
    actions[speciesName]=mixers[speciesName].clipAction(clips[speciesName][name]);
    actions[speciesName].reset().fadeIn(.2).play();
    actions[speciesName].paused=!state.playing
  }
  syncUrl()
}
function resetCamera(){if(!camera||!controls)return;camera.position.set(10,4.2,14);controls.target.set(0,1.7,0);controls.update()}
function setLang(lang){
  state.lang=lang;localStorage.setItem("ki-rules-lang",lang);document.documentElement.lang=lang;
  $$("[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
  $("#viewerLead").textContent=ui[lang].lead;updateReport()
}
function placeModels(){
  const primary=models[primaryName],compare=models[compareName];
  if(primary){
    primary.position.set(0,0,0);primary.scale.setScalar(baseScale);primary.updateMatrixWorld(true);
    let b=new THREE.Box3().setFromObject(primary),c=b.getCenter(new THREE.Vector3());
    primary.position.x+=(state.compare?-2.1:0)-c.x;primary.position.y+=-b.min.y;primary.position.z+=-c.z
  }
  if(compare){
    compare.visible=state.compare;
    if(state.compare){
      compare.position.set(0,0,0);
      const ratio=(capsuleHalfHeight[compareName]||1)/(capsuleHalfHeight[primaryName]||1);
      compare.scale.setScalar(baseScale*ratio*state.compareScale);compare.updateMatrixWorld(true);
      const b=new THREE.Box3().setFromObject(compare),c=b.getCenter(new THREE.Vector3());
      compare.position.x+=2.45-c.x;compare.position.y+=-b.min.y;compare.position.z+=-c.z
    }
  }
}
function updateCompareMode(){
  $("#compareReport").hidden=!state.compare;$("#compareChip").hidden=!state.compare;
  if(models[compareName])models[compareName].visible=state.compare;
  $("#compareEnabled").checked=state.compare;placeModels();syncUrl()
}
function applyGrowth(){
  state.growth=THREE.MathUtils.clamp(state.growth,0,1);
  applySpeciesMorph(models[primaryName],primaryName,state.growth);
  applySpeciesMorph(models[compareName],compareName,state.growth);
  placeModels();
  const pct=percent(state.growth);
  if(document.activeElement!==$("#growthNumber"))$("#growthNumber").value=(state.growth*100).toFixed(3).replace(/0+$/,"").replace(/\.$/,"");
  $("#growthSlider").value=state.growth*100;
  $("#stageChip").textContent="TYRANNOSAURUS · "+pct+" · "+stageFor(state.growth);
  $("#compareChip").textContent="CARNOTAURUS · "+pct+" · "+stageFor(state.growth);
  updateStats();syncUrl()
}

function initScene(){
  if(!window.WebGLRenderingContext){$("#fallback").hidden=false;return}
  const canvas=$("#viewerCanvas");
  renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:"high-performance"});
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.8));renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
  scene=new THREE.Scene();scene.fog=new THREE.FogExp2(0x0a0d0a,.022);
  camera=new THREE.PerspectiveCamera(35,1,.1,120);
  controls=new OrbitControls(camera,canvas);controls.enableDamping=true;controls.minDistance=4;controls.maxDistance=28;controls.maxPolarAngle=Math.PI*.54;
  resetCamera();
  scene.add(new THREE.HemisphereLight(0xb9c5af,0x20170f,1.6));
  const key=new THREE.DirectionalLight(0xffddb0,3.4);key.position.set(6,8,5);scene.add(key);
  const rim=new THREE.DirectionalLight(0x89a889,2.1);rim.position.set(-5,4,-7);scene.add(rim);
  const floor=new THREE.Mesh(new THREE.CircleGeometry(9,64),new THREE.MeshStandardMaterial({color:0x10140f,roughness:1,metalness:0}));
  floor.rotation.x=-Math.PI/2;floor.position.y=-.03;scene.add(floor);
  clock=new THREE.Clock();new ResizeObserver(resize).observe($("#canvasWrap"));loadModels();animate()
}
function resize(){if(!renderer)return;const el=$("#canvasWrap"),w=Math.max(1,el.clientWidth),h=Math.max(1,el.clientHeight);renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()}
function makeLoader(){
  const loader=new GLTFLoader();loader.setMeshoptDecoder(MeshoptDecoder);
  const ktx2=new KTX2Loader().setTranscoderPath("https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/libs/basis/");
  ktx2.detectSupport(renderer);loader.setKTX2Loader(ktx2);return loader
}
function loadSpecies(name){
  return new Promise((resolve,reject)=>{
    const loader=makeLoader();
    loader.load("/assets/viewer/"+name+"/"+name+".glb",gltf=>resolve(gltf),undefined,reject)
  })
}
async function loadModels(){
  $("#loadStatus").textContent=ui[state.lang].loading;
  const [p,c]=await Promise.allSettled([loadSpecies(primaryName),loadSpecies(compareName)]);
  if(p.status!=="fulfilled"){console.error("Primary model load failed",p.reason);$("#loadStatus").textContent=ui[state.lang].fail;$("#fallback").hidden=false;return}
  const primaryGltf=p.value;
  models[primaryName]=primaryGltf.scene;applySpeciesMorph(models[primaryName],primaryName,state.growth);
  models[primaryName].traverse(o=>{if(o.isMesh&&o.material)o.material.needsUpdate=true});
  scene.add(models[primaryName]);
  const rawBox=new THREE.Box3().setFromObject(models[primaryName]),rawSize=rawBox.getSize(new THREE.Vector3());
  baseScale=5.5/Math.max(rawSize.x,rawSize.y,rawSize.z);
  mixers[primaryName]=new THREE.AnimationMixer(models[primaryName]);clips[primaryName]={};for(const clip of primaryGltf.animations)clips[primaryName][clip.name]=clip;

  if(c.status==="fulfilled"){
    const compareGltf=c.value;models[compareName]=compareGltf.scene;applySpeciesMorph(models[compareName],compareName,state.growth);
    models[compareName].traverse(o=>{if(o.isMesh&&o.material)o.material.needsUpdate=true});scene.add(models[compareName]);
    mixers[compareName]=new THREE.AnimationMixer(models[compareName]);clips[compareName]={};for(const clip of compareGltf.animations)clips[compareName][clip.name]=clip
  }else{console.error("Compare model load failed",c.reason);state.compare=false}
  placeModels();setAnimation(clips[primaryName][state.animation]?state.animation:(clips[primaryName].Idle?"Idle":Object.keys(clips[primaryName])[0]));
  applyGrowth();updateCompareMode();$("#loadStatus").textContent=ui[state.lang].ready
}
function animate(){requestAnimationFrame(animate);const dt=clock?.getDelta()||0;if(state.playing)for(const m of Object.values(mixers))m.update(dt);controls?.update();renderer?.render(scene,camera)}

function bind(){
  const q=new URLSearchParams(location.search),g=Number(q.get("growth"));
  if(Number.isFinite(g))state.growth=THREE.MathUtils.clamp(g/100,0,1);
  if(["frail","prime"].includes(q.get("path")))state.path=q.get("path");
  if(q.get("animation"))state.animation=q.get("animation");
  if(q.has("compare")&&q.get("compare")==="none")state.compare=false;
  const cs=Number(q.get("compareScale"));if(Number.isFinite(cs))state.compareScale=THREE.MathUtils.clamp(cs/100,.5,2);
  state.lang=localStorage.getItem("ki-rules-lang")||"th";
  $("#growthSlider").value=state.growth*100;$("#growthNumber").value=(state.growth*100).toFixed(3).replace(/0+$/,"").replace(/\.$/,"");
  $$("[data-path]").forEach(b=>b.classList.toggle("active",b.dataset.path===state.path));
  setLang(["th","en","vi"].includes(state.lang)?state.lang:"th");
  updateFood();updateStats();$("#stageChip").textContent="TYRANNOSAURUS · "+percent(state.growth)+" · "+stageFor(state.growth);
  $("#compareChip").textContent="CARNOTAURUS · "+percent(state.growth)+" · "+stageFor(state.growth);
  $("#compareEnabled").checked=state.compare;
  $("#compareScaleSlider").value=Math.round(state.compareScale*100);$("#compareScaleNumber").value=Math.round(state.compareScale*100);
  $("#growthSlider").addEventListener("input",e=>{state.growth=Number(e.target.value)/100;applyGrowth()});
  const applyTypedGrowth=()=>{const n=Number($("#growthNumber").value);if(!Number.isFinite(n))return;state.growth=THREE.MathUtils.clamp(n/100,0,1);applyGrowth()};
  $("#growthNumber").addEventListener("input",applyTypedGrowth);
  $("#growthNumber").addEventListener("change",applyTypedGrowth);
  $("#growthNumber").addEventListener("blur",()=>{applyTypedGrowth();$("#growthNumber").value=(state.growth*100).toFixed(3).replace(/0+$/,"").replace(/\.$/,"")});
  $$("[data-path]").forEach(b=>b.addEventListener("click",()=>{state.path=b.dataset.path;$$("[data-path]").forEach(x=>x.classList.toggle("active",x.dataset.path===state.path));updateStats();syncUrl()}));
  $("#compareEnabled").addEventListener("change",e=>{state.compare=e.target.checked;updateCompareMode()});
  const setCompareScale=v=>{const n=Number(v);if(!Number.isFinite(n))return;state.compareScale=THREE.MathUtils.clamp(n/100,.5,2);$("#compareScaleSlider").value=Math.round(state.compareScale*100);if(document.activeElement!==$("#compareScaleNumber"))$("#compareScaleNumber").value=Math.round(state.compareScale*100);placeModels();syncUrl()};
  $("#compareScaleSlider").addEventListener("input",e=>setCompareScale(e.target.value));
  $("#compareScaleNumber").addEventListener("input",e=>setCompareScale(e.target.value));
  $("#compareScaleNumber").addEventListener("change",e=>setCompareScale(e.target.value));
  $("#compareScaleNumber").addEventListener("blur",()=>{$("#compareScaleNumber").value=Math.round(state.compareScale*100)});
  $("#animationSelect").addEventListener("change",e=>setAnimation(e.target.value));
  $("#playPause").addEventListener("click",()=>{state.playing=!state.playing;$("#playPause").textContent=state.playing?"Pause":"Play";for(const a of Object.values(actions))a.paused=!state.playing});
  $("#resetCamera").addEventListener("click",resetCamera);
  $$("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));
  $("#retryBtn").addEventListener("click",()=>location.reload())
}
bind();initScene();