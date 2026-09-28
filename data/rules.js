window.KI_RULES = {
  ui: {
    th: {
      navTitle:"หมวดกฎ", navHint:"เลือกหัวข้อเพื่อไปยังกฎโดยตรง", currentRules:"CURRENT RULESET",
      heroLead:"อ่านกฎทั้งหมดก่อนเข้าเล่น เพื่อให้ทุกคนอยู่ร่วมกันได้อย่างยุติธรรมและสนุก",
      noticeTitle:"กฎสามารถเปลี่ยนแปลงได้",
      noticeBody:"หากมีการเปลี่ยนแปลง ทีมงานจะแจ้งผ่านห้องประกาศของเซิร์ฟเวอร์",
      sectionsLabel:"หมวดกฎ", rulesLabel:"หัวข้อ", languagesLabel:"ภาษา",
      quickCombat:"กฎการต่อสู้", quickThird:"Third Party", quickRedeem:"กฎ Redeem", quickPack:"Pack Limits",
      noResultsTitle:"ไม่พบกฎที่ค้นหา", noResultsBody:"ลองใช้คำค้นที่สั้นลง หรือเลือกหมวดจากเมนูด้านซ้าย",
      footerText:"Respect the rules · Protect the wilderness · Play together", search:"ค้นหากฎ...", copy:"คัดลอกลิง�
…[middle output omitted]…
 bằng chứng từ cả hai bên. Nếu bằng chứng không đủ xác nhận vi phạm, vụ việc có thể bị bác."}}
      ]
    },

    {
      id:"pack-limits", icon:"🦕", code:"12",
      title:{th:"Group Pack Limits",en:"Group Pack Limits",vi:"Giới hạn Group Pack"},
      subtitle:{th:"จำนวนสูงสุดของแต่ละสายพันธุ์",en:"Maximum group size by species",vi:"Số lượng tối đa theo từng loài"},
      feature:"packLimits", items:[]
    },
    {
      id:"herd-tokens", icon:"🌿", code:"13",
      title:{th:"Herbivore Herd Tokens",en:"Herbivore Herd Tokens",vi:"Herbivore Herd Tokens"},
      subtitle:{th:"กฎรวมกลุ่มกินพืชสูงสุด 45 Token",en:"Herbivore mixed-group limit: 45 Tokens",vi:"Giới hạn nhóm herbivore hỗn hợp: 45 Token"},
      feature:"herdTokens", items:[]
    }
  ],

  packLimits: {
    Herbivore:[["Hypsilophodon",12],["Dryosaurus",12],["Pachycephalosaurus",8],["Tenontosaurus",6],["Kentrosaurus",5],["Diabloceratops",5],["Maiasaura",4],["Stegosaurus",3],["Triceratops",2]],
    Omnivore:[["Beipisaurus",12],["Gallimimus",8]],
    Carnivore:[["Pteranodon",10],["Troodon",10],["Omniraptor",8],["Herrerasaurus",8],["Austroraptor",8],["Dilophosaurus",5],["Carnotaurus",4],["Ceratosaurus",4],["Allosaurus",3],["Deinosuchus",2],["Tyrannosaurus Rex",2]]
  },

  herdTokens: {
    "Micro — 3":[["Dryosaurus",3],["Beipiaosaurus",3],["Hypsilophodon",3]],
    "Low — 5":[["Gallimimus",5],["Pachycephalosaurus",5]],
    "Medium — 10":[["Maiasaura",10],["Tenontosaurus",10],["Diabloceratops",10],["Kentrosaurus",10]],
    "High — 20":[["Stegosaurus",20],["Triceratops",20]]
  }
};

window.KI_RULES.sections.find(s => s.id === "behavior").items.push({
  type:"warning",
  title:{th:"⚖️ Final Rule — หลักการตัดสิน",en:"⚖️ Final Rule — decision principle",vi:"⚖️ Final Rule — nguyên tắc xử lý"},
  body:{
    th:"กฎมีไว้เพื่อให้ทุกคนเล่นอย่างเท่าเทียม ไม่ใช่เพื่อหาช่องเอาชนะกฎ หากมีพฤติกรรมจงใจหลีกเลี่ยงกฎ ใช้ช่องโหว่ หรือสร้างความได้เปรียบที่ไม่เป็นธรรม ทีมงานสามารถพิจารณาจากหลักฐาน บริบท เจตนา และเหตุการณ์ทั้งหมด",
    en:"Rules exist so everyone can play fairly, not as loopholes to be worked around. Intentional rule evasion, exploitation, or unfair advantage may be reviewed using the evidence, context, intent, and the complete sequence of events.",
    vi:"Quy tắc tồn tại để mọi người chơi công bằng, không phải để tìm kẽ hở lách luật. Hành vi cố ý né luật, lợi dụng lỗ hổng hoặc tạo lợi thế không công bằng có thể được xem xét dựa trên bằng chứng, bối cảnh, ý định và toàn bộ diễn biến."
  }
});

window.KI_RULES.sections.find(s => s.id === "evidence").items.push({
  type:"danger",
  title:{th:"🚫 ห้ามตัดต่อหรือบิดเบือนหลักฐาน",en:"🚫 Do not manipulate evidence",vi:"🚫 Cấm chỉnh sửa hoặc bóp méo bằng chứng"},
  body:{
    th:"ห้ามตัดต่อ ดัดแปลง หรือเผยแพร่หลักฐานในลักษณะที่ทำให้เหตุการณ์ถูกเข้าใจผิด และห้ามให้ข้อมูลเท็จหรือปกปิดข้อเท็จจริงต่อทีมงานเพื่อให้ตนเองหรือผู้อื่นพ้นผิด",
    en:"Do not edit, alter, or present evidence in a way that misrepresents what happened. Do not give false information or conceal relevant facts from staff to clear yourself or another player.",
    vi:"Không được chỉnh sửa, thay đổi hoặc trình bày bằng chứng theo cách làm sai lệch sự việc. Không được cung cấp thông tin sai hoặc che giấu sự thật liên quan với nhân viên để giúp bản thân hoặc người khác thoát lỗi."
  }
});

window.KI_RULES.sections.find(s => s.id === "survival").items.push({
  type:"warning",
  title:{th:"การบังคับใช้ 🛡️ Sanctuary Camping",en:"🛡️ ⚠️ Sanctuary Camping enforcement",vi:"Xử lý 🛡️ Sanctuary Camping"},
  body:{
    th:"การกระทำครั้งแรกอาจได้รับการตักเตือน หากทำซ้ำหรือจงใจทำต่อหลังได้รับคำเตือน สามารถได้รับบทลงโทษที่รุนแรงขึ้น",
    en:"A first incident may receive a warning. Repeated behaviour or intentionally continuing after a warning may result in a more severe penalty.",
    vi:"Lần vi phạm đầu có thể bị cảnh cáo. Nếu tái phạm hoặc cố ý tiếp tục sau khi được cảnh báo, hình phạt có thể nghiêm khắc hơn."
  }
});


