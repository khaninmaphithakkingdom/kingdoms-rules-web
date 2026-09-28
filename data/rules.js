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
      footerText:"Respect the rules · Protect the wilderness · Play together", search:"ค้นหากฎ...", copy:"คัดลอกลิงก์แล้ว",
      packNote:"Growth ต่ำกว่า 45% ไม่นับรวมในจำนวนจำกัดของกลุ่ม เมื่อ Growth ตั้งแต่ 45% ขึ้นไป ต้องแยกออกจากกลุ่มโดยเร็วที่สุด",
      herdIntro:"ไดโนเสาร์กินพืชสามารถรวมกลุ่มกันได้ โดยมี Herd Tokens รวมกันสูงสุดไม่เกิน 45 Token",
      herdFree:"Juvenile ที่มี Growth สูงสุดไม่เกิน 45% = 0 Token",
      herdSpecial:"Stegosaurus กับ Triceratops ห้ามอยู่ด้วยกัน และหากใช้กฎ 45 Token ต้องใช้สีเดียวกันทั้งทีม หากไม่ใช้สีเดียวกันจะนับเป็น 3rd Party ทันที",
      total:"รวมสูงสุด"
    },
    en: {
      navTitle:"Rule Categories", navHint:"Choose a section to jump directly to it", currentRules:"CURRENT RULESET",
      heroLead:"Read all rules before playing so everyone can share the server fairly and enjoyably.",
      noticeTitle:"Rules may change", noticeBody:"When rules change, staff will announce the update in the server announcement channels.",
      sectionsLabel:"sections", rulesLabel:"topics", languagesLabel:"languages",
      quickCombat:"Combat Rules", quickThird:"Third Party", quickRedeem:"Redeem Rules", quickPack:"Pack Limits",
      noResultsTitle:"No matching rules found", noResultsBody:"Try a shorter search term or choose a category from the navigation.",
      footerText:"Respect the rules · Protect the wilderness · Play together", search:"Search rules...", copy:"Link copied",
      packNote:"Players below 45% Growth do not count toward the group limit. At 45% Growth or higher, they must leave the group as soon as possible to comply with Pack Limits.",
      herdIntro:"Herbivores may mix in a group as long as the total does not exceed 45 Herd Tokens.",
      herdFree:"Juveniles at up to 45% Growth = 0 Tokens",
      herdSpecial:"Stegosaurus and Triceratops may not stay together. When using the 45 Token rule, the entire team must use the same colour; otherwise it is immediately counted as Third Party.",
      total:"Maximum total"
    },
    vi: {
      navTitle:"Danh mục quy tắc", navHint:"Chọn mục để chuyển thẳng đến quy tắc", currentRules:"CURRENT RULESET",
      heroLead:"Hãy đọc toàn bộ quy tắc trước khi chơi để mọi người cùng chơi công bằng và vui vẻ.",
      noticeTitle:"Quy tắc có thể thay đổi", noticeBody:"Khi có thay đổi, nhân viên sẽ thông báo trong các kênh announcement của máy chủ.",
      sectionsLabel:"danh mục", rulesLabel:"chủ đề", languagesLabel:"ngôn ngữ",
      quickCombat:"Quy tắc chiến đấu", quickThird:"Third Party", quickRedeem:"Quy tắc Redeem", quickPack:"Pack Limits",
      noResultsTitle:"Không tìm thấy quy tắc phù hợp", noResultsBody:"Hãy thử từ khóa ngắn hơn hoặc chọn danh mục từ menu.",
      footerText:"Respect the rules · Protect the wilderness · Play together", search:"Tìm quy tắc...", copy:"Đã sao chép liên kết",
      packNote:"Người chơi dưới 45% Growth không tính vào giới hạn nhóm. Khi đạt từ 45% Growth trở lên, phải rời nhóm sớm nhất có thể để tuân thủ Pack Limit.",
      herdIntro:"Herbivore có thể lập nhóm hỗn hợp miễn tổng không vượt quá 45 Herd Tokens.",
      herdFree:"Juvenile tối đa 45% Growth = 0 Token",
      herdSpecial:"Stegosaurus và Triceratops không được ở cùng nhau. Khi dùng quy tắc 45 Token, cả team phải dùng cùng màu; nếu không sẽ bị tính là Third Party ngay.",
      total:"Tổng tối đa"
    }
  },

  sections: [
    {
      id:"basic", icon:"⚖", code:"01",
      title:{th:"กฎพื้นฐาน",en:"Basic Rules",vi:"Quy tắc cơ bản"},
      subtitle:{th:"มาตรฐานพื้นฐานของชุมชน",en:"Core community standards",vi:"Tiêu chuẩn cộng đồng cốt lõi"},
      items:[
        {type:"danger",title:{th:"🤝 1. ห้ามคุกคามหรือไม่ให้เกียรติผู้อื่น",en:"🤝 1. No harassment or disrespect",vi:"🤝 1. Không quấy rối hoặc thiếu tôn trọng"},body:{th:"ห้ามคุกคาม ไม่ให้เกียรติ หรือใช้คำหยาบ รวมถึงการแกล้งผู้อื่นแบบจงใจ",en:"Harassment, disrespect, profanity, and intentional bullying of others are prohibited.",vi:"Cấm quấy rối, thiếu tôn trọng, chửi bới hoặc cố ý bắt nạt người khác."}},
        {type:"danger",title:{th:"🛡️ 2. ห้ามโกงหรือใช้ช่องโหว่",en:"🛡️ 2. No cheats or exploits",vi:"🛡️ 2. Cấm gian lận hoặc khai thác lỗi"},body:{th:"ห้ามใช้โปรแกรมโกง และช่องโหว่ของเกมเพื่อผลประโยชน์ทุกชนิด",en:"Do not use cheat programs or exploit game vulnerabilities for any kind of gain.",vi:"Không được dùng phần mềm gian lận hoặc khai thác lỗ hổng trò chơi để thu lợi dưới bất kỳ hình thức nào."}},
        {type:"danger",title:{th:"📢 3. ห้ามโฆษณาเซิร์ฟเวอร์อื่น",en:"📢 3. No advertising other servers",vi:"📢 3. Cấm quảng cáo máy chủ khác"},body:{th:"ห้ามโฆษณาเซิร์ฟเวอร์อื่นภายในเซิร์ฟเวอร์ของเรา",en:"Advertising other servers within our server is prohibited.",vi:"Cấm quảng cáo máy chủ khác trong máy chủ của chúng tôi."}},
        {type:"danger",title:{th:"📄 4. ห้ามให้ข้อมูลเท็จหรือบิดเบือนข้อเท็จจริง",en:"📄 4. No false or distorted information",vi:"📄 4. Cấm cung cấp thông tin sai lệch"},body:{th:"ห้ามให้ข้อมูลเท็จต่อทีมงาน และบิดเบือนข้อมูลที่ส่งผลเสียต่อทีมงานและเซิร์ฟเวอร์",en:"Do not provide false information to staff or distort facts in a way that harms staff or the server.",vi:"Không được cung cấp thông tin sai cho nhân viên hoặc bóp méo sự thật gây ảnh hưởng xấu đến nhân viên hay máy chủ."}},
        {type:"warning",title:{th:"📵 5. งดนำดราม่าภายในเซิร์ฟเวอร์ไปลงโซเชียล",en:"📵 5. Keep server drama off social media",vi:"📵 5. Không đưa drama của máy chủ lên mạng xã hội"},body:{th:"หากมีปัญหาให้ใช้ช่องทาง Report / Support ของเซิร์ฟเวอร์",en:"If there is a problem, use the server's Report / Support channels.",vi:"Nếu có vấn đề, hãy sử dụng kênh Report / Support của máy chủ."}}
      ]
    },

    {
      id:"behavior", icon:"🤝", code:"02",
      title:{th:"พฤติกรรมและการติดต่อทีมงาน",en:"Behaviour & Staff Conduct",vi:"Hành vi & làm việc với nhân viên"},
      subtitle:{th:"การสื่อสารอย่างเคารพและการพิจารณาเคส",en:"Respectful communication and case handling",vi:"Giao tiếp tôn trọng và xử lý vụ việc"},
      items:[
        {type:"danger",title:{th:"🚫 Zero Tolerance",en:"🚫 Zero Tolerance",vi:"Không khoan nhượng"},body:{
          th:"เซิร์ฟเวอร์ไม่ต้อนรับการเหยียดเชื้อชาติ/ชาติพันธุ์ การเหยียดเพศหรือรสนิยมทางเพศ การดูถูกหรือเหยียดเพศ มุกหรือคำพูดที่เหยียดบุคคล/กลุ่มคน พฤติกรรมหรือการสื่อสารเชิงทางเพศที่ไม่เหมาะสม และการคุกคามหรือล่วงละเมิดที่ทำให้ผู้อื่นรู้สึกไม่ปลอดภัย<br><span class='muted'>คำว่า “แค่ล้อเล่น” หรือ “เป็นเพียงมุก” ไม่ใช่ข้อยกเว้น</span>",
          en:"The server does not tolerate racism or ethnic discrimination, discrimination based on sex or sexual orientation, sexist insults, discriminatory jokes or remarks, inappropriate sexual behaviour or communication, or harassment that makes others feel unsafe.<br><span class='muted'>“Just joking” is not an exception.</span>",
          vi:"Máy chủ không chấp nhận phân biệt chủng tộc/dân tộc, phân biệt giới tính hoặc xu hướng tính dục, lời lẽ hạ nhục mang tính giới, trò đùa/kỳ thị cá nhân hoặc nhóm người, hành vi hay giao tiếp tình dục không phù hợp, hoặc quấy rối khiến người khác cảm thấy không an toàn.<br><span class='muted'>“Chỉ đùa thôi” không phải là ngoại lệ.</span>"
        }},
        {type:"info",title:{th:"💬 Trash Talk",en:"💬 Trash Talk",vi:"💬 Trash Talk"},body:{th:"การพูดแซว พูดแขวะ หรือ Trash Talk สามารถเกิดขึ้นได้ตามวัฒนธรรมการเล่นเกม แต่ต้องอยู่ในขอบเขตและไม่ทำมากเกินไป",en:"Teasing, banter, and trash talk may occur as part of gaming culture, but it must stay within reasonable limits.",vi:"Trêu chọc, cà khịa và trash talk có thể xuất hiện trong văn hóa chơi game, nhưng phải ở mức hợp lý và không quá đà."}},
        {type:"warning",title:{th:"🛡️ ให้เกียรติทีมงานระหว่างดำเนินเคส",en:"🛡️ Respect staff during case handling",vi:"🛡️ Tôn trọng nhân viên khi xử lý vụ việc"},body:{
          th:"ผู้เล่นต้องสื่อสารกับทีมงานด้วยความสุภาพและให้ความร่วมมือ หลีกเลี่ยงการใช้อารมณ์ ดูหมิ่น ประชด ยั่วยุ หรือกดดัน หากยังไม่ให้ความร่วมมือหลังได้รับคำเตือน ทีมงานอาจพักหรือยุติการดำเนินเคสได้ ผู้เล่นยังมีสิทธิ์ชี้แจง โต้แย้ง หรือขอทบทวนคำตัดสินด้วยเหตุผลและหลักฐานอย่างสุภาพ",
          en:"Players must communicate politely and cooperate with staff. Avoid emotional abuse, insults, sarcasm, provocation, or pressure. If non-cooperation continues after a warning, staff may pause or close the case. Players may still explain, challenge, or request a review using reasons and evidence respectfully.",
          vi:"Người chơi phải giao tiếp lịch sự và hợp tác với nhân viên. Tránh xúc phạm, mỉa mai, khiêu khích hoặc gây áp lực. Nếu vẫn không hợp tác sau khi được cảnh báo, nhân viên có thể tạm dừng hoặc kết thúc vụ việc. Người chơi vẫn có quyền giải trình, phản biện hoặc yêu cầu xem xét lại bằng lý do và bằng chứng một cách lịch sự."
        }},
        {type:"info",title:{th:"⚖️ มาตรฐานการพิจารณาเคส",en:"⚖️ Case-by-case review standard",vi:"⚖️ Tiêu chuẩn xem xét từng vụ việc"},body:{
          th:"ทีมงานพิจารณาแบบ Case by Case จากข้อเท็จจริง หลักฐาน บริบท ลำดับเหตุการณ์ และเจตนา เหตุการณ์ที่ดูคล้ายกันอาจมีรายละเอียดต่างกันและได้ผลพิจารณาต่างกัน <div class='quote'><strong>มาตรฐานเดียวกัน ≠ ผลลัพธ์ต้องเหมือนกันทุกเคส</strong><br>มาตรฐานเดียวกัน = ใช้หลักเกณฑ์เดียวกันพิจารณาข้อเท็จจริงของแต่ละเคส</div>",
          en:"Staff review cases individually using facts, evidence, context, sequence of events, and intent. Similar-looking incidents may contain different details and may lead to different decisions.<div class='quote'><strong>Same standard ≠ identical outcome in every case.</strong><br>Same standard = applying the same criteria to each case's facts.</div>",
          vi:"Nhân viên xem xét từng vụ việc dựa trên sự thật, bằng chứng, bối cảnh, trình tự sự kiện và ý định. Các tình huống trông giống nhau có thể có chi tiết khác nhau và dẫn đến kết quả khác nhau.<div class='quote'><strong>Cùng tiêu chuẩn ≠ mọi vụ việc phải có cùng kết quả.</strong><br>Cùng tiêu chuẩn = áp dụng cùng tiêu chí cho sự thật của từng vụ việc.</div>"
        }}
      ]
    },

    {
      id:"voice", icon:"🎙", code:"03",
      title:{th:"กฎการใช้ไมค์",en:"Voice Chat Rules",vi:"Quy tắc Voice Chat"},
      subtitle:{th:"การใช้เสียงโดยไม่รบกวนผู้อื่น",en:"Use voice without disrupting others",vi:"Sử dụng giọng nói không làm phiền người khác"},
      items:[
        {type:"danger",title:{th:"🔇 ห้ามก่อกวนด้วยเสียง",en:"🔇 No disruptive audio",vi:"🔇 Cấm gây rối bằng âm thanh"},body:{th:"ห้ามเป่าไมค์ ตะโกนใส่ไมค์ ทำเสียงรบกวน หรือจงใจทำให้ผู้อื่นรำคาญ การยั่วยุคู่ต่อสู้ทำได้เพื่อสร้างสีสัน แต่ต้องไม่เข้าข่ายคุกคาม เหยียดหยาม หรือรุนแรงเกินสมควร",en:"Do not blow into the mic, scream, create disruptive noise, or intentionally annoy others. Competitive taunting is allowed for flavour, but must not become harassment, discrimination, or excessive abuse.",vi:"Không thổi mic, la hét, tạo tiếng ồn gây rối hoặc cố ý làm phiền người khác. Có thể khiêu khích đối thủ trong phạm vi trò chơi, nhưng không được trở thành quấy rối, kỳ thị hoặc lăng mạ quá mức."}},
        {type:"warning",title:{th:"🎵 Soundboard",en:"🎵 Soundboard",vi:"🎵 Soundboard"},body:{th:"ห้าม Spam Soundboard หรือเสียงซ้ำ ๆ เพื่อก่อกวนโดยเจตนา สามารถใช้ Soundboard เพื่อสร้างสีสันได้หากไม่รบกวนผู้อื่นจนเกินสมควร",en:"Do not spam soundboards or repeated audio to intentionally disrupt others. Soundboards may be used for fun when they do not excessively disturb others.",vi:"Không spam soundboard hoặc âm thanh lặp lại để cố ý gây rối. Có thể dùng soundboard để tạo không khí nếu không làm phiền người khác quá mức."}}
      ]
    },

    {
      id:"combat", icon:"⚔", code:"04",
      title:{th:"กฎการต่อสู้",en:"Combat Rules",vi:"Quy tắc chiến đấu"},
      subtitle:{th:"การเริ่มไฟต์ การจบไฟต์ Crash และ Restart",en:"Fight start, fight end, crashes and restarts",vi:"Bắt đầu/kết thúc giao tranh, crash và restart"},
      items:[
        {type:"danger",title:{th:"🚪 Combat Log",en:"🚪 Combat Log",vi:"🚪 Combat Log"},body:{
          th:"ห้าม Logout / ปิดเกม / ออกจากเซิร์ฟเวอร์ / จงใจหลุดจากเกมระหว่างการต่อสู้เพื่อหลีกเลี่ยงการบาดเจ็บหรือการตาย รวมถึงการ Logout ก่อนเริ่มไฟต์เพื่อหลีกเลี่ยงการต่อสู้ หรือกลับเข้าเกมเพื่อเปลี่ยนสถานการณ์ให้ได้เปรียบ หากมีหลักฐานเพียงพอ",
          en:"Do not log out, close the game, leave the server, or intentionally disconnect during combat to avoid injury or death. Logging out before a fight to avoid combat, or rejoining to change the situation in your favour, may also count when supported by sufficient evidence.",
          vi:"Cấm đăng xuất, tắt game, rời máy chủ hoặc cố ý mất kết nối trong lúc giao tranh để tránh bị thương hoặc chết. Đăng xuất trước khi giao tranh để né đánh, hoặc vào lại để thay đổi tình thế có lợi cho mình, cũng có thể bị xem là vi phạm khi có đủ bằng chứng."
        }},
        {type:"warning",title:{th:"💥 Crash / Game Error / Connection Error",en:"💥 Crash / Game Error / Connection Error",vi:"💥 Crash / Game Error / Connection Error"},body:{
          th:"หากหลุดระหว่างไฟต์จาก 💥 Crash / Game Error / Connection Error สามารถส่งหลักฐานเพื่อขอพิจารณาได้ <strong>หลังหลุดแล้วห้ามกลับเข้าสู่การต่อสู้เดิมโดยเด็ดขาด</strong> แม้จะเข้าเกมกลับมาได้ หลักฐานควรแสดงว่าเป็นการหลุดจริง เช่น คลิปก่อนหลุด ภาพหน้าจอ การบันทึกย้อนหลัง หรือหลักฐาน Crash/Error ภาพจอดำเพียงอย่างเดียวอาจไม่เพียงพอ",
          en:"If you disconnect during combat because of a crash, game error, or connection error, you may submit evidence for review. <strong>After disconnecting, you must not return to the same fight</strong>, even if you can rejoin the game. Evidence should show a genuine disconnect, such as pre-crash footage, screenshots, replay footage, or crash/error proof. A black screen alone may be insufficient.",
          vi:"Nếu bị mất kết nối trong giao tranhdo crash, lỗi game hoặc lỗi mạng, bạn có thể gửi bằng chứng để được xem xét. <strong>Sau khi mất kết nối, tuyệt đối không được quay lại giao tranh cũ</strong>, dù có thể vào lại game. Bằng chứng nên cho thấy việc mất kết nối là thật, như clip trước khi crash, ảnh chụp, replay hoặc thông báo lỗi. Chỉ ảnh màn hình đen có thể không đủ."
        }},
        {type:"info",title:{th:"🏁 เมื่อไหร่ถือว่าไฟต์จบ",en:"🏁 When is combat over?",vi:"🏁 Khi nào giao tranh kết thúc?"},body:{
          th:"การต่อสู้สิ้นสุดเมื่อฝ่ายหนึ่งตายทั้งหมด, ทั้งสองฝ่ายแยกย้ายและไม่มีการไล่ล่าหรือโจมตีกันต่อ, หรือฝ่ายที่ถูกไล่หนีออกจากระยะสายตาและผู้ล่าไม่สามารถติดตามหรือค้นหาพบได้ หากกลับมาเจอกันภายหลังให้ถือเป็นไฟต์ใหม่ ห้ามอ้างว่าเป็นไฟต์เดิมเพื่อไล่แก้แค้นต่อเนื่อง",
          en:"Combat ends when one side is completely dead, both sides disengage with no continued chase or attacks, or the chased side escapes line of sight and can no longer be tracked or found. Meeting again later is a new fight; do not claim it is the same fight to continue revenge.",
          vi:"Giao tranh kết thúc khi một bên chết hoàn toàn, hai bên tách ra và không còn truy đuổi/tấn công, hoặc bên bị đuổi thoát khỏi tầm nhìn và không thể bị theo dõi hay tìm thấy. Gặp lại sau đó được tính là giao tranh mới; không được viện cớ “vẫn là trận cũ” để tiếp tục trả thù."
        }},
        {type:"success",title:{th:"⚔️ การเริ่มไฟต์ที่ถูกต้อง",en:"⚔️ What counts as starting a fight",vi:"⚔️ Thế nào là bắt đầu giao tranh"},body:{
          th:"การเริ่มไฟต์ไม่จำเป็นต้องมี Damage ก่อนเสมอไป หากผู้เล่นไล่ล่าเป้าหมายอย่างชัดเจนและต่อเนื่องโดยมีเจตนาเข้าสู่การต่อสู้ ให้ถือว่าไฟต์เริ่มแล้ว <div class='quote'>พบกันเฉย ๆ ≠ เริ่มไฟต์<br><strong>ไล่ล่าอย่างชัดเจนเพื่อโจมตี = เริ่มไฟต์</strong><br>ยังไม่มี Damage ≠ ยังไม่มีไฟต์</div>",
          en:"A fight does not require damage to occur first. If a player clearly and continuously chases a target with the intent to engage, the fight has already started.<div class='quote'>Simply meeting ≠ starting a fight<br><strong>Clearly chasing to attack = fight started</strong><br>No damage yet ≠ no fight</div>",
          vi:"Giao tranh không bắt buộc phải có sát thương trước. Nếu người chơi truy đuổi mục tiêu rõ ràng và liên tục với ý định tấn công, giao tranh đã được tính là bắt đầu.<div class='quote'>Chỉ gặp nhau ≠ bắt đầu đánh<br><strong>Truy đuổi rõ ràng để tấn công = giao tranh bắt đầu</strong><br>Chưa có damage ≠ chưa có giao tranh</div>"
        }},
        {type:"danger",title:{th:"🔄 Server Restart — กฎ 10 นาที",en:"🔄 Server Restart — 10 Minute Rule",vi:"🔄 Server Restart — Quy tắc 10 phút"},body:{
          th:"ห้ามเริ่มไฟต์ใหม่หรือสู้ต่อในช่วง <strong>10 นาทีก่อน Server Restart</strong> และ <strong>10 นาทีหลัง Server Restart</strong> เมื่อเข้าสู่ช่วง 10 นาทีก่อนรีสตาร์ท ผู้เล่นที่กำลังสู้ต้องหยุดทันทีและแยกออกจากไฟต์ หลังเซิร์ฟเวอร์กลับมาต้องรอครบ 10 นาทีก่อนเริ่มสู้ได้อีกครั้ง ผู้เล่นต้องหาที่ Safe Logout ด้วยตนเอง หากนอนออกในพื้นที่ไม่ปลอดภัยแล้วกลับมาเสียตัว เซิร์ฟเวอร์จะไม่รับผิดชอบ",
          en:"Do not start a new fight or continue fighting during the <strong>10 minutes before a server restart</strong> or the <strong>10 minutes after a server restart</strong>. Once the pre-restart window begins, active fights must stop immediately and players must disengage. After the server returns, wait the full 10 minutes before fighting again. Players are responsible for finding a safe logout location; the server is not responsible for losses caused by logging out in an unsafe place.",
          vi:"Cấm bắt đầu giao tranh mới hoặc tiếp tục đánh trong <strong>10 phút trước khi server restart</strong> và <strong>10 phút sau khi server restart</strong>. Khi bước vào khoảng 10 phút trước restart, mọi giao tranh đang diễn ra phải dừng ngay và người chơi phải tách ra. Sau khi server hoạt động lại, phải chờ đủ 10 phút mới được giao tranh. Người chơi tự chịu trách nhiệm tìm nơi Safe Logout; máy chủ không chịu trách nhiệm nếu mất nhân vật vì đăng xuất ở nơi không an toàn."
        }}
      ]
    },

    {
      id:"third-party", icon:"👁", code:"05",
      title:{th:"Third Party และการเฝ้าดูไฟต์",en:"Third Party & Fight Observation",vi:"Third Party & quan sát giao tranh"},
      subtitle:{th:"การแทรกแซงไฟต์และกฎ 20 นาที",en:"Interference and the 20-minute rule",vi:"Can thiệp giao tranh và quy tắc 20 phút"},
      items:[
        {type:"danger",title:{th:"⚠️ Third-Party Fight — ต้องหยุดทันที",en:"⚠️ Third-Party Fight — stop immediately",vi:"⚠️ Third-Party Fight — phải dừng ngay"},body:{
          th:"หากเกิด Third-Party Fight ผู้เล่นทุกฝ่ายต้องหยุดการต่อสู้ทันทีและแยกออกจากบริเวณ ห้ามเข้าร่วมวงต่อสู้ ห้ามโจมตีแบบมั่วไฟต์ และ <strong>ห้ามโจมตีสวนกลับ</strong> แม้ถูกกัดโดยไม่ตั้งใจ ผู้ที่ยังคงโจมตี เข้าร่วมไฟต์ หรือสวนกลับจะถือว่าผิดกฎทันที <span class='muted'>ยกเว้นสายพันธุ์ที่กฎอนุญาตให้ Third Party ได้</span>",
          en:"If a Third-Party Fight occurs, all sides must stop fighting immediately and separate from the area. Do not join the fight, attack indiscriminately, or <strong>counterattack</strong> even if another player accidentally hits you. Anyone who keeps attacking, joins the fight, or counters is immediately in violation. <span class='muted'>Exception: species explicitly allowed to Third Party.</span>",
          vi:"Khi xảy ra Third-Party Fight, tất cả các bên phải dừng đánh ngay và rời khỏi khu vực. Không được tham gia, đánh bừa hoặc <strong>đánh trả</strong> dù bị người khác vô tình cắn. Ai tiếp tục tấn công, tham gia hoặc đánh trả sẽ bị xem là vi phạm ngay. <span class='muted'>Ngoại lệ: loài được quy tắc cho phép Third Party.</span>"
        }},
        {type:"success",title:{th:"🐊 ข้อยกเว้น Deinosuchus & Herrerasaurus",en:"🐊 Deinosuchus & Herrerasaurus exception",vi:"🐊 Ngoại lệ Deinosuchus & Herrerasaurus"},body:{
          th:"Deinosuchus และ Herrerasaurus ได้รับอนุญาตให้เข้าโจมตีแบบ Third Party ได้ หากผู้เล่นถูก Deinosuchus หรือ Herrerasaurus โจมตีโดยตรง ผู้เล่นคนนั้นสามารถโจมตีสวนกลับเพื่อป้องกันตัวเองได้ สิทธิ์นี้ใช้เฉพาะผู้ที่ถูกโจมตีโดยตรงเท่านั้น",
          en:"Deinosuchus and Herrerasaurus are allowed to Third Party. A player directly attacked by either species may counterattack in self-defence. This right applies only to the player who was directly attacked.",
          vi:"Deinosuchus và Herrerasaurus được phép Third Party. Người chơi bị một trong hai loài tấn công trực tiếp có thể đánh trả để tự vệ. Quyền này chỉ áp dụng cho người bị tấn công trực tiếp."
        }},
        {type:"warning",title:{th:"👁️ Witness / Fight Observation",en:"👁️ Witness / Fight Observation",vi:"Quan sát giao tranh"},body:{
          th:"หากไม่ได้มีส่วนร่วมในไฟต์ตั้งแต่เริ่ม: ห้ามเข้าเปิดไฟต์ทันที ห้ามยืนเฝ้ารอจังหวะ และห้ามรอให้ฝ่ายหนึ่งเสียเปรียบ/บาดเจ็บ/ตายแล้วเข้าโจมตี<br><br><strong>กรณีไม่ได้ยืนดูหรือเฝ้าสังเกต:</strong> ไม่ต้องรอ 20 นาที สามารถเข้าไฟต์ได้เลย<br><strong>กรณียืนดู/เฝ้ามองและรับรู้ว่าใครได้เปรียบเสียเปรียบ:</strong> ต้องรออย่างน้อย 20 นาทีหลังไฟต์จบก่อนจึงเปิดไฟต์กับผู้เล่นจากไฟต์นั้นได้<br><div class='quote'>⚠ ต้องมีหลักฐาน F2 ทั้งสองกรณี หากไม่มี F2 หรือ Overlay ที่บันทึกเสียงการเล่น จะปัดเป็น 3rd Party ทันที ไม่มีข้อยกเว้น</div>",
          en:"If you were not part of the fight from the beginning: do not immediately attack either side, do not wait nearby for the fight to end, and do not wait for one side to become disadvantaged, injured, or dead before attacking.<br><br><strong>If you did not watch or observe the fight:</strong> there is no 20-minute wait; you may engage immediately.<br><strong>If you watched/observed and became aware of which side had the advantage:</strong> wait at least 20 minutes after the fight ends before engaging players from that fight.<br><div class='quote'>⚠ F2 evidence is required for both cases. Without F2 or an Overlay recording game audio, the case will be treated as Third Party immediately, with no exceptions.</div>",
          vi:"Nếu bạn không tham gia giao tranh từ đầu: không được lập tức tấn công một bên, không được đứng chờ gần đó để đợi trận kết thúc, và không được chờ một bên yếu thế/bị thương/chết rồi mới tấn công.<br><br><strong>Nếu bạn không đứng xem hoặc theo dõi:</strong> không cần chờ 20 phút; có thể giao tranh ngay.<br><strong>Nếu bạn đã đứng xem/theo dõi và biết bên nào đang lợi thế:</strong> phải chờ ít nhất 20 phút sau khi giao tranh kết thúc mới được tấn công người chơi từ trận đó.<br><div class='quote'>⚠ Cần có bằng chứng F2 cho cả hai trường hợp. Nếu không có F2 hoặc Overlay ghi âm gameplay, vụ việc sẽ bị xem là Third Party ngay, không có ngoại lệ.</div>"
        }}
      ]
    },

    {
      id:"groups", icon:"🦖", code:"06",
      title:{th:"🧬 Mixpacking และ 👥 Overpacking",en:"🧬 Mixpacking & 👥 Overpacking",vi:"🧬 Mixpacking & 👥 Overpacking"},
      subtitle:{th:"การรวมกลุ่มและการช่วยเหลือข้ามกลุ่ม",en:"Grouping and cross-group assistance",vi:"Lập nhóm và hỗ trợ chéo"},
      items:[
        {type:"danger",title:{th:"🧬 Mixpacking",en:"🧬 Mixpacking",vi:"🧬 Mixpacking"},body:{th:"Carnivore ต่างสายพันธุ์ห้ามรวมกลุ่มเพื่อสร้างความได้เปรียบในการต่อสู้ ห้ามใช้สายพันธุ์อื่นช่วยโจมตี เป็นเหยื่อล่อ ดัก/ต้อน/ปิดทาง หรือส่งข้อมูลตำแหน่งเพื่อช่วยล่าหรือสู้ การพูดคุยกันอย่างเดียวไม่ถือเป็น Mixpacking หากไม่มีการช่วยเหลือหรือสร้างความได้เปรียบ",en:"Different carnivore species may not group to gain a combat advantage. Do not use another species to attack, bait, trap, herd, block routes, or relay locations to assist hunting or combat. Talking alone is not Mixpacking when no assistance or advantage is created.",vi:"Các loài ăn thịt khác nhau không được lập nhóm để tạo lợi thế chiến đấu. Không được dùng loài khác để hỗ trợ tấn công, làm mồi nhử, chặn/dồn đường hoặc truyền vị trí để hỗ trợ săn/đánh. Chỉ nói chuyện không bị xem là Mixpacking nếu không có hỗ trợ hay tạo lợi thế."}},
        {type:"danger",title:{th:"👥 Overpacking",en:"👥 Overpacking",vi:"👥 Overpacking"},body:{th:"ห้ามรวมกลุ่มเกินจำนวนที่กำหนดของแต่ละสายพันธุ์/กลุ่ม การอยู่ใกล้กันโดยบังเอิญไม่ถือเป็น Overpacking หากไม่มีการรวมกลุ่มหรือช่วยเหลือกัน เมื่อเกิดไฟต์ สมาชิกในตี้ของผู้ถูกโจมตีมีสิทธิ์เข้าสู้ แต่ผู้ที่ไม่ได้อยู่ในกลุ่มไม่มีสิทธิ์เข้าช่วยและต้องออกจากพื้นที่ ห้ามรอใกล้ ๆ เพื่อเข้าช่วยทีหลัง หรือช่วยด้วยการให้ข้อมูล บังทาง ดักทาง",en:"Do not exceed the allowed group size for a species/group. Accidental proximity is not Overpacking if there is no grouping or assistance. When a fight begins, party members of the attacked player may join, but players outside the group may not help and must leave the area. Do not remain nearby to join later or assist by relaying information, blocking, or trapping routes.",vi:"Không được vượt quá giới hạn nhóm của từng loài/nhóm. Vô tình ở gần nhau không phải Overpacking nếu không lập nhóm hay hỗ trợ. Khi giao tranh xảy ra, thành viên party của người bị tấn công có thể tham gia; người ngoài nhóm không được hỗ trợ và phải rời khu vực. Không được chờ gần đó để vào sau hoặc hỗ trợ bằng thông tin, chắn đường hay chặn lối."}}
      ]
    },

    {
      id:"survival", icon:"🪺", code:"07",
      title:{th:"กฎการเอาตัวรอดและพื้นที่",en:"Survival & Area Rules",vi:"Quy tắc sinh tồn & khu vực"},
      subtitle:{th:"Nest, Sanctuary, Death Avoid และ Revenge",en:"Nest, Sanctuary, Death Avoid and Revenge",vi:"Nest, Sanctuary, Death Avoid và Revenge"},
      items:[
        {type:"info",title:{th:"🪺 Nesting",en:"🪺 Nesting",vi:"🪺 Nesting"},body:{th:"Carnivore ห้ามโจมตี Nest ที่ไม่มีพ่อแม่อยู่ในระยะที่มองเห็นได้ Herbivore ห้ามทำลาย Nest ของ Herbivore ตัวอื่นโดยไม่มีเหตุผลตามกฎ อนุญาตให้เลี้ยงลูก Dino ที่ฟักจากไข่ได้จน Growth 45% แต่ห้ามใช้เป็นข้ออ้างเพื่อ Overpacking หรือ Mixpacking",en:"Carnivores may not attack a Nest when no parent is visible nearby. Herbivores may not destroy another herbivore's Nest without a rule-based reason. Players may raise a hatched baby Dino up to 45% Growth, but this may not be used as an excuse for Overpacking or Mixpacking.",vi:"Carnivore không được tấn công Nest khi không thấy bố/mẹ ở gần. Herbivore không được phá Nest của herbivore khác nếu không có lý do theo luật. Được phép nuôi Dino con nở từ trứng đến 45% Growth, nhưng không được dùng làm lý do cho Overpacking hoặc Mixpacking."}},
        {type:"warning",title:{th:"🛡️ Sanctuary Camping",en:"🛡️ Sanctuary Camping",vi:"🛡️ Sanctuary Camping"},body:{th:"ห้ามเข้า Sanctuary / New Player Area เพื่อดักรอหรือล่าผู้เล่นตัวเล็ก ผู้เล่น Growth 45% ขึ้นไปที่จงใจเดินวน อยู่ หรือเฝ้าพื้นที่เกิน 1 นาที 30 วินาทีโดยมีพฤติกรรมรอดัก จะถือว่า Sanctuary Camping ทีมงานพิจารณาจากพฤติกรรมและสถานการณ์โดยรวม ไม่ใช่จับเวลาอย่างเดียว",en:"Do not enter Sanctuary / New Player Areas to camp or deliberately hunt small players. A player at 45% Growth or higher who intentionally circles, stays, or watches the area for more than 1 minute 30 seconds in a camping manner may be considered Sanctuary Camping. Staff consider overall behaviour and context, not time alone.",vi:"Cấm vào Sanctuary / New Player Area để phục kích hoặc cố ý săn người chơi nhỏ. Người chơi từ 45% Growth trở lên cố ý đi vòng, ở lại hoặc canh khu vực quá 1 phút 30 giây với hành vi phục kích có thể bị xem là Sanctuary Camping. Nhân viên xem xét hành vi và bối cảnh tổng thể, không chỉ thời gian."}},
        {type:"danger",title:{th:"💀 No Death Avoid",en:"💀 No Death Avoid",vi:"💀 No Death Avoid"},body:{th:"ห้ามจงใจหลีกเลี่ยงความตายหลังถูกไล่หรือกำลังจะถูกฆ่า เช่น กระโดดหน้าผาเพื่อหนีการถูกฆ่า เข้าไปในพื้นที่ที่อีกฝ่ายเข้าถึงไม่ได้ ใช้ ENTOMB / จุดบั๊ก / พื้นที่ผิดปกติ ใช้ !die ทำลายสถานการณ์ ทิ้งหรือทำลายซากเพื่อไม่ให้ผู้ล่าได้อาหาร หรือใช้กลไกอื่นเพื่อไม่ให้อีกฝ่ายจบการล่าตามปกติ การหนีตามธรรมชาติ เช่น วิ่งเข้าป่า ปีนพื้นที่ที่สายพันธุ์เข้าถึงได้ หรือใช้ภูมิประเทศปกติ ทำได้",en:"Do not intentionally avoid death after being chased or when about to be killed, including jumping from cliffs to deny a kill, entering inaccessible areas, using ENTOMB / bug spots / abnormal map areas, using !die to break the situation, abandoning or destroying a corpse to deny food, or using other mechanics to prevent a normal hunt from concluding. Natural escape methods such as running into forest, climbing terrain your species can normally access, or using normal geography are allowed.",vi:"Cấm cố ý né cái chết sau khi bị truy đuổi hoặc sắp bị giết, như nhảy vực để từ chối kill, vào khu vực đối phương không thể tiếp cận, dùng ENTOMB / điểm bug / vùng bản đồ bất thường, dùng !die để phá tình huống, bỏ hoặc phá xác để kẻ săn không có thức ăn, hoặc dùng cơ chế khác để ngăn cuộc săn kết thúc bình thường. Các cách chạy trốn tự nhiên như chạy vào rừng, leo địa hình loài của bạn có thể tiếp cận hoặc dùng địa hình bình thường đều được phép."}},
        {type:"danger",title:{th:"⏱️ No Revenge — 30 นาที",en:"⏱️ No Revenge — 30 minutes",vi:"⏱️ No Revenge — 30 phút"},body:{th:"หลังไฟต์จบ ห้ามกลับมาแก้แค้นฝ่ายตรงข้ามภายใน 30 นาที รวมถึงกลับไปโจมตีผู้เล่นเดิม เรียกเพื่อน/สมาชิกฝูง เปลี่ยน Dino แล้วกลับมา หรือส่งข้อมูลตำแหน่งให้ผู้อื่นมาแก้แค้น หากเกิดการต่อสู้ใหม่ที่ไม่เกี่ยวกับเหตุการณ์เดิม สามารถพิจารณาเป็นไฟต์ใหม่ตามสถานการณ์",en:"After a fight ends, do not return for revenge against the opposing side within 30 minutes. This includes returning to attack the same player, calling friends/pack members, switching Dino and coming back, or sharing locations so others can retaliate. A genuinely unrelated new encounter may be considered a new fight depending on the situation.",vi:"Sau khi giao tranh kết thúc, không được quay lại trả thù đối phương trong 30 phút. Bao gồm quay lại tấn công cùng người chơi, gọi bạn/thành viên bầy, đổi Dino rồi quay lại, hoặc gửi vị trí để người khác trả thù. Một cuộc chạm trán mới thực sự không liên quan có thể được xem là giao tranh mới tùy tình huống."}},
        {type:"danger",title:{th:"📺 Stream Sniping",en:"📺 Stream Sniping",vi:"📺 Stream Sniping"},body:{th:"ห้ามใช้การดู Stream เพื่อติดตาม ค้นหาตำแหน่ง หรือโจมตี/ฆ่าผู้เล่น ไม่ว่า Streamer จะรู้ตัวหรือไม่ หากตรวจพบ ผู้กระทำจะได้รับโทษแบน 1 สัปดาห์",en:"Do not use a stream to track, locate, attack, or kill a player, whether or not the streamer is aware. Confirmed violations receive a one-week ban.",vi:"Cấm dùng stream để theo dõi, xác định vị trí, tấn công hoặc giết người chơi, bất kể streamer có biết hay không. Vi phạm được xác nhận sẽ bị cấm 1 tuần."}},
        {type:"warning",title:{th:"📍 No Location Dropping",en:"📍 No Location Dropping",vi:"📍 No Location Dropping"},body:{th:"แชร์ตำแหน่งของตัวเองได้หากระบุชัดว่าเป็นตำแหน่งของตนเอง ห้ามแชร์ตำแหน่งของผู้เล่นอื่นโดยไม่ได้รับอนุญาต หากอยู่ใน Pack / Group สมาชิกทุกคนต้องเห็นด้วยก่อนแชร์ตำแหน่งของกลุ่ม หากต้องการ Report ให้เปิด Ticket หรือเรียก Admin ในเกมแทนการแชร์ตำแหน่ง",en:"You may share your own location if you clearly state that it is yours. Do not share another player's location without permission. In a Pack / Group, all members must agree before the group's location is shared. For reports, open a Ticket or call an in-game Admin instead of publicly sharing locations.",vi:"Bạn có thể chia sẻ vị trí của chính mình nếu nói rõ đó là vị trí của bạn. Không được chia sẻ vị trí người khác khi chưa được phép. Trong Pack / Group, tất cả thành viên phải đồng ý trước khi chia sẻ vị trí nhóm. Khi report, hãy mở Ticket hoặc gọi Admin trong game thay vì công khai vị trí."}},
        {type:"success",title:{th:"🛡️ พื้นที่คุ้มครองระหว่างการช่วยเหลือของทีมงาน",en:"🛡️ Staff Assistance Protection Area",vi:"🛡️ Khu vực bảo vệ khi nhân viên hỗ trợ"},body:{th:"พื้นที่ที่ทีมงานกำลังช่วยเหลือหรือดำเนินเคสเป็นพื้นที่ปลอดภัยชั่วคราว ห้ามผู้อื่นโจมตี สังหาร ก่อกวน ขัดขวาง หรือแทรกแซงขณะทีมงานปฏิบัติหน้าที่ พื้นที่ปลอดภัยมีผลเฉพาะช่วงที่ทีมงานกำลังช่วยเหลือ และผู้ได้รับความช่วยเหลือห้ามใช้สถานการณ์นี้เพื่อหนีไฟต์หรือสร้างความได้เปรียบ",en:"An area where staff are actively assisting a player or handling a case is a temporary safe zone. Others may not attack, kill, disrupt, obstruct, or interfere while staff are working. The protection only applies during active staff assistance, and the assisted player may not use it to escape combat or gain an advantage.",vi:"Khu vực nơi nhân viên đang hỗ trợ người chơi hoặc xử lý vụ việc là vùng an toàn tạm thời. Người khác không được tấn công, giết, gây rối, cản trở hoặc can thiệp khi nhân viên đang làm việc. Trạng thái an toàn chỉ có hiệu lực trong thời gian hỗ trợ và người được hỗ trợ không được lợi dụng để thoát giao tranh hay tạo lợi thế."}}
      ]
    },

    {
      id:"redeem", icon:"♻", code:"08",
      title:{th:"กฎระบบ Redeem",en:"Redeem Rules",vi:"Quy tắc Redeem"},
      subtitle:{th:"คูลดาวน์ 15 นาทีและข้อห้ามหลัง Redeem",en:"15-minute cooldown and post-redeem restrictions",vi:"Cooldown 15 phút và hạn chế sau Redeem"},
      items:[
        {type:"danger",title:{th:"♻️ ห้าม Redeem เพื่อแก้แค้นหรือเสริมกำลัง",en:"♻️ No Redeem for revenge or reinforcement",vi:"♻️ Cấm Redeem để trả thù hoặc tiếp viện"},body:{th:"ห้าม Redeem ตัวใหม่กลับไปไล่ล่า ดักรอ ติดตาม หรือแก้แค้นผู้เล่น/กลุ่มจากเหตุการณ์ก่อนหน้า และห้าม Redeem เพื่อเข้าช่วยไฟต์ เสริมกำลัง หรือแทนสมาชิกที่เพิ่งเสียชีวิตในเหตุการณ์เดิม",en:"Do not Redeem a new Dino to chase, camp, track, or take revenge on players/groups from a previousincident. Do not Redeem to join the same fight, reinforce it, or replace a member who just died.",vi:"Không được Redeem Dino mới để truy đuổi, phục kích, theo dõi hoặc trả thù người chơi/nhóm từ tình huống trước. Không được Redeem để vào hỗ trợ cùng giao tranh, tiếp viện hoặc thay thế thành viên vừa chết."}},
        {type:"danger",title:{th:"🎯 ห้าม SPOT / Counter / ดักเป้าหมาย",en:"🎯 No SPOT / Counter / target camping",vi:"🎯 Cấm SPOT / Counter / phục kích mục tiêu"},body:{th:"ห้าม SPOT แจ้งตำแหน่งหรือส่งข้อมูลให้ผู้เล่นอื่น Redeem กลับมาช่วยไฟต์ ห้ามใช้ข้อมูลจากไฟต์เดิม เช่น สายพันธุ์ จำนวน ตำแหน่ง หรือสถานการณ์ เพื่อเลือกตัวที่ได้เปรียบกว่าแล้ว Counter และห้ามใช้ข้อมูลเส้นทางหรือพฤติกรรมเป้าหมายเพื่อดักรอหรือซุ่มโจมตี",en:"Do not SPOT, share locations, or relay information so others can Redeem back into a fight. Do not use information from the previous fight—such as species, numbers, location, or situation—to choose a stronger counter, and do not use target route/behaviour information to camp or ambush them.",vi:"Không được SPOT, báo vị trí hoặc gửi thông tin để người khác Redeem quay lại hỗ trợ giao tranh. Không được dùng thông tin từ trận trước như loài, số lượng, vị trí hoặc tình hình để chọn Dino khắc chế mạnh hơn, và không được dùng đường đi/hành vi của mục tiêu để phục kích."}},
        {type:"warning",title:{th:"🚫 ห้ามหลบเลี่ยงผลของไฟต์",en:"🚫 Do not evade the outcome of a fight",vi:"🚫 Không né hậu quả của giao tranh"},body:{th:"ห้ามเปลี่ยนตัวเพื่อหลีกเลี่ยงผลจากไฟต์เดิม เช่น เสียเปรียบ บาดเจ็บ ถูกล่า หรือเสียสมาชิก แล้วกลับมาดำเนินสถานการณ์เดิมต่อ",en:"Do not switch characters to avoid consequences from the same fight—such as being disadvantaged, injured, hunted, or losing a member—and then continue the same situation.",vi:"Không được đổi nhân vật để né hậu quả của giao tranh cũ như đang bất lợi, bị thương, bị săn hoặc mất thành viên rồi quay lại tiếp tục tình huống cũ."}},
        {type:"danger",title:{th:"⏳ Redeem Combat Cooldown — 15 นาที",en:"⏳ Redeem Combat Cooldown — 15 minutes",vi:"⏳ Redeem Combat Cooldown — 15 phút"},body:{th:"หลัง Redeem ต้องรอ 15 นาทีเต็มก่อนเป็นฝ่ายเริ่มการต่อสู้ ระหว่างนั้นห้ามเปิดไฟต์/โจมตีก่อน ช่วยไฟต์ของเพื่อน ไล่ล่า ติดตาม กดดัน ดักเป้าหมาย SPOT หรือส่งข้อมูลช่วยการต่อสู้ และห้ามรอใกล้เป้าหมายเพื่อเปิดไฟต์ทันทีหลังหมดคูลดาวน์",en:"After Redeeming, wait a full 15 minutes before initiating combat. During this time, do not attack first, help a friend's fight, chase, track, pressure, camp a target, SPOT/share combat information, or wait near a target to attack immediately when the cooldown expires.",vi:"Sau khi Redeem, phải chờ đủ 15 phút mới được chủ động bắt đầu giao tranh. Trong thời gian này không được đánh trước, hỗ trợ giao tranh của bạn, truy đuổi, theo dõi, gây áp lực, phục kích mục tiêu, SPOT/gửi thông tin chiến đấu hoặc chờ gần mục tiêu để đánh ngay khi hết cooldown."}},
        {type:"success",title:{th:"🛡️ ข้อยกเว้นการป้องกันตัว",en:"🛡️ Self-defence exception",vi:"🛡️ Ngoại lệ tự vệ"},body:{th:"หากผู้เล่นที่ Redeem มา <strong>ถูกโจมตีก่อนจริง ๆ</strong> สามารถโจมตีสวนเพื่อป้องกันตัวได้แม้ยังไม่ครบ 15 นาที ต้องเป็นกรณีที่อีกฝ่ายโจมตีก่อนชัดเจน ห้ามยั่ว เดินจี้ ล้อม ขวางทาง หรือกดดันให้อีกฝ่ายตี และห้ามใช้ข้อยกเว้นนี้เพื่อกลับไปช่วยไฟต์เดิมหรือแก้แค้น หากผู้ Redeem โจมตีก่อนจะไม่ถือเป็นการป้องกันตัว",en:"A Redeemed player who is <strong>genuinely attacked first</strong> may counterattack in self-defence even before 15 minutes have passed. The other side must clearly attack first. Do not provoke, crowd, surround, block, or pressure someone into hitting you, and do not use this exception to rejoin the old fight or take revenge. If the Redeemed player attacks first, it is not self-defence.",vi:"Người chơi vừa Redeem nếu <strong>thực sự bị tấn công trước</strong> có thể đánh trả để tự vệ dù chưa đủ 15 phút. Đối phương phải rõ ràng là bên đánh trước. Không được khiêu khích, bám sát, bao vây, chắn đường hoặc gây áp lực để ép người khác đánh mình; không được dùng ngoại lệ này để quay lại trận cũ hoặc trả thù. Nếu người Redeem đánh trước thì không được tính là tự vệ."}},
        {type:"info",title:{th:"⚠️ ครบ 15 นาที ≠ กลับไปไฟต์เดิมได้",en:"⚠️ 15 minutes elapsed ≠ permission to return to the old fight",vi:"⚠️ Hết 15 phút ≠ được quay lại trận cũ"},body:{th:"ครบ 15 นาทีไม่ได้หมายความว่าสามารถกลับไปแก้แค้นหรือกลับเข้าสู่เหตุการณ์เดิมได้ การ Redeem ต้องถือเป็นการเริ่มสถานการณ์ใหม่อย่างอิสระ",en:"Finishing the 15-minute cooldown does not mean you may return for revenge or re-enter the previous incident. A Redeem must start a new, independent situation.",vi:"Hết 15 phút không có nghĩa là được quay lại trả thù hoặc quay lại tình huống cũ. Redeem phải được xem là bắt đầu một tình huống mới, độc lập."}}
      ]
    },

    {
      id:"alliance", icon:"🤝", code:"09",
      title:{th:"กฎพันธมิตร",en:"Alliance Rules",vi:"Quy tắc liên minh"},
      subtitle:{th:"เข้าทีมแล้วห้ามหักหลังหรือ SPOT",en:"Once teamed, no betrayal or SPOT",vi:"Đã vào team thì không phản bội hoặc SPOT"},
      items:[
        {type:"warning",title:{th:"⚠️ ก่อนเข้าทีม — อย่าไว้ใจใคร",en:"⚠️ Before teaming — trust is your own risk",vi:"⚠️ Trước khi vào team — tự chịu rủi ro khi tin người"},body:{th:"การพูดคุยหรือการเตือนกันเพียงอย่างเดียวไม่ถือว่าเป็นพันธมิตร ตราบใดที่ยังไม่ได้เข้าทีม ทั้งสองฝ่ายสามารถเลือกสู้กันได้ตามปกติ ผู้เล่นควรพิจารณาความเสี่ยงก่อนเปิดเผยข้อมูลหรือเข้าทีมกับผู้อื่น",en:"Conversation or warnings alone do not create an alliance. Until players actually join the same team, either side may choose to fight normally. Players should consider the risk before sharing information or teaming with others.",vi:"Chỉ nói chuyện hoặc cảnh báo nhau chưa tạo thành liên minh. Cho đến khi thực sự vào cùng team, hai bên vẫn có thể chọn giao tranh bình thường. Người chơi nên cân nhắc rủi ro trước khi chia sẻ thông tin hoặc vào team với người khác."}},
        {type:"danger",title:{th:"🤝 เมื่อเข้าทีมแล้ว ห้ามฆ่ากัน",en:"🤝 Once teamed, do not kill each other",vi:"🤝 Đã vào team thì không được giết nhau"},body:{th:"เมื่อทั้งสองฝ่ายตกลงเข้าทีมเดียวกัน ให้ถือว่าเป็นพันธมิตรทันที ห้ามฆ่าหรือโจมตีสมาชิกในทีม ห้ามทำทีเป็นมิตรเพื่อให้อีกฝ่ายลดการป้องกัน และห้ามใช้การเข้าทีมเป็นเครื่องมือเตรียมฆ่าในภายหลัง",en:"Once both sides agree to join the same team, alliance status applies immediately. Do not kill or attack teammates, pretend to be friendly to lower their guard, or use teaming as a setup for a later kill.",vi:"Khi hai bên đồng ý vào cùng team, trạng thái liên minh có hiệu lực ngay. Không được giết hoặc tấn công đồng đội, giả vờ thân thiện để đối phương mất cảnh giác, hoặc dùng việc vào team để chuẩn bị giết sau đó."}},
        {type:"danger",title:{th:"🚫 ห้ามออกทีมแล้วฆ่าทันที",en:"🚫 No leave-team-then-kill setup",vi:"🚫 Cấm rời team rồi lập tức giết"},body:{th:"ห้ามใช้รูปแบบ เข้าทีม → ทำทีเป็นมิตร → ออกจากทีม → กลับมาฆ่า หากพบเจตนาใช้การเข้าทีมเพื่อหลอกล่อแล้วนำไปสู่การฆ่า ทีมงานสามารถดำเนินการตามกฎได้",en:"Do not use a join team → act friendly → leave team → return to kill setup. If teaming is intentionally used to lure someone into a later kill, staff may take action.",vi:"Cấm kiểu vào team → giả vờ thân thiện → rời team → quay lại giết. Nếu việc vào team được cố ý dùng để dụ người khác rồi giết, nhân viên có thể xử lý theo luật."}},
        {type:"danger",title:{th:"📍 ห้าม SPOT จุดจากข้อมูลพันธมิตร",en:"📍 Do not SPOT using alliance information",vi:"📍 Cấm SPOT bằng thông tin liên minh"},body:{th:"ห้ามใช้ข้อมูลที่ได้จากการเป็นพันธมิตรเพื่อบอกตำแหน่ง SPOT จุด ส่งพิกัด เรียกเพื่อน หรือส่งข้อมูลให้กลุ่มอื่นเข้ามาโจมตี โดยเฉพาะกรณีออกทีมแล้วบอกจุดให้เพื่อนมาฆ่า",en:"Do not use information obtained through an alliance to share locations, SPOT, send coordinates, call friends, or give another group information to attack. Leaving the team and then giving friends the target's location is specifically prohibited.",vi:"Không được dùng thông tin có được từ liên minh để báo vị trí, SPOT, gửi tọa độ, gọi bạn hoặc cung cấp thông tin cho nhóm khác đến tấn công. Đặc biệt cấm rời team rồi báo vị trí cho bạn đến giết."}},
        {type:"info",title:{th:"⚔️ 2v2 / 3v3 / จำนวนเท่ากัน",en:"⚔️ 2v2 / 3v3 / equal numbers",vi:"⚔️ 2v2 / 3v3 / số lượng bằng nhau"},body:{th:"หากผู้เล่นพบกันโดยแต่ละฝ่ายมีจำนวนเท่ากัน เช่น 2v2, 3v3, 4v4 สามารถต่อสู้กันได้ตามปกติ แต่ยังต้องปฏิบัติตามกฎ Third Party",en:"When both sides meet with equal numbers, such as 2v2, 3v3, or 4v4, they may fight normally, but Third Party rules still apply.",vi:"Khi hai bên gặp nhau với số lượng bằng nhau như 2v2, 3v3 hoặc 4v4, có thể giao tranh bình thường nhưng vẫn phải tuân thủ quy tắc Third Party."}}
      ]
    },

    {
      id:"spot", icon:"📍", code:"10",
      title:{th:"Community หรือ SPOT จุด?",en:"Community or SPOT?",vi:"Community hay SPOT?"},
      subtitle:{th:"เส้นแบ่งของการแชร์ข้อมูลในเกม",en:"The line between general information and targeting",vi:"Ranh giới giữa thông tin chung và chỉ điểm"},
      items:[
        {type:"success",title:{th:"🟢 Community — ข้อมูลทั่วไป",en:"🟢 Community — general information",vi:"🟢 Community — thông tin chung"},body:{th:"การพูดคุยหรือแลกเปลี่ยนข้อมูลทั่วไป เช่น “แถว North Lake มีคนเยอะ” โดยไม่ได้มีเจตนาชี้เป้าให้ผู้อื่นไปดำเนินการต่อ ไม่ถือเป็น SPOT",en:"General discussion or information sharing, such as “There are many people around North Lake,” without an intent to direct others toward a target, is not SPOT.",vi:"Trao đổi thông tin chung, ví dụ “khu North Lake có nhiều người,” mà không có ý định chỉ mục tiêu để người khác đi xử lý, không bị xem là SPOT."}},
        {type:"danger",title:{th:"🔴 SPOT — ชี้เป้าเพื่อให้ผู้อื่นดำเนินการ",en:"🔴 SPOT — targeting for someone else to act",vi:"🔴 SPOT — chỉ mục tiêu để người khác hành động"},body:{th:"การระบุตำแหน่งพร้อมรายละเอียดของผู้เล่น เช่น จำนวน ตำแหน่ง ทิศทาง หรือสถานะ เพื่อให้ผู้อื่นติดตาม เข้าไปสู้ หรือเปิดไฟต์แทน อาจถือเป็น SPOT แม้ไม่พูดคำว่า “มาช่วย” ทีมงานจะดูรายละเอียด ความชัดเจนของตำแหน่ง จำนวน/ทิศทาง/สถานะ การติดตามต่อเนื่อง การเรียกผู้อื่น และเจตนาของการส่งข้อมูล",en:"Giving a location together with player details—such as numbers, position, direction, or status—so others can track, engage, or start a fight may be SPOT even without saying “come help.” Staff consider the level of detail, precision of location, numbers/direction/status, ongoing tracking, whether others were called, and the intent behind the information.",vi:"Cung cấp vị trí kèm chi tiết người chơi như số lượng, vị trí, hướng di chuyển hoặc trạng thái để người khác theo dõi, vào đánh hoặc mở giao tranh có thể bị xem là SPOT dù không nói “đến giúp”. Nhân viên sẽ xem mức độ chi tiết, độ chính xác của vị trí, số lượng/hướng/trạng thái, việc theo dõi liên tục, có gọi người khác hay không và mục đích truyền thông tin."}},
        {type:"info",title:{th:"🧠 หลักจำง่าย",en:"🧠 Simple distinction",vi:"🧠 Cách phân biệt đơn giản"},body:{th:"<div class='quote'><strong>การบอกข้อมูลทั่วไป = Community</strong><br><strong>การชี้เป้าเพื่อให้ผู้อื่นไปดำเนินการ = SPOT</strong></div>",en:"<div class='quote'><strong>General information = Community</strong><br><strong>Pointing out a target so others can act = SPOT</strong></div>",vi:"<div class='quote'><strong>Thông tin chung = Community</strong><br><strong>Chỉ mục tiêu để người khác hành động = SPOT</strong></div>"}}
      ]
    },

    {
      id:"evidence", icon:"🎥", code:"11",
      title:{th:"หลักฐานและการรายงาน",en:"Evidence & Reporting",vi:"Bằng chứng & báo cáo"},
      subtitle:{th:"สิ่งที่ควรเตรียมก่อนเปิด Ticket",en:"What to prepare before opening a Ticket",vi:"Cần chuẩn bị gì trước khi mở Ticket"},
      items:[
        {type:"info",title:{th:"🎥 แนวทางส่งหลักฐาน",en:"🎥 Evidence guidelines",vi:"🎥 Hướng dẫn gửi bằng chứng"},body:{th:"หากต้องการรายงานผู้เล่น ให้เปิด Ticket ประเภทรายงานผู้เล่นและเตรียมคลิปหลักฐานให้เรียบร้อย คลิปต้องชัดเจนและต่อเนื่อง พร้อมระบุรายละเอียดและช่วงเวลาสำคัญ หากไฟล์ใหญ่หรือยาว ให้ใช้ Google Drive หรือ YouTube และตรวจสอบว่าลิงก์เปิดดูได้Google Drive ต้องตั้งเป็น “ทุกคนที่มีลิงก์สามารถดูได้” Ticket ที่ไม่มีหลักฐาน หลักฐานไม่ชัด หรือลิงก์เปิดไม่ได้อาจไม่สามารถนำมาพิจารณาได้",en:"To report a player, open a player-report Ticket and prepare the evidence first. Footage must be clear and continuous, with relevant details and important timestamps. For large or long videos, use Google Drive or YouTube and verify the link works. Google Drive should be set to “Anyone with the link can view.” Tickets with no evidence, unclear evidence, or inaccessible links may not be reviewable.",vi:"Để báo cáo người chơi, hãy mở Ticket loại báo cáo và chuẩn bị bằng chứng trước. Video phải rõ ràng, liên tục và có mô tả cùng mốc thời gian quan trọng. Nếu file lớn hoặc dài, hãy dùng Google Drive hoặc YouTube và kiểm tra liên kết mở được. Google Drive cần đặt “Bất kỳ ai có liên kết đều có thể xem”. Ticket không có bằng chứng, bằng chứng không rõ hoặc link không mở được có thể không được xem xét."}},
        {type:"warning",title:{th:"📌 หลักฐานควรมีบริบท",en:"📌 Evidence should include context",vi:"📌 Bằng chứng cần có bối cảnh"},body:{th:"หลักฐานควรแสดงเหตุการณ์ก่อน ระหว่าง และหลังเกิดเหตุหากจำเป็น รวมถึงเสียง ชื่อ ตัวละคร และช่วงเวลาที่เกี่ยวข้อง แนะนำ F2 / NVIDIA Overlay / Instant Replay ไม่จำเป็นต้องอัดทั้งเกม แต่ควรมีบริบทเพียงพอให้ทีมงานตรวจสอบ",en:"Evidence should show the event before, during, and after where necessary, including audio, names, characters, and relevant timing. F2 / NVIDIA Overlay / Instant Replay are recommended. You do not need to record the whole game, but the clip should contain enough context for staff to review.",vi:"Bằng chứng nên thể hiện diễn biến trước, trong và sau sự việc khi cần, bao gồm âm thanh, tên, nhân vật và thời điểm liên quan. Khuyến nghị F2 / NVIDIA Overlay / Instant Replay. Không cần ghi cả buổi chơi nhưng clip phải có đủ bối cảnh để nhân viên kiểm tra."}},
        {type:"info",title:{th:"📍 หลักฐาน Alliance / SPOT",en:"📍 Alliance / SPOT evidence",vi:"📍 Bằng chứng Alliance / SPOT"},body:{th:"กรณีร้องเรียน SPOT / การหักหลัง / การวางแผนฆ่า ควรมีบริบท เช่น Clip/Recording, Chat, Voice, Screenshot และลำดับเหตุการณ์ ทีมงานจะพิจารณาหลักฐานของทั้งสองฝ่าย หากหลักฐานไม่เพียงพอที่จะยืนยันการกระทำผิด ทีมงานสามารถปัดตกเคสได้",en:"For SPOT, betrayal, or planned-kill reports, include context such as clips/recordings, chat, voice, screenshots, and the event sequence. Staff will considerevidence from both sides. If evidence is insufficient to establish a violation, the case may be dismissed.",vi:"Đối với báo cáo SPOT, phản bội hoặc lên kế hoạch giết, cần có bối cảnh như clip/recording, chat, voice, screenshot và trình tự sự kiện. Nhân viên sẽ xem bằng chứng từ cả hai bên. Nếu bằng chứng không đủ xác nhận vi phạm, vụ việc có thể bị bác."}}
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