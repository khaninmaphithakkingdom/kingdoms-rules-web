import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
import {KTX2Loader} from "three/addons/loaders/KTX2Loader.js";
import {MeshoptDecoder} from "three/addons/libs/meshopt_decoder.module.js";
import * as SkeletonUtils from "three/addons/utils/SkeletonUtils.js";

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const game=window.KI_GAME_DATA||{species:{}};
const viewerRegistry=window.KI_VIEWER_REGISTRY?.species||{};
const availableSpecies=Object.values(viewerRegistry).filter(entry=>(entry.publicSelectable||entry.pilotEnabled)&&game.species?.[entry.id]?.released!==false).map(entry=>entry.id);
function registryEntry(name){return viewerRegistry[name]||{id:name,modelPath:"/assets/viewer/"+name+"/"+name+".glb"}}
const state={
  primary:{species:"Tyrannosaurus",growth:.75,path:"frail"},
  compare:{enabled:true,species:"Carnotaurus",growth:.50569,path:"prime"},
  sameGrowth:false,
  dimensions:false,
  animation:"Idle",
  playing:true,
  lang:"th"
};
const ui={
  th:{lead:"เปรียบเทียบ Growth, ขนาดจริง และค่าสถานะของไดโนเสาร์สองตัวในฉาก 3D เดียวกัน",loading:"กำลังโหลดโมเดล",ready:"พร้อมใช้งาน",fail:"โหลดโมเดลไม่สำเร็จ",reportNote:"ค่าทั้งหมดคำนวณจาก lifecycle curve ใน Game Guide ปัจจุบัน"},
  en:{lead:"Compare dinosaur growth, physical dimensions and gameplay curves in one 3D scene.",loading:"LOADING MODELS",ready:"READY",fail:"MODEL LOAD FAILED",reportNote:"All values are derived from the current Game Guide lifecycle curves."},
  vi:{lead:"So sánh tăng trưởng, kích thước và chỉ số của hai loài trong cùng một cảnh 3D.",loading:"ĐANG TẢI MÔ HÌNH",ready:"SẴN SÀNG",fail:"KHÔNG TẢI ĐƯỢC MÔ HÌNH",reportNote:"Các giá trị được tính từ lifecycle curve hiện tại trong Game Guide."}
};

function populateSpeciesSelectors(){
  for(const id of ["primarySpeciesSelect","compareSpeciesSelect"]){
    const select=$("#"+id);if(!select)continue;
    const current=select.value;
    select.replaceChildren(...availableSpecies.map(name=>{const option=document.createElement("option");option.value=name;option.textContent=registryEntry(name).displayName||name;return option}));
    if(availableSpecies.includes(current))select.value=current;
  }
}

let renderer,scene,camera,controls,clock;
const assetCache=new Map();
const metricsCache=new Map();
const runtime={primary:{model:null,mixer:null,clips:{},action:null},compare:{model:null,mixer:null,clips:{},action:null}};
const dimensionGroups={primary:null,compare:null};

function bz(a,b,c,d,t){const q=1-t;return q*q*q*a+3*q*q*t*b+3*q*t*t*c+t*t*t*d}
function wb(p){return p&&(p.w===1||p.w===3)}
function wa(p){return p&&(p.w===2||p.w===3)}
function rw(a,b,t){const span=b.t-a.t,target=(t-a.t)/span,leave=a.lt??0,arrive=b.at??0;let ang=Math.atan(leave);const lw=wa(a)?(a.lw??0):Math.hypot(span,leave*span)/3;const p1t=Math.cos(ang)*lw+a.t,p1v=Math.sin(ang)*lw+a.v;ang=Math.atan(arrive);const aw=wb(b)?(b.aw??0):Math.hypot(span,arrive*span)/3;const p2t=-Math.cos(ang)*aw+b.t,p2v=-Math.sin(ang)*aw+b.v,c1=(p1t-a.t)/span,c2=(p2t-a.t)/span;let lo=0,hi=1;for(let i=0;i<50;i++){const m=(lo+hi)/2;bz(0,c1,c2,1,m)<target?lo=m:hi=m}return bz(a.v,p1v,p2v,b.v,(lo+hi)/2)}
function rc(points,t){if(!Array.isArray(points)||!points.length)return null;const first=points[0],last=points[points.length-1];if(t<=first.t)return first.v;if(t>=last.t)return last.v;for(let i=0;i<points.length-1;i++){const a=points[i],b=points[i+1];if(t<a.t||t>b.t)continue;const span=b.t-a.t;if(span<=0)return a.v;const p=(t-a.t)/span;if(!a.c)return a.v+(b.v-a.v)*p;if(a.w||b.w)return rw(a,b,t);const m0=(a.lt??0)*span,m1=(b.at??0)*span,p2=p*p,p3=p2*p;return(2*p3-3*p2+1)*a.v+(p3-2*p2+p)*m0+(-2*p3+3*p2)*b.v+(p3-p2)*m1}return null}
function speciesData(name){return game.species?.[name]||null}
function curveAt(name,key,t,path){const c=speciesData(name)?.curves?.[key];return c?rc(path==="prime"?c.prime:c.frail,t):null}
function statsAt(side){const s=state[side],name=s.species,t=side==="compare"&&state.sameGrowth?state.primary.growth:s.growth,path=s.path,d=speciesData(name),weight=curveAt(name,"Weight",t,path),speed=curveAt(name,"SprintSpeed",t,path),attack=curveAt(name,"AttackPower",t,path);return{growth:t,weight,speed,attack,bite:attack!=null&&d?.damageBite!=null?attack*d.damageBite:null}}
function fmt(v,d=1){return v==null||!Number.isFinite(Number(v))?"N/A":Number(v).toLocaleString("en-US",{maximumFractionDigits:d})}
function pct(g,precision=3){const n=g*100;return n.toFixed(precision).replace(/0+$/,"").replace(/\.$/,"")+"%"}
function stageFor(g,path){if(g>=1)return path==="prime"?"PRIME ELDER":"FRAIL ELDER";if(g>=.875)return path==="prime"?"PRIME":"FRAIL";if(g>=.75)return"ADULT";if(g>=.5)return"SUBADULT";if(g>=.25)return"JUVENILE";return"HATCHLING"}

function visualGrowthAt(name,g){
  const keys=speciesData(name)?.morphs?.visualGrowth?.keys;
  const v=keys?.length?rc(keys,g):g;
  return THREE.MathUtils.clamp(v??g,0,1)
}
function morphTargetIndex(mesh,stage){
  const dict=mesh.morphTargetDictionary||{};
  const normalized=String(stage).replace(/[^a-z0-9]/gi,"").toLowerCase();
  for(const [name,idx] of Object.entries(dict)){
    if(name.replace(/[^a-z0-9]/gi,"").toLowerCase()===normalized)return idx
  }
  return undefined
}
function morphWeightsAt(name,g,path){
  const morphs=speciesData(name)?.morphs;
  if(!morphs)return{};
  const slots=morphs.slots||{};
  const v=visualGrowthAt(name,g);
  const adultBlend=THREE.MathUtils.clamp((v-.25)*2,0,1);
  const weights={};
  if(g<.25){
    weights.juvenile=1;
    if(slots.hatchling){
      weights.hatchling=THREE.MathUtils.clamp(1-4*g,0,1);
      weights.juvenile=THREE.MathUtils.clamp(4*g,0,1)
    }
  }else if(slots.subadult){
    weights.juvenile=THREE.MathUtils.clamp(1-2*adultBlend,0,1);
    weights.subadult=THREE.MathUtils.clamp(1-Math.abs(1-2*adultBlend),0,1)
  }else{
    weights.juvenile=THREE.MathUtils.clamp(1-adultBlend,0,1)
  }
  if(slots.elder){
    const elderMax=path==="prime"?1:.2;
    weights.elder=THREE.MathUtils.clamp((g-.75)*4,0,elderMax)
  }
  return weights
}
function applySpeciesMorph(root,name,g,path="frail"){
  if(!root)return;
  const weights=morphWeightsAt(name,g,path);
  root.traverse(o=>{
    if(!o.isMesh||!o.morphTargetInfluences||!o.morphTargetDictionary)return;
    o.morphTargetInfluences.fill(0);
    for(const [stage,weight] of Object.entries(weights)){
      if(!(weight>0))continue;
      const idx=morphTargetIndex(o,stage);
      if(idx!==undefined)o.morphTargetInfluences[idx]=weight
    }
  })
}
function growthScaleRatio(name,g,path){
  const adult=curveAt(name,"Scale",.75,path),now=curveAt(name,"Scale",g,path);
  return adult&&now?now/adult:1
}
function capsuleHeightMeters(name){
  const h=speciesData(name)?.capsule?.halfHeight;
  return Number.isFinite(Number(h))?Number(h)*2/100:null
}
function getAdultMetric(name){
  return metricsCache.get(name)||null
}
function computeAdultMetric(name){
  const asset=assetCache.get(name);if(!asset)return null;
  const clone=SkeletonUtils.clone(asset.scene);
  applySpeciesMorph(clone,name,.75,"frail");
  clone.rotation.set(0,Math.PI/2,0);clone.scale.setScalar(1);clone.position.set(0,0,0);clone.updateMatrixWorld(true);
  const box=new THREE.Box3().setFromObject(clone,true),size=box.getSize(new THREE.Vector3());
  const physicalHeight=capsuleHeightMeters(name);
  const adultWorldScale=physicalHeight&&size.y>0?physicalHeight/size.y:1/Math.max(size.x,size.y,size.z);
  const metric={rawAdultBox:box,rawAdultSize:size,adultWorldScale,physicalHeight};
  metricsCache.set(name,metric);return metric
}

function effectiveGrowth(side){return side==="compare"&&state.sameGrowth?state.primary.growth:state[side].growth}
function getRuntimeBox(side){const model=runtime[side].model;if(!model||!model.visible)return null;return new THREE.Box3().setFromObject(model,true)}
function applySideTransform(side){
  const rt=runtime[side],s=state[side],model=rt.model;if(!model)return;
  const g=effectiveGrowth(side),metric=getAdultMetric(s.species)||computeAdultMetric(s.species),base=metric?.adultWorldScale||1;
  model.scale.setScalar(base*growthScaleRatio(s.species,g,s.path));
  model.rotation.set(0,side==="primary"?Math.PI/2:-Math.PI/2,0);
  model.position.set(0,0,0);model.updateMatrixWorld(true);
  const box=new THREE.Box3().setFromObject(model,true),center=box.getCenter(new THREE.Vector3());
  model.position.y-=box.min.y;model.position.z-=center.z;model.updateMatrixWorld(true)
}
function placeModels(){
  applySideTransform("primary");
  if(runtime.compare.model)runtime.compare.model.visible=state.compare.enabled;
  if(state.compare.enabled)applySideTransform("compare");
  const pb=getRuntimeBox("primary");if(!pb)return;
  const ps=pb.getSize(new THREE.Vector3()),pc=pb.getCenter(new THREE.Vector3());
  if(!state.compare.enabled||!runtime.compare.model){
    runtime.primary.model.position.x-=pc.x;
    updateDimensions();return
  }
  const cb=getRuntimeBox("compare"),cs=cb.getSize(new THREE.Vector3()),cc=cb.getCenter(new THREE.Vector3());
  const gap=Math.max(1.1,Math.min(2.2,(ps.x+cs.x)*.07));
  const pCenter=-(ps.x/2+gap/2),cCenter=cs.x/2+gap/2;
  runtime.primary.model.position.x+=pCenter-pc.x;
  runtime.compare.model.position.x+=cCenter-cc.x;
  runtime.primary.model.updateMatrixWorld(true);runtime.compare.model.updateMatrixWorld(true);
  updateDimensions()
}
function visibleBounds(){
  const box=new THREE.Box3();let any=false;
  for(const side of ["primary","compare"]){
    if(side==="compare"&&!state.compare.enabled)continue;
    const b=getRuntimeBox(side);if(b){box.union(b);any=true}
  }
  return any?box:null
}
function fitCamera(){
  const box=visibleBounds();if(!box||!camera||!controls)return;
  const sphere=box.getBoundingSphere(new THREE.Sphere()),center=sphere.center.clone(),radius=Math.max(.5,sphere.radius);
  const vfov=THREE.MathUtils.degToRad(camera.fov),hfov=2*Math.atan(Math.tan(vfov/2)*Math.max(.45,camera.aspect));
  const distance=Math.max(radius/Math.sin(vfov/2),radius/Math.sin(hfov/2))*1.12;
  controls.target.copy(center);controls.target.y=Math.max(.5,center.y*.88);
  camera.position.set(center.x,center.y+radius*.22,center.z+distance);
  camera.near=Math.max(.02,distance/500);camera.far=Math.max(150,distance*8);camera.updateProjectionMatrix();controls.update()
}

function makeTextSprite(text){
  const c=document.createElement("canvas");c.width=512;c.height=128;const ctx=c.getContext("2d");
  ctx.clearRect(0,0,c.width,c.height);ctx.font="600 42px Chakra Petch, sans-serif";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillStyle="#d1b477";ctx.fillText(text,256,64);
  const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;const mat=new THREE.SpriteMaterial({map:tex,transparent:true,depthTest:false});const sprite=new THREE.Sprite(mat);sprite.scale.set(2.1,.52,1);sprite.renderOrder=10;return sprite
}
function addLine(group,a,b,material){
  const geo=new THREE.BufferGeometry().setFromPoints([a,b]);const line=new THREE.Line(geo,material);line.renderOrder=9;group.add(line)
}
function buildDimensionGroup(side){
  const b=getRuntimeBox(side);if(!b)return null;const size=b.getSize(new THREE.Vector3()),group=new THREE.Group(),mat=new THREE.LineBasicMaterial({color:0xb99a5f,transparent:true,opacity:.9,depthTest:false}),front=b.max.z+.35;
  const out=side==="primary"?b.min.x-.55:b.max.x+.55,tick=.22;
  addLine(group,new THREE.Vector3(out,b.min.y,front),new THREE.Vector3(out,b.max.y,front),mat);
  addLine(group,new THREE.Vector3(out-tick,b.min.y,front),new THREE.Vector3(out+tick,b.min.y,front),mat);
  addLine(group,new THREE.Vector3(out-tick,b.max.y,front),new THREE.Vector3(out+tick,b.max.y,front),mat);
  const hs=makeTextSprite(size.y.toFixed(2)+" m");hs.position.set(out+(side==="primary"?-.85:.85),(b.min.y+b.max.y)/2,front);group.add(hs);
  const y=.16;
  addLine(group,new THREE.Vector3(b.min.x,y,front),new THREE.Vector3(b.max.x,y,front),mat);
  addLine(group,new THREE.Vector3(b.min.x,y-tick,front),new THREE.Vector3(b.min.x,y+tick,front),mat);
  addLine(group,new THREE.Vector3(b.max.x,y-tick,front),new THREE.Vector3(b.max.x,y+tick,front),mat);
  const ls=makeTextSprite(size.x.toFixed(2)+" m");ls.position.set((b.min.x+b.max.x)/2,y+.48,front);group.add(ls);
  return group
}
function disposeGroup(group){
  if(!group)return;group.traverse(o=>{o.geometry?.dispose?.();if(o.material){const mats=Array.isArray(o.material)?o.material:[o.material];for(const m of mats){m.map?.dispose?.();m.dispose?.()}}});scene.remove(group)
}
function updateDimensions(){
  for(const side of ["primary","compare"]){disposeGroup(dimensionGroups[side]);dimensionGroups[side]=null}
  if(!state.dimensions)return;
  dimensionGroups.primary=buildDimensionGroup("primary");if(dimensionGroups.primary)scene.add(dimensionGroups.primary);
  if(state.compare.enabled){dimensionGroups.compare=buildDimensionGroup("compare");if(dimensionGroups.compare)scene.add(dimensionGroups.compare)}
}

function updateFood(){
  const d=speciesData(state.primary.species),menu=d?.diet?.menu||d?.diet?.sources||{};
  const render=(id,arr)=>{$(id).innerHTML=(arr||[]).length?(arr||[]).map(x=>"<span>"+String(x)+"</span>").join(""):"<span>N/A</span>"};
  render("#foodCarb",menu.carb);render("#foodProtein",menu.protein);render("#foodLipid",menu.lipid)
}
function updateUI(){
  const p=statsAt("primary"),c=statsAt("compare"),ps=state.primary,cs=state.compare,pg=p.growth,cg=c.growth;
  $("#reportSpecies").textContent=ps.species;$("#reportAge").textContent=stageFor(pg,ps.path);$("#reportDiet").textContent=speciesData(ps.species)?.diet?.type||"N/A";
  $("#reportWeight").textContent=p.weight==null?"N/A":fmt(p.weight)+" kg";$("#reportSpeed").textContent=p.speed==null?"N/A":fmt(p.speed*.036)+" km/h";$("#reportBite").textContent=p.bite==null?"N/A":fmt(p.bite);
  $("#weightStat").textContent=p.weight==null?"N/A":fmt(p.weight)+" kg";$("#speedStat").textContent=p.speed==null?"N/A":fmt(p.speed*.036)+" km/h";$("#biteStat").textContent=p.bite==null?"N/A":fmt(p.bite);$("#attackStat").textContent=p.attack==null?"N/A":fmt(p.attack,3);
  $("#reportGrowth").textContent=pct(pg);$("#reportAttack").textContent=p.attack==null?"N/A":fmt(p.attack,3);$("#reportPath").textContent=ps.path.toUpperCase();$("#reportTitle").textContent=stageFor(pg,ps.path)+" · "+ps.path.toUpperCase()+" PATH";$("#reportNote").textContent=ui[state.lang].reportNote;
  $("#primaryControlTitle").textContent=ps.species;$("#compareControlTitle").textContent=cs.species;$("#primaryModelName").textContent=ps.species.toUpperCase();$("#compareModelName").textContent=cs.species.toUpperCase();
  $("#primaryModelMeta").textContent=(p.weight==null?"N/A":fmt(p.weight)+" KG")+" · "+pct(pg);
  $("#compareModelMeta").textContent=(c.weight==null?"N/A":fmt(c.weight)+" KG")+" · "+pct(cg);
  $("#stageChip").textContent=ps.species.toUpperCase()+" · "+pct(pg)+" · "+stageFor(pg,ps.path);
  $("#compareChip").textContent=cs.species.toUpperCase()+" · "+pct(cg)+" · "+stageFor(cg,cs.path);
  $("#compareWeight").textContent=c.weight==null?"N/A":fmt(c.weight)+" kg";$("#compareSpeed").textContent=c.speed==null?"N/A":fmt(c.speed*.036)+" km/h";$("#compareBite").textContent=c.bite==null?"N/A":fmt(c.bite);$("#compareAttack").textContent=c.attack==null?"N/A":fmt(c.attack,3);$("#compareStage").textContent=pct(cg)+" · "+stageFor(cg,cs.path)+" · "+cs.path.toUpperCase();$("#compareDiet").textContent=speciesData(cs.species)?.diet?.type||"N/A";
  $("#compareModelLabel").hidden=!cs.enabled;$("#compareChip").hidden=!cs.enabled;$("#compareControlsBody").hidden=!cs.enabled;
  updateFood()
}
function syncControls(){
  $("#primarySpeciesSelect").value=state.primary.species;$("#compareSpeciesSelect").value=state.compare.species;$("#compareEnabled").checked=state.compare.enabled;$("#sameGrowth").checked=state.sameGrowth;$("#dimensionsToggle").checked=state.dimensions;
  $("#primaryGrowthSlider").value=state.primary.growth*100;if(document.activeElement!==$("#primaryGrowthNumber"))$("#primaryGrowthNumber").value=pct(state.primary.growth).replace("%","");
  $("#compareGrowthSlider").value=state.compare.growth*100;if(document.activeElement!==$("#compareGrowthNumber"))$("#compareGrowthNumber").value=pct(state.compare.growth).replace("%","");
  $("#compareGrowthControls").hidden=state.sameGrowth;
  $$("[data-primary-path]").forEach(b=>b.classList.toggle("active",b.dataset.primaryPath===state.primary.path));
  $$("[data-compare-path]").forEach(b=>b.classList.toggle("active",b.dataset.comparePath===state.compare.path))
}
function syncUrl(){
  const u=new URL(location.href);
  u.searchParams.set("species",state.primary.species);u.searchParams.set("growth",pct(state.primary.growth).replace("%",""));u.searchParams.set("path",state.primary.path);
  u.searchParams.set("compare",state.compare.enabled?state.compare.species:"none");u.searchParams.set("sameGrowth",state.sameGrowth?"1":"0");
  if(!state.sameGrowth)u.searchParams.set("compareGrowth",pct(state.compare.growth).replace("%",""));else u.searchParams.delete("compareGrowth");
  u.searchParams.set("comparePath",state.compare.path);u.searchParams.set("animation",state.animation);
  if(state.dimensions)u.searchParams.set("dimensions","1");else u.searchParams.delete("dimensions");
  u.searchParams.delete("tab");history.replaceState(null,"",u)
}
function updateModelLabelPositions(){
  const wrap=$("#canvasWrap"),w=wrap.clientWidth,h=wrap.clientHeight;
  for(const side of ["primary","compare"]){
    const el=side==="primary"?$("#primaryModelLabel"):$("#compareModelLabel");if(side==="compare"&&!state.compare.enabled){el.hidden=true;continue}
    const b=getRuntimeBox(side);if(!b){el.hidden=true;continue}
    const p=new THREE.Vector3((b.min.x+b.max.x)/2,b.max.y+.35,(b.min.z+b.max.z)/2).project(camera);
    if(p.z>1){el.hidden=true;continue}
    el.hidden=false;el.style.left=((p.x*.5+.5)*w)+"px";el.style.top=((-p.y*.5+.5)*h)+"px"
  }
}

function setAnimation(name){
  state.animation=name;$("#animationSelect").value=name;
  for(const side of ["primary","compare"]){
    const rt=runtime[side],clip=rt.clips?.[name];if(!rt.mixer||!clip)continue;
    rt.action?.fadeOut(.15);rt.action=rt.mixer.clipAction(clip);rt.action.reset().fadeIn(.15).play();rt.action.paused=!state.playing
  }
  syncUrl()
}
function rebuildSide(side){
  const rt=runtime[side],name=state[side].species,asset=assetCache.get(name);if(!asset)return;
  if(rt.model)scene.remove(rt.model);
  rt.model=SkeletonUtils.clone(asset.scene);rt.model.traverse(o=>{if(o.isMesh&&o.material)o.material.needsUpdate=true});scene.add(rt.model);
  rt.mixer=new THREE.AnimationMixer(rt.model);rt.clips={};for(const c of asset.animations)rt.clips[c.name]=c;rt.action=null;
  applySpeciesMorph(rt.model,name,effectiveGrowth(side),state[side].path);
  const chosen=rt.clips[state.animation]?state.animation:(rt.clips.Idle?"Idle":Object.keys(rt.clips)[0]);if(chosen){const a=rt.mixer.clipAction(rt.clips[chosen]);a.play();a.paused=!state.playing;rt.action=a}
}
function refreshScene({fit=false}={}){
  applySpeciesMorph(runtime.primary.model,state.primary.species,state.primary.growth,state.primary.path);
  applySpeciesMorph(runtime.compare.model,state.compare.species,effectiveGrowth("compare"),state.compare.path);
  placeModels();syncControls();updateUI();syncUrl();if(fit)setTimeout(fitCamera,0)
}

function makeLoader(){
  const loader=new GLTFLoader();loader.setMeshoptDecoder(MeshoptDecoder);
  const ktx2=new KTX2Loader().setTranscoderPath("https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/libs/basis/");ktx2.detectSupport(renderer);loader.setKTX2Loader(ktx2);return loader
}
function loadAsset(name){return new Promise((resolve,reject)=>makeLoader().load(registryEntry(name).modelPath,resolve,undefined,reject))}
async function ensureAsset(name){
  if(assetCache.has(name))return assetCache.get(name);
  const asset=await loadAsset(name);assetCache.set(name,asset);computeAdultMetric(name);return asset
}
async function switchSpecies(side,name){
  if(!availableSpecies.includes(name))return;
  $("#loadStatus").textContent=ui[state.lang].loading;
  try{await ensureAsset(name);state[side].species=name;rebuildSide(side);refreshScene({fit:true});setAnimation(state.animation);$("#loadStatus").textContent=ui[state.lang].ready}
  catch(error){console.error("Viewer asset failed",name,error);$("#loadStatus").textContent=ui[state.lang].fail}
}
async function loadModels(){
  $("#loadStatus").textContent=ui[state.lang].loading;
  try{
    await ensureAsset(state.primary.species);
    if(state.compare.enabled)await ensureAsset(state.compare.species);
    rebuildSide("primary");if(state.compare.enabled)rebuildSide("compare");
    refreshScene({fit:true});setAnimation(state.animation);$("#loadStatus").textContent=ui[state.lang].ready
  }catch(error){console.error("Viewer asset failed",error);$("#loadStatus").textContent=ui[state.lang].fail;$("#fallback").hidden=false}
}

function initScene(){
  if(!window.WebGLRenderingContext){$("#fallback").hidden=false;return}
  const canvas=$("#viewerCanvas");renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:"high-performance"});renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.03;
  scene=new THREE.Scene();scene.fog=new THREE.FogExp2(0x090d0a,.018);camera=new THREE.PerspectiveCamera(34,1,.02,200);
  controls=new OrbitControls(camera,canvas);controls.enableDamping=true;controls.enablePan=true;controls.minDistance=2;controls.maxDistance=60;controls.maxPolarAngle=Math.PI*.54;
  scene.add(new THREE.HemisphereLight(0xb9c5af,0x20170f,1.5));const key=new THREE.DirectionalLight(0xffddb0,3.1);key.position.set(6,9,7);scene.add(key);const rim=new THREE.DirectionalLight(0x7e9c83,1.8);rim.position.set(-7,5,-8);scene.add(rim);
  const floor=new THREE.Mesh(new THREE.PlaneGeometry(34,20),new THREE.MeshStandardMaterial({color:0x10140f,roughness:1,metalness:0}));floor.rotation.x=-Math.PI/2;floor.position.y=-.025;scene.add(floor);
  const grid=new THREE.GridHelper(34,34,0x4d4a35,0x243027);grid.position.y=.002;grid.material.opacity=.28;grid.material.transparent=true;scene.add(grid);
  clock=new THREE.Clock();new ResizeObserver(resize).observe($("#canvasWrap"));loadModels();animate()
}
function resize(){if(!renderer)return;const el=$("#canvasWrap"),w=Math.max(1,el.clientWidth),h=Math.max(1,el.clientHeight);renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()}
function animate(){requestAnimationFrame(animate);const dt=clock?.getDelta()||0;if(state.playing){runtime.primary.mixer?.update(dt);runtime.compare.mixer?.update(dt)}controls?.update();renderer?.render(scene,camera);updateModelLabelPositions()}

function setLang(lang){state.lang=lang;localStorage.setItem("ki-rules-lang",lang);document.documentElement.lang=lang;$$("[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));$("#viewerLead").textContent=ui[lang].lead;updateUI()}
function bind(){
  populateSpeciesSelectors();
  const q=new URLSearchParams(location.search);
  const primarySpecies=q.get("species");if(availableSpecies.includes(primarySpecies))state.primary.species=primarySpecies;
  const compareSpecies=q.get("compare");if(availableSpecies.includes(compareSpecies))state.compare.species=compareSpecies;else if(compareSpecies==="none")state.compare.enabled=false;
  const pg=Number(q.get("growth"));if(Number.isFinite(pg))state.primary.growth=THREE.MathUtils.clamp(pg/100,0,1);
  const cg=Number(q.get("compareGrowth"));if(Number.isFinite(cg))state.compare.growth=THREE.MathUtils.clamp(cg/100,0,1);
  if(["frail","prime"].includes(q.get("path")))state.primary.path=q.get("path");
  if(["frail","prime"].includes(q.get("comparePath")))state.compare.path=q.get("comparePath");
  state.sameGrowth=q.get("sameGrowth")==="1";if(state.sameGrowth){state.compare.growth=state.primary.growth;state.compare.path=state.primary.path}state.dimensions=q.get("dimensions")==="1";if(q.get("animation"))state.animation=q.get("animation");
  state.lang=localStorage.getItem("ki-rules-lang")||"th";setLang(["th","en","vi"].includes(state.lang)?state.lang:"th");syncControls();updateUI();

  $("#primarySpeciesSelect").addEventListener("change",e=>switchSpecies("primary",e.target.value));
  $("#compareSpeciesSelect").addEventListener("change",e=>switchSpecies("compare",e.target.value));
  $("#compareEnabled").addEventListener("change",async e=>{state.compare.enabled=e.target.checked;if(state.compare.enabled){try{await ensureAsset(state.compare.species);rebuildSide("compare")}catch(error){console.error("Viewer asset failed",state.compare.species,error);state.compare.enabled=false;e.target.checked=false;$("#loadStatus").textContent=ui[state.lang].fail}}refreshScene({fit:true})});
  $("#sameGrowth").addEventListener("change",e=>{state.sameGrowth=e.target.checked;if(state.sameGrowth){state.compare.growth=state.primary.growth;state.compare.path=state.primary.path}refreshScene()});

  const setPrimaryGrowth=v=>{const n=Number(v);if(!Number.isFinite(n))return;state.primary.growth=THREE.MathUtils.clamp(n/100,0,1);if(state.sameGrowth)state.compare.growth=state.primary.growth;refreshScene()};
  $("#primaryGrowthSlider").addEventListener("input",e=>setPrimaryGrowth(e.target.value));$("#primaryGrowthNumber").addEventListener("input",e=>setPrimaryGrowth(e.target.value));$("#primaryGrowthNumber").addEventListener("blur",()=>{$("#primaryGrowthNumber").value=pct(state.primary.growth).replace("%","")});
  const setCompareGrowth=v=>{const n=Number(v);if(!Number.isFinite(n))return;state.compare.growth=THREE.MathUtils.clamp(n/100,0,1);refreshScene()};
  $("#compareGrowthSlider").addEventListener("input",e=>setCompareGrowth(e.target.value));$("#compareGrowthNumber").addEventListener("input",e=>setCompareGrowth(e.target.value));$("#compareGrowthNumber").addEventListener("blur",()=>{$("#compareGrowthNumber").value=pct(state.compare.growth).replace("%","")});

  $$("[data-primary-path]").forEach(b=>b.addEventListener("click",()=>{state.primary.path=b.dataset.primaryPath;if(state.sameGrowth)state.compare.path=state.primary.path;refreshScene()}));
  $$("[data-compare-path]").forEach(b=>b.addEventListener("click",()=>{state.compare.path=b.dataset.comparePath;if(state.sameGrowth)state.primary.path=state.compare.path;refreshScene()}));
  $("#dimensionsToggle").addEventListener("change",e=>{state.dimensions=e.target.checked;updateDimensions();syncUrl()});
  $("#resetCamera").addEventListener("click",fitCamera);
  $("#animationSelect").addEventListener("change",e=>setAnimation(e.target.value));
  $("#playPause").addEventListener("click",()=>{state.playing=!state.playing;$("#playPause").textContent=state.playing?"Pause":"Play";for(const side of ["primary","compare"])if(runtime[side].action)runtime[side].action.paused=!state.playing});
  $$("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));$("#retryBtn").addEventListener("click",()=>location.reload())
}
bind();initScene();