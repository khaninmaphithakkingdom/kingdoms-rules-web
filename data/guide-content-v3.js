window.KI_GUIDE_CONTENT = (() => {
  const t = (th,en,vi)=>({th,en,vi});
  const m = (name,category,effect,value="",restriction="",slot="",unlock=null,status="current",confidence="community-reference") => ({
    name,category,effect,value,restriction,slot,unlock,status,confidence,lastVerified:"2026-10-02"
  });

  const ui = {
    th:{
      gameGuide:"GAME GUIDE",backRules:"กฎเซิร์ฟเวอร์",home:"หน้าหลัก Game Guide",dinosaurs:"ไดโนเสาร์",mutations:"MUTATIONS",
      prime:"PRIME & ELDER",diet:"DIET & GROWTH",nesting:"NESTING",zones:"MIGRATION / PATROL / SANCTUARY",combat:"COMBAT / GAME SYSTEMS",
      guideLead:"คลังข้อมูลเกม The Isle: EVRIMA ของ Kingdoms Isle — แยกจากกฎเซิร์ฟเวอร์อย่างชัดเจน",
      guideNotice:"ข้อมูลใน Game Guide คือข้อมูล mechanics ของเกม ไม่ใช่ Server Rules ของ Kingdoms Isle",
      search:"ค้นหา...",all:"ทั้งหมด",current:"CURRENT EVRIMA",dataset:"Dataset",source:"แหล่งข้อมูล",lastVerified:"ตรวจล่าสุด",
      weight:"น้ำหนัก",speed:"ความเร็ว",bite:"Bite / Attack",dietType:"ประเภทอาหาร",status:"สถานะ",
      preferredFood:"Preferred Diet / Foods",attacks:"Attacks",speciesData:"ข้อมูล Species",primeCompare:"Prime / Frail Comparison",
      noData:"ไม่มีข้อมูลที่ยืนยันได้",derived:"คำนวณจาก curve ของ game-data",adult75:"Adult 75%",frail875:"Frail 87.5%",prime875:"Prime 87.5%",frail100:"Frail Elder 100%",prime100:"Prime Elder 100%",
      difference:"ต่างจาก Adult 75%",howUnlock:"HOW TO UNLOCK",communityTested:"COMMUNITY TESTED",removed:"REMOVED",test:"TEST / HORDE",
      primeLead:"Prime เป็นระบบ endgame/lifecycle ของ EVRIMA ที่ต้องทำเงื่อนไขระหว่างชีวิตของไดโนเสาร์ก่อนเข้าสู่ช่วง Prime",
      mutationLead:"ฐานข้อมูล Mutation โดยแยก Current / Unlockable / Test / Removed ชัดเจน",
      noResults:"ไม่พบข้อมูลที่ตรงกับตัวกรอง",
      fieldDirectory:"หมวดคู่มือ",evrimaReference:"ข้อมูลอ้างอิง EVRIMA",releasedSpecies:"Species ที่เปิดให้เล่น",chooseSpecies:"เลือก Species...",speciesSearch:"ค้นหาชื่อ Species...",searchHint:"ค้นหาได้ทั้งชื่อไทย / English / Tiếng Việt",category:"หมวด",records:"รายการ",contentScope:"ข้อมูล Current โดยแยก Test / Removed",footerNote:"คู่มือเกม EVRIMA · แยกจากกฎเซิร์ฟเวอร์",currentShort:"ปัจจุบัน",catLifecycle:"Lifecycle",catSlot:"เฉพาะ Slot",catUnlockable:"ปลดล็อกได้",catTest:"Test / Horde",catRemoved:"นำออกแล้ว",activeCondition:"ต้องทำ",passiveCondition:"เงื่อนไขติดตัว",growthMilestones:"ช่วงการเติบโต",primeChecklist:"รายการตรวจ Prime",primeConditions:"10 เงื่อนไข Prime",stage:"ช่วง",selectHelp:"เลือกจากรายชื่อได้ทันที หรือพิมพ์ค้นหา"
    },
    en:{
      gameGuide:"GAME GUIDE",backRules:"SERVER RULES",home:"Guide Home",dinosaurs:"DINOSAURS",mutations:"MUTATIONS",
      prime:"PRIME & ELDER",diet:"DIET & GROWTH",nesting:"NESTING",zones:"MIGRATION / PATROL / SANCTUARY",combat:"COMBAT / GAME SYSTEMS",
      guideLead:"Kingdoms Isle reference for The Isle: EVRIMA mechanics — clearly separated from server rules.",
      guideNotice:"Game Guide content describes game mechanics. It is not a Kingdoms Isle Server Rule.",
      search:"Search...",all:"All",current:"CURRENT EVRIMA",dataset:"Dataset",source:"Source",lastVerified:"Last verified",
      weight:"Weight",speed:"Speed",bite:"Bite / Attack",dietType:"Diet",status:"Status",
      preferredFood:"Preferred Diet / Foods",attacks:"Attacks",speciesData:"Species Data",primeCompare:"Prime / Frail Comparison",
      noData:"No verified data",derived:"Calculated from the game-data curve",adult75:"Adult 75%",frail875:"Frail 87.5%",prime875:"Prime 87.5%",frail100:"Frail Elder 100%",prime100:"Prime Elder 100%",
      difference:"vs Adult 75%",howUnlock:"HOW TO UNLOCK",communityTested:"COMMUNITY TESTED",removed:"REMOVED",test:"TEST / HORDE",
      primeLead:"Prime is EVRIMA's lifecycle endgame system. Conditions are completed during the life of the dinosaur before the Prime window.",
      mutationLead:"Mutation database with Current / Unlockable / Test / Removed content separated clearly.",
      noResults:"No data matches the current filters",
      fieldDirectory:"FIELD DIRECTORY",evrimaReference:"EVRIMA REFERENCE",releasedSpecies:"released species",chooseSpecies:"Choose a Species...",speciesSearch:"Search species...",searchHint:"Search by Thai, English, or Vietnamese name",category:"Category",records:"records",contentScope:"Current content with Test / Removed separated",footerNote:"EVRIMA Game Guide · Server Rules remain separate",currentShort:"Current",catLifecycle:"Lifecycle",catSlot:"Slot Exclusive",catUnlockable:"Unlockable",catTest:"Test / Horde",catRemoved:"Removed",activeCondition:"Active",passiveCondition:"Passive",growthMilestones:"GROWTH MILESTONES",primeChecklist:"PRIME CHECKLIST",primeConditions:"10 Prime Conditions",stage:"Stage",selectHelp:"Choose from the list or type to search"
    },
    vi:{
      gameGuide:"GAME GUIDE",backRules:"LUẬT MÁY CHỦ",home:"Trang Game Guide",dinosaurs:"KHỦNG LONG",mutations:"MUTATIONS",
      prime:"PRIME & ELDER",diet:"DIET & GROWTH",nesting:"NESTING",zones:"MIGRATION / PATROL / SANCTUARY",combat:"COMBAT / GAME SYSTEMS",
      guideLead:"Kho tham khảo cơ chế The Isle: EVRIMA của Kingdoms Isle — tách biệt rõ với luật máy chủ.",
      guideNotice:"Nội dung Game Guide mô tả cơ chế trò chơi, không phải Server Rules của Kingdoms Isle.",
      search:"Tìm kiếm...",all:"Tất cả",current:"CURRENT EVRIMA",dataset:"Dataset",source:"Nguồn",lastVerified:"Kiểm tra gần nhất",
      weight:"Cân nặng",speed:"Tốc độ",bite:"Bite / Attack",dietType:"Chế độ ăn",status:"Trạng thái",
      preferredFood:"Preferred Diet / Foods",attacks:"Attacks",speciesData:"Dữ liệu loài",primeCompare:"So sánh Prime / Frail",
      noData:"Không có dữ liệu đã xác minh",derived:"Tính từ curve của game-data",adult75:"Adult 75%",frail875:"Frail 87.5%",prime875:"Prime 87.5%",frail100:"Frail Elder 100%",prime100:"Prime Elder 100%",
      difference:"so với Adult 75%",howUnlock:"CÁCH MỞ KHÓA",communityTested:"COMMUNITY TESTED",removed:"REMOVED",test:"TEST / HORDE",
      primeLead:"Prime là hệ thống endgame theo vòng đời của EVRIMA. Bạn phải hoàn thành điều kiện trong chính vòng đời của dinosaur trước giai đoạn Prime.",
      mutationLead:"Cơ sở dữ liệu Mutation tách rõ Current / Unlockable / Test / Removed.",
      noResults:"Không có dữ liệu phù hợp bộ lọc",
      fieldDirectory:"DANH MỤC HƯỚNG DẪN",evrimaReference:"THAM KHẢO EVRIMA",releasedSpecies:"loài đang phát hành",chooseSpecies:"Chọn Species...",speciesSearch:"Tìm Species...",searchHint:"Tìm bằng tên Thái, English hoặc Tiếng Việt",category:"Danh mục",records:"mục",contentScope:"Nội dung Current, tách riêng Test / Removed",footerNote:"Hướng dẫn EVRIMA · Tách biệt với Server Rules",currentShort:"Hiện tại",catLifecycle:"Vòng đời",catSlot:"Riêng Slot",catUnlockable:"Có thể mở khóa",catTest:"Test / Horde",catRemoved:"Đã gỡ",activeCondition:"Chủ động",passiveCondition:"Thụ động",growthMilestones:"MỐC TĂNG TRƯỞNG",primeChecklist:"DANH SÁCH PRIME",primeConditions:"10 điều kiện Prime",stage:"Giai đoạn",selectHelp:"Chọn từ danh sách hoặc gõ để tìm"
    }
  };

  const speciesAliases = {
    Allosaurus:t("อัลโลซอรัส","Allosaurus","Khủng long Allosaurus"),
    Austroraptor:t("ออสโตรแรปเตอร์","Austroraptor","Chim săn mồi phương nam"),
    Beipiaosaurus:t("เบย์เพียโอซอรัส","Beipiaosaurus","Khủng long Bắc Phiêu"),
    Carnotaurus:t("คาร์โนทอรัส","Carnotaurus","Khủng long bò ăn thịt"),
    Ceratosaurus:t("เซราโทซอรัส","Ceratosaurus","Khủng long có sừng"),
    Deinosuchus:t("ไดโนซูคัส","Deinosuchus","Cá sấu khủng khiếp"),
    Diabloceratops:t("ไดแอบโลเซราทอปส์","Diabloceratops","Khủng long mặt sừng quỷ"),
    Dilophosaurus:t("ไดโลโฟซอรัส","Dilophosaurus","Khủng long hai mào"),
    Dryosaurus:t("ดรายโอซอรัส","Dryosaurus","Khủng long cây sồi"),
    Gallimimus:t("แกลลิมิมัส","Gallimimus","Khủng long bắt chước gà"),
    Herrerasaurus:t("เฮอร์เรราซอรัส","Herrerasaurus","Khủng long Herrera"),
    Hypsilophodon:t("ฮิปซิโลโฟดอน","Hypsilophodon","Khủng long răng mào cao"),
    Kentrosaurus:t("เคนโทรซอรัส","Kentrosaurus","Khủng long Kentro"),
    Maiasaura:t("ไมอาซอรา","Maiasaura","Khủng long mẹ tốt"),
    Omniraptor:t("ออมนิแรปเตอร์","Omniraptor","Chim săn mồi Omni"),
    Pachycephalosaurus:t("พาคีเซฟาโลซอรัส","Pachycephalosaurus","Khủng long đầu dày"),
    Pteranodon:t("เทอราโนดอน","Pteranodon","Thằn lằn bay Pteranodon"),
    Stegosaurus:t("สเตโกซอรัส","Stegosaurus","Khủng long kiếm"),
    Tenontosaurus:t("เทนอนโทซอรัส","Tenontosaurus","Khủng long Tenonto"),
    Triceratops:t("ไทรเซราทอปส์","Triceratops","Khủng long ba sừng"),
    Troodon:t("โทรโอดอน","Troodon","Khủng long Troodon"),
    Tyrannosaurus:t("ไทแรนโนซอรัส / ทีเร็กซ์","Tyrannosaurus / T-Rex","Khủng long bạo chúa / T-Rex")
  };

  const hub = [
    {icon:"🦖",key:"dinosaurs",href:"../dinosaurs/",desc:t("ฐานข้อมูล Current EVRIMA species พร้อม stat และ Prime/Frail curve","Current EVRIMA species database with stats and Prime/Frail curves","Cơ sở dữ liệu loài EVRIMA hiện tại cùng chỉ số và curve Prime/Frail")},
    {icon:"🧬",key:"mutations",href:"../mutations/",desc:t("Mutation, effect, restriction และวิธีปลดล็อกที่ยืนยันได้","Mutations, effects, restrictions and verified unlock requirements","Mutation, hiệu ứng, giới hạn và điều kiện mở khóa đã xác minh")},
    {icon:"👑",key:"prime",href:"../prime/",desc:t("Prime, Frail, Elder, Prime Elder และ checklist","Prime, Frail, Elder, Prime Elder and checklist","Prime, Frail, Elder, Prime Elder và checklist")},
    {icon:"🥩",key:"diet",href:"diet-growth/",desc:t("สารอาหาร การเติบโต และ growth multiplier","Nutrients, growth and growth multipliers","Dinh dưỡng, tăng trưởng và hệ số tăng trưởng")},
    {icon:"🥚",key:"nesting",href:"nesting/",desc:t("Courtship, nest, eggs และ hatchling lifecycle","Courtship, nests, eggs and hatchling lifecycle","Courtship, tổ, trứng và vòng đời hatchling")},
    {icon:"🧭",key:"zones",href:"zones/",desc:t("Migration, Patrol และ Sanctuary mechanics","Migration, Patrol and Sanctuary mechanics","Cơ chế Migration, Patrol và Sanctuary")},
    {icon:"⚔️",key:"combat",href:"combat/",desc:t("Combat controls, damage types และ mechanics หลัก","Combat controls, damage types and core mechanics","Điều khiển chiến đấu, loại sát thương và cơ chế chính")}
  ];

  const primeConditions = [
    {n:1,title:t("เข้า Sanctuary ตอน Juvenile","Visit a Sanctuary as a Juvenile","Vào Sanctuary khi còn Juvenile"),type:"active",body:t("เข้าเขต Sanctuary ที่กำลัง active ขณะยังอยู่ช่วง Juvenile","Enter an active Sanctuary while still Juvenile.","Vào Sanctuary đang hoạt động khi vẫn còn Juvenile.")},
    {n:2,title:t("เกิดจาก Nest ของผู้เล่น","Get Nested In","Sinh ra từ Nest của người chơi"),type:"active",body:t("เริ่มชีวิตจากการเข้าร่วม Nest ของผู้เล่นคนอื่น","Spawn into the life through another player's nest.","Bắt đầu vòng đời thông qua nest của người chơi khác.")},
    {n:3,title:t("Perfect Diet","Get Perfect Diet","Perfect Diet"),type:"active",body:t("มี β / γ / α อย่างน้อย 1% พร้อมกัน","Have at least 1% in β / γ / α at the same time.","Có ít nhất 1% β / γ / α cùng lúc.")},
    {n:4,title:t("Mass Migration","Visit Mass Migration Zone","Vào Mass Migration Zone"),type:"active",body:t("เข้าเขต Mass Migration ที่กำลัง active","Stand inside an active Mass Migration zone.","Đứng trong Mass Migration zone đang hoạt động.")},
    {n:5,title:t("Migration Zone 2 โซน","Visit 2 Migration Zones","Vào 2 Migration Zone"),type:"active",body:t("เข้า Migration Zone คนละโซนให้ครบ 2 ครั้งในชีวิตเดียว","Visit two different regular Migration zones in the same life.","Vào hai Migration zone khác nhau trong cùng một vòng đời.")},
    {n:6,title:t("Patrol Zone 4 โซน","Visit 4 Patrol Zones","Vào 4 Patrol Zone"),type:"active",body:t("เข้า Patrol Zone ให้ครบ 4 โซนในชีวิตเดียว","Visit four Patrol zones in the same life.","Vào bốn Patrol zone trong cùng một vòng đời.")},
    {n:7,title:t("ไม่มี Infertility","Never be infertile","Không bị Infertility"),type:"passive",body:t("ต้องไม่ติด Infertility ระหว่างชีวิตนี้","Do not receive the Infertility mutation during this life.","Không nhận mutation Infertility trong vòng đời này.")},
    {n:8,title:t("ไม่มี Muscle Spasms","Never get Muscle Spasms","Không bị Muscle Spasms"),type:"passive",community:true,body:t("ต้องไม่ติด Muscle Spasms; trigger รายละเอียดยังอิง community testing","Avoid Muscle Spasms; trigger details remain community-tested.","Tránh Muscle Spasms; chi tiết trigger vẫn dựa trên community testing.")},
    {n:9,title:t("เลี้ยงลูกถึง Subadult","Raise offspring to Subadult","Nuôi con đến Subadult"),type:"active",body:t("ฟักลูกจาก Nest แล้วให้ลูกอย่างน้อยหนึ่งตัวรอดถึง Subadult","Raise at least one hatched offspring to Subadult.","Nuôi ít nhất một con non từ nest sống đến Subadult.")},
    {n:10,title:t("Species-specific automatic condition","Species-specific automatic condition","Điều kiện tự động theo loài"),type:"passive",community:true,body:t("Hypsi / Troodon / Beipi / Dryo / Deino ถูกระบุว่าได้เงื่อนไขนี้อัตโนมัติในแหล่ง community reference ปัจจุบัน","Current community reference lists Hypsi / Troodon / Beipi / Dryo / Deino as automatically meeting this condition.","Nguồn community hiện tại ghi Hypsi / Troodon / Beipi / Dryo / Deino tự động đạt điều kiện này.")}
  ];

  const mutations = [
    m("Accelerated Prey Drive","Lifecycle",t("เพิ่มความเสียหายต่อเป้าหมายที่ HP ต่ำกว่า 35%","Deal more damage to animals below 35% health.","Gây thêm sát thương lên mục tiêu dưới 35% máu"),"10%","Carnivore"),
    m("Advanced Gestation","Lifecycle",t("เร่ง gestation, incubation และ cooldown ของไข่","Faster egg gestation, incubation, and cooldown rate.","Tăng tốc thai kỳ, ấp trứng và hồi chiêu"),"50%","Female Only"),
    m("Barometric Sensitivity","Lifecycle",t("แจ้งเตือนก่อนพายุหรือภัยแล้ง","Receive an indication prior to storms or droughts.","Báo hiệu trước bão hoặc hạn hán"),"","Herbivore"),
    m("Cannibalistic","Lifecycle",t("เพิ่ม species ของตัวเองเป็น preferred prey สำหรับ nutrient","Adds your own species as preferred prey for nutrients.","Thêm chính loài mình vào preferred prey để nhận nutrient"),"","Carnivore","Slot 2 & 4"),
    m("Cellular Regeneration","Lifecycle",t("ฟื้น HP เร็วขึ้นเล็กน้อย","Recover health slightly faster.","Hồi máu nhanh hơn một chút"),"15%"),
    m("Congenital Hypoalgesia","Lifecycle",t("ลดความเสียหายที่ได้รับเมื่อสู้กับ species ที่ใหญ่กว่า","Reduce incoming damage when fighting larger species.","Giảm sát thương nhận vào khi chiến đấu với loài lớn hơn"),"15%"),
    m("Efficient Digestion","Lifecycle",t("อาหารลดช้าลง","Food drains more slowly.","Thức ăn giảm chậm hơn"),"20%"),
    m("Enlarged Meniscus","Lifecycle",t("Fall damage จะหัก stamina ก่อน HP","Fall damage hits stamina before draining health.","Sát thương rơi trừ stamina trước khi trừ máu")),
    m("Epidermal Fibrosis","Lifecycle",t("เพิ่มความต้านทาน bleed","Increase bleed resistance.","Tăng kháng bleed"),"15%"),
    m("Featherweight","Lifecycle",t("รอยเท้าหายเร็วขึ้นมาก","Footprints fade much faster.","Dấu chân biến mất nhanh hơn nhiều"),"50%"),
    m("Hematophagy","Lifecycle",t("ฟื้น thirst บางส่วนขณะกินซาก","Restore some thirst while eating corpses.","Hồi một phần khát khi ăn xác"),"15%","Carnivore"),
    m("Hemomania","Lifecycle",t("เพิ่ม damage ต่อเป้าหมายที่กำลัง bleed","Deal extra damage to a bleeding target.","Gây thêm sát thương lên mục tiêu đang bleed"),"5%","Carnivore"),
    m("Hydrodynamic","Lifecycle",t("เพิ่มความเร็วว่ายน้ำ","Increase swimming speed.","Tăng tốc độ bơi"),"15%"),
    m("Hydro-regenerative","Lifecycle",t("ฟื้น HP เร็วขึ้นระหว่างฝนตก","Recover health faster during rainy weather.","Hồi máu nhanh hơn khi trời mưa"),"25%"),
    m("Hypervigilance","Lifecycle",t("เพิ่มมุมกล้องตอนกิน/ดื่ม และทำให้ได้ยินเสียงเท้าคนอื่นชัดขึ้น","Increase camera angles while eating/drinking and improve footsteps audio from others.","Tăng góc camera khi ăn/uống và nghe tiếng bước chân người khác rõ hơn"),"50%","Herbivore"),
    m("Increased Inspiratory Capacity","Lifecycle",t("เพิ่มความจุ O₂","Increase O₂ capacity.","Tăng dung lượng O₂"),"15%"),
    m("Infrasound Communication","Lifecycle",t("ลดเสียงขณะคุยใน chat อย่างมาก","Make significantly less noise when talking in chat.","Giảm đáng kể tiếng động khi nói trong chat"),"50%"),
    m("Nocturnal","Lifecycle",t("ฟื้น health / locked-health เร็วขึ้นตอนกลางคืน","Faster health / locked-health recovery at night.","Hồi health / locked-health nhanh hơn ban đêm"),"5%"),
    m("Osteosclerosis","Lifecycle",t("ต้านทานหรือลด fracture damage","Resist or reduce fracture damage.","Kháng hoặc giảm fracture damage"),"20%"),
    m("Photosynthetic Regeneration","Lifecycle",t("ฟื้น stamina เร็วขึ้นตอนกลางวัน","Regenerate stamina faster during the day.","Hồi stamina nhanh hơn ban ngày"),"10%","Herbivore"),
    m("Photosynthetic Tissue","Lifecycle",t("ฟื้น health / locked-health เร็วขึ้นตอนกลางวัน","Faster health / locked-health recovery during the day.","Hồi health / locked-health nhanh hơn ban ngày"),"5%"),
    m("Reabsorption","Lifecycle",t("ฟื้นน้ำเล็กน้อยเมื่อฝนตกหรือว่ายในน้ำดื่มได้","Recover a small amount of water during rain or while swimming in drinkable water.","Hồi một ít nước khi mưa hoặc bơi trong nước uống được"),"1"),
    m("Sequential Hermaphroditism","Lifecycle",t("เปลี่ยนเพศ; mutation นี้ไม่ส่งต่อให้ลูก","Change sex; this mutation is not passed to children.","Đổi giới tính; mutation này không truyền cho con")),
    m("Social Behavior","Lifecycle",t("เพิ่มขนาดกลุ่ม","Increase group size.","Tăng kích thước nhóm"),"","Herbivore / Omnivore · Group Leader Only"),
    m("Submerged Optical Retention","Lifecycle",t("เพิ่มระยะการมองเห็นใต้น้ำ","Increase underwater vision range.","Tăng tầm nhìn dưới nước"),"5%"),
    m("Sustained Hydration","Lifecycle",t("น้ำลดช้าลง","Water drains more slowly.","Nước giảm chậm hơn"),"20%"),
    m("Truculency","Lifecycle",t("Bucking มีโอกาสทำให้ตัวที่เกาะหลุดสูงขึ้น","Bucking has a higher chance to dismount latched animals.","Bucking có cơ hội hất đối thủ đang bám xuống cao hơn"),"5%","Herbivore"),
    m("Wader","Lifecycle",t("ได้รับผลจากน้ำตื้นน้อยลง","Become less hindered in shallow water.","Ít bị cản trở hơn khi đi qua nước nông"),"25%"),
    m("Xerocole Adaptation","Lifecycle",t("ได้รับน้ำบางส่วนจากการกินพืช","Gain some water when eating plants.","Nhận một phần nước khi ăn thực vật"),"15%","Herbivore"),

    m("Tactile Endurance","Slot Exclusive",t("แปลงความเสียหายที่ได้รับเป็น stamina","Convert incoming damage to stamina.","Chuyển sát thương nhận vào thành stamina"),"","Herbivore","Slot 2"),
    m("Traumatic Thrombosis","Removed",t("ถูกนำออกจาก EVRIMA ชั่วคราวเพื่อกลับมาปรับใช้ใหม่ในอนาคต","Temporarily removed from EVRIMA for future reintegration.","Tạm thời bị gỡ khỏi EVRIMA để được đưa trở lại trong tương lai."),"","","","","removed","historical"),
    m("Gastronomic Regeneration","Slot Exclusive",t("การกินช่วยฟื้น HP เล็กน้อย","Eating restores a small amount of health.","Ăn giúp hồi một ít máu"),"","","Slot 2"),
    m("Hypermetabolic Inanition","Slot Exclusive",t("ยิ่ง hunger ต่ำ ยิ่งทำ damage มากขึ้น","The lower your hunger, the more damage you deal.","Hunger càng thấp, sát thương gây ra càng cao"),"","Carnivore","Slot 2"),

    m("Augmented Tapetum","Unlockable",t("เพิ่มการมองเห็นตอนกลางคืน","Increase night vision.","Tăng khả năng nhìn ban đêm"),"","Carnivore","Slot 2",t("ฆ่าผู้เล่น 5 คนตอนกลางคืน","Kill 5 players at night.","Giết 5 người chơi vào ban đêm")),
    m("Enhanced Digestion","Unlockable",t("ลดอัตราการ decay ของ nutrient","Decrease nutrition decay rate.","Giảm tốc độ suy giảm nutrient"),"","","Slot 2 / 3",t("มี nutrient ต่อเนื่อง 60 นาที","Have nutrients for 60 minutes.","Duy trì nutrient trong 60 phút")),
    m("Heightened Ghrelin","Unlockable",t("เพิ่มความจุการ overeating อย่างมาก","Increase overeating capacity by a large amount.","Tăng mạnh khả năng overeating"),"","","Slot 2",t("รักษา hunger มากกว่า 80% ต่อเนื่อง 30 นาที","Maintain hunger above 80% for 30 minutes.","Duy trì hunger trên 80% trong 30 phút")),
    m("Multichambered Lungs","Unlockable",t("เพิ่ม threshold การฟื้น stamina","Increase stamina-regeneration threshold.","Tăng ngưỡng hồi stamina"),"","","Slot 2 / 3",t("ใช้ stamina รวม 4,500 จากการ sprint หรือ fast-swim","Drain 4,500 stamina by sprinting or fast-swimming.","Tiêu hao tổng 4.500 stamina bằng sprint hoặc bơi nhanh")),
    m("Osteophagic","Unlockable",t("กินกระดูกเพื่อช่วยฟื้น fracture","Consume bones to regenerate fractures faster.","Ăn xương để hồi fracture nhanh hơn"),"","Carnivore","",t("กินกระดูกขณะมีกระดูกหัก","Eat bones while you have a broken bone.","Ăn xương khi đang bị gãy xương")),
    m("Parthenogenesis","Unlockable",t("ทำ Nest ได้โดยไม่มีคู่; ไม่ส่งต่อให้ลูก","Nest without a mate; not inherited by children.","Làm nest không cần bạn đời; không truyền cho con"),"","Female Only","Slot 2",t("ปลดล็อกใน Slot 2 ตามระบบ","Unlocks on Slot 2.","Mở ở Slot 2 theo hệ thống")),
    m("Prolific Reproduction","Unlockable",t("ลูกมี health/stamina regen สูงขึ้น ใช้อาหารน้อยลง และโตเร็วขึ้น","Offspring get better health/stamina regen, need less food, and grow faster.","Con non hồi health/stamina tốt hơn, cần ít thức ăn hơn và lớn nhanh hơn"),"","Female Only","Slot 2",t("ปลดล็อกใน Slot 2 ตามระบบ","Unlocks on Slot 2.","Mở ở Slot 2 theo hệ thống")),
    m("Reinforced Tendons","Unlockable",t("กระโดดใช้ stamina น้อยลง; Pteranodon ใช้ takeoff stamina น้อยลง","Jumping costs less stamina; reduces Pteranodon takeoff stamina.","Nhảy tốn ít stamina hơn; Pteranodon tốn ít stamina cất cánh hơn"),"","","",t("กระโดด 50 ครั้ง","Jump 50 times.","Nhảy 50 lần")),
    m("Reniculate Kidneys","Unlockable",t("ดื่มน้ำเค็มได้","Can drink saltwater.","Có thể uống nước mặn"),"","", "Slot 2 / 3",t("เสีย thirst 1,250 จากการดื่มน้ำเค็ม","Lose 1,250 thirst by drinking saltwater.","Mất 1.250 thirst do uống nước mặn")),

    m("Pit Organ","Test / Horde",t("มองเห็นแหล่ง IR (infrared)","See sources of IR (infrared) light.","Nhìn thấy nguồn sáng IR (hồng ngoại)"),"","","","", "test","test-reference"),
    m("Paratrepsis","Test / Horde",t("ทำ fracture ปลอมได้","Fake fractures.","Có thể giả fracture"),"","","","", "test","test-reference"),
    m("Cochlear Sensitivity","Test / Horde",t("มีสัญญาณบอก sound trap จากระยะไกล","Indicate sound traps from a distance.","Báo hiệu sound trap từ xa"),"","","","", "test","test-reference"),
    m("Intraspecific Aggression","Removed",t("เคยเพิ่ม damage ต่อ species เดียวกัน; ถูกถอดใน 0.15.116","Formerly increased damage to your own species; removed in 0.15.116.","Từng tăng sát thương lên cùng loài; đã bị gỡ ở 0.15.116"),"","","","", "removed","historical")
  ];

  const guides = {
    "diet-growth":{
      title:t("DIET & GROWTH","DIET & GROWTH","DIET & GROWTH"),
      lead:t("ระบบสารอาหารและการเติบโตของ EVRIMA","EVRIMA nutrient and growth systems","Hệ thống dinh dưỡng và tăng trưởng EVRIMA"),
      cards:[
        {h:t("3 Nutrients","3 Nutrients","3 Nutrient"),p:t("β Protein, γ Lipid และ α Carb เป็นสามแถบหลักของ Diet","β Protein, γ Lipid and α Carb are the three core diet bars.","β Protein, γ Lipid và α Carb là ba thanh diet chính.")},
        {h:t("Growth multiplier","Growth multiplier","Hệ số tăng trưởng"),p:t("1 nutrient = 100%, 2 = 200%, ทั้ง 3 = 300% growth rate ตาม current community guide","1 nutrient = 100%, 2 = 200%, all three = 300% growth rate in the current community guide.","1 nutrient = 100%, 2 = 200%, đủ ba = 300% growth rate theo guide cộng đồng hiện tại.")},
        {h:t("Growth pauses","Growth pauses","Tăng trưởng dừng"),p:t("หากอาหารหรือน้ำถึงศูนย์ growth สามารถหยุดได้","Growth can pause when food or hydration reaches zero.","Growth có thể dừng khi thức ăn hoặc nước về 0.")},
        {h:t("Species-specific food","Species-specific food","Thức ăn theo loài"),p:t("รายการ preferred foods ของแต่ละ species ในฐานข้อมูล Dinosaurs มาจาก current raw game-data snapshot","Preferred foods per species in the Dinosaur Database come from the current raw game-data snapshot.","Preferred foods của từng loài trong Dinosaur Database lấy từ snapshot game-data hiện tại.")}
      ],
      source:"https://www.theisle.info/guide/diets"
    },
    nesting:{
      title:t("COURTING & NESTING","COURTING & NESTING","COURTING & NESTING"),
      lead:t("วงจรการหาคู่ สร้าง Nest และเลี้ยง hatchling","Courtship, nest creation and hatchling lifecycle","Courtship, tạo nest và vòng đời hatchling"),
      cards:[
        {h:t("Courtship","Courtship","Courtship"),p:t("ระบบ Nest เริ่มจากการจับคู่และ courtship ตาม mechanics ของเกม","Nesting begins through pairing and courtship mechanics.","Nesting bắt đầu bằng ghép đôi và courtship theo cơ chế game.")},
        {h:t("Nest & Eggs","Nest & Eggs","Nest & Eggs"),p:t("หลังจับคู่ ผู้เล่นสร้าง Nest, gestate/lay eggs และ incubate ตามขั้นตอนของ EVRIMA","After pairing, players build a nest, gestate/lay eggs and incubate them.","Sau khi ghép đôi, người chơi dựng nest, gestate/đẻ trứng và incubate.")},
        {h:t("Nested-in life","Nested-in life","Vòng đời từ nest"),p:t("การเกิดจาก Nest ของผู้เล่นเป็นหนึ่งใน Prime conditions ที่ current guide ระบุ","Being born from a player nest is one of the Prime conditions in the current guide.","Sinh ra từ nest người chơi là một điều kiện Prime trong guide hiện tại.")},
        {h:t("Diet inheritance","Diet inheritance","Kế thừa diet"),p:t("current diet guide ระบุว่า hatchling สามารถรับ diet macros จากผู้ปกครองที่ให้อาหาร","The current diet guide notes that hatchlings can inherit diet macros from feeding parents.","Guide diet hiện tại ghi hatchling có thể nhận diet macro từ bố mẹ cho ăn.")}
      ],
      source:"https://www.theisle.info/guide/nesting"
    },
    zones:{
      title:t("MIGRATION / PATROL / SANCTUARY","MIGRATION / PATROL / SANCTUARY","MIGRATION / PATROL / SANCTUARY"),
      lead:t("สามระบบพื้นที่หลักที่เปลี่ยนเส้นทางการเล่นบน Gateway","Three major zone systems that shape movement on Gateway","Ba hệ thống zone chính định hướng di chuyển trên Gateway"),
      cards:[
        {h:t("Migration","Migration","Migration"),p:t("พื้นที่ movement ขนาดใหญ่ที่เน้น food/nutrient และการรวมฝูง; ต้องเข้า zone ของ species ที่ถูกต้อง","Large movement zones centered on food/nutrients and herd movement; use the correct species zone.","Zone di chuyển lớn tập trung food/nutrient và đàn; cần đúng zone của loài.")},
        {h:t("Patrol","Patrol","Patrol"),p:t("โซนขนาดเล็กที่ผูกกับผู้เล่น/หัวหน้ากลุ่ม; สมาชิกกลุ่มใช้ zone ของ leader","Smaller player/group-leader-bound zones; group members use the leader's patrol zone.","Zone nhỏ gắn với người chơi/trưởng nhóm; thành viên dùng zone của leader.")},
        {h:t("Sanctuary","Sanctuary","Sanctuary"),p:t("พื้นที่สำหรับช่วงเด็ก มี mushroom 3-combo และระบบผึ้งผลักสัตว์ที่โตเกินช่วงออก","Juvenile-focused zones with three-combo mushrooms and bee pressure that pushes older animals out.","Zone cho juvenile với nấm 3-combo và ong đẩy con vật quá lớn ra ngoài.")},
        {h:t("Prime links","Prime links","Liên kết Prime"),p:t("Sanctuary, Mass Migration, Migration และ Patrol เชื่อมกับ Prime conditions หลายข้อ","Sanctuary, Mass Migration, Migration and Patrol connect directly to several Prime conditions.","Sanctuary, Mass Migration, Migration và Patrol liên quan trực tiếp nhiều điều kiện Prime.")}
      ],
      source:"https://www.theisle.info/guide/zones"
    },
    combat:{
      title:t("COMBAT / GAME SYSTEMS","COMBAT / GAME SYSTEMS","COMBAT / GAME SYSTEMS"),
      lead:t("ภาพรวม combat และ damage systems โดยไม่ปนกับกฎ PVP ของเซิร์ฟเวอร์","Overview of combat and damage systems, separate from Kingdoms Isle PvP rules","Tổng quan combat và damage system, tách biệt khỏi luật PvP Kingdoms Isle"),
      cards:[
        {h:t("Raw Damage","Raw Damage","Raw Damage"),p:t("ความเสียหายตรงจาก attack; actual value ของแต่ละ species ขึ้นกับ AttackPower curve","Direct attack damage; per-species output scales with the AttackPower curve.","Sát thương trực tiếp; giá trị theo loài phụ thuộc AttackPower curve.")},
        {h:t("Bleed / Fracture","Bleed / Fracture","Bleed / Fracture"),p:t("เป็น damage/status types แยกจาก raw damage และมี mutation/diet บางชนิดโต้ตอบกับระบบนี้","Separate damage/status types from raw damage, with some mutations and diet effects interacting with them.","Là loại damage/status tách khỏi raw damage; một số mutation và diet tương tác với chúng.")},
        {h:t("Species attacks","Species attacks","Đòn đánh theo loài"),p:t("หน้า Dinosaur Details แสดงชื่อ attack ที่มีอยู่ใน current raw game-data ของ species นั้น","Dinosaur Details lists attacks present in that species' current raw game-data.","Dinosaur Details liệt kê attack có trong raw game-data hiện tại của loài.")},
        {h:t("Server Rules ≠ Game Mechanics","Server Rules ≠ Game Mechanics","Server Rules ≠ Game Mechanics"),p:t("สิ่งที่เกมทำได้ไม่ได้แปลว่าได้รับอนุญาตตาม Server Rules; ให้กลับไปหน้า Rules เมื่อต้องตัดสินกฎ","A mechanic being possible does not mean it is allowed by Server Rules; use the Rules page for server policy.","Cơ chế game làm được không có nghĩa được phép theo Server Rules; xem trang Rules để biết luật máy chủ.")}
      ],
      source:"https://www.theisle.info/guide/combat"
    }
  };

  return {
    ui,hub,speciesAliases,primeConditions,mutations,guides,
    sources:{
      species:"https://evrima-viewer.com/",
      prime:"https://www.theisle.info/guide/prime",
      mutations:"https://www.theisle.info/guide/mutations",
      thaiPrime:"https://www.theisleguidethai.online/#prime",
      thaiMutations:"https://www.theisleguidethai.online/#mutations"
    }
  };
})();