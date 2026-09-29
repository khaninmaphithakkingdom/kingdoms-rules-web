window.KI_RULES = {
  ui: {
    th: {
      navTitle:"�,��,��,�,"�,?�,Z", navHint:"�1?�,��,��,-�,?�,��,�,�,,�1%�,-�1?�,z�,��1^�,-�1,�,>�,��,�,؅,?�,Z�1,�,"�,��,�,��,�", currentRules:"CURRENT RULESET",
      heroLead:"�,-�1^�,��,T�,?�,Z�,-�,�1%�,؅,��,��,"�,?�1^�,-�,T�1?�,,�1%�,��1?�,��1^�,T �1?�,z�,��1^�,-�1��,��1%�,-�,,�,?�,,�,T�,-�,��,1�1^�,��1^�,�,��,?�,�,T�1,�,"�1%�,-�,��1^�,��,؅,��,,�,�,'�,~�,��,��,��1?�,��,��,��,T�,,�,?",
      noticeTitle:"�,?�,Z�,��,��,��,��,��,-�1?�,>�,��,�1^�,��,T�1?�,>�,��,؅1,�,"�1%",
      noticeBody:"�,��,��,?�,��,�,?�,��,��1?�,>�,��,�1^�,��,T�1?�,>�,��,� �,-�,�,��,؅,��,T�,^�,��1?�,^�1%�,؅,o�1^�,��,T�,��1%�,-�,؅,>�,��,��,?�,��,"�,,�,-�,؅1?�,<�,'�,��1O�,Y�1?�,�,-�,��1O",
      sectionsLabel:"�,��,��,�,"�,?�,Z", rulesLabel:"�,��,�,�,,�1%�,-", languagesLabel:"�,��,��,c�,�",
      quickWeekend:"Weekend PVP", quickCombat:"�,?�,Z�,?�,��,��,�1^�,-�,��,1�1%", quickThird:"Third Party", quickRedeem:"�,?�,Z Redeem", quickPack:"Pack Limits",
      noResultsTitle:"�1,�,��1^�,z�,s�,?�,Z�,-�,�1^�,,�1%�,T�,��,�", noResultsBody:"�,��,-�,؅1��,S�1%�,,�,3�,,�1%�,T�,-�,�1^�,��,�1%�,T�,��,� �,��,��,��,-�1?�,��,��,-�,?�,��,��,�,"�,^�,��,?�1?�,��,T�,1�,"�1%�,��,T�,<�1%�,��,�",
      footerText:"Respect the rules A� Protect the wilderness A� Play together", search:"�,,�1%�,T�,��,��,?�,Z...", copy:"�,,�,�,"�
…[middle output omitted]…
,-�,؅,o�1^�,��,T�,,�,3�,�,�,?�1?�,�,��,-�,T�,"�1%�,�,��,�,��,^�,�, Warning 1 �,��,��,��,- Warning 2 �,?�1^�,-�,T",
        en:"<strong>dYs� Cheating software �?" Immediate Permanent Ban</strong><br>If staff verify that a player used <strong>cheat software or external software that provides an unfair advantage</strong>, the player will receive an <strong>immediate Permanent Ban from the server</strong> without first receiving a verbal warning, Warning 1, or Warning 2.",
        vi:"<strong>dYs� S��- d���ng ph��n m��?m gian l��-n �?" C���m v�cnh vi��.n ngay l��-p t��cc</strong><br>N���u �`��Ti ng�c xA�c minh ng����?i ch��i �`A� s��- d���ng <strong>ph��n m��?m gian l��-n ho���c ph��n m��?m bA�n ngoA�i t���o l���i th��� khA'ng cA'ng b���ng</strong>, ng����?i ch��i s��� b��< <strong>c���m v�cnh vi��.n kh��?i mA�y ch�� ngay l��-p t��cc (Permanent Ban)</strong> mA� khA'ng c��n tr���i qua c���nh cA�o b���ng l��?i nA3i, Warning 1 ho���c Warning 2."
      }
    }
  ],

  packLimits: {
    Herbivore:[["Hypsilophodon",12],["Dryosaurus",12],["Pachycephalosaurus",8],["Tenontosaurus",6],["Kentrosaurus",5],["Diabloceratops",5],["Maiasaura",4],["Stegosaurus",3],["Triceratops",2]],
    Omnivore:[["Beipisaurus",12],["Gallimimus",8]],
    Carnivore:[["Pteranodon",10],["Troodon",10],["Omniraptor",8],["Herrerasaurus",8],["Austroraptor",8],["Dilophosaurus",5],["Carnotaurus",4],["Ceratosaurus",4],["Allosaurus",3],["Deinosuchus",2],["Tyrannosaurus Rex",2]]
  },

  herdTokens: {
    "Micro �?" 3":[["Dryosaurus",3],["Beipiaosaurus",3],["Hypsilophodon",3]],
    "Low �?" 5":[["Gallimimus",5],["Pachycephalosaurus",5]],
    "Medium �?" 10":[["Maiasaura",10],["Tenontosaurus",10],["Diabloceratops",10],["Kentrosaurus",10]],
    "High �?" 20":[["Stegosaurus",20],["Triceratops",20]]
  }
};

window.KI_RULES.sections.find(s => s.id === "behavior").items.push({
  type:"warning",
  title:{th:"�s-�,? Final Rule �?" �,��,��,�,?�,?�,��,��,�,�,"�,��,'�,T",en:"�s-�,? Final Rule �?" decision principle",vi:"�s-�,? Final Rule �?" nguyA�n t��_c x��- lA�"},
  body:{
    th:"�,?�,Z�,��,�1,�,�1%�1?�,z�,��1^�,-�1��,��1%�,-�,,�,?�,,�,T�1?�,��1^�,T�,-�,��1^�,��,؅1?�,-�1^�,��1?�,-�,�,��,� �1,�,��1^�1��,S�1^�1?�,z�,��1^�,-�,��,��,S�1^�,-�,؅1?�,-�,��,S�,T�,��,?�,Z �,��,��,?�,��,�,z�,�,�,'�,?�,��,��,��,^�,؅1��,^�,��,��,�,?�1?�,��,�1^�,��,؅,?�,Z �1��,S�1%�,S�1^�,-�,؅1,�,��,�1^ �,��,��,��,-�,��,��1%�,��,؅,,�,�,��,��1,�,"�1%�1?�,>�,��,�,��,s�,-�,�1^�1,�,��1^�1?�,>�1؅,T�,~�,��,��,� �,-�,�,��,؅,��,T�,��,��,��,��,��,-�,z�,'�,^�,��,��,"�,��,^�,��,?�,��,��,�,?�,?�,��,T �,s�,��,'�,s�,- �1?�,^�,�,T�,� �1?�,��,��1?�,��,�,,�,?�,��,��,"�1O�,-�,�1%�,؅,��,��,"",
    en:"Rules exist so everyone can play fairly, not as loopholes to be worked around. Intentional rule evasion, exploitation, or unfair advantage may be reviewed using the evidence, context, intent, and the complete sequence of events.",
    vi:"Quy t��_c t��"n t���i �`��� m��?i ng����?i ch��i cA'ng b���ng, khA'ng ph���i �`��� tA�m k��� h��Y lA�ch lu��-t. HA�nh vi c��` A� nAc lu��-t, l���i d���ng l��- h��ng ho���c t���o l���i th��� khA'ng cA'ng b���ng cA3 th��� �`�����c xem xAct d���a trA�n b���ng ch��cng, b��`i c���nh, A� �`��<nh vA� toA�n b��T di��.n bi���n."
  }
});

window.KI_RULES.sections.find(s => s.id === "evidence").items.push({
  type:"danger",
  title:{th:"dYs� �,��1%�,��,��,�,�,"�,�1^�,-�,��,��,��,-�,s�,'�,"�1?�,s�,��,-�,T�,��,��,�,?�,?�,��,T",en:"dYs� Do not manipulate evidence",vi:"dYs� C���m ch��%nh s��-a ho���c bA3p mAco b���ng ch��cng"},
  body:{
    th:"�,��1%�,��,��,�,�,"�,�1^�,- �,"�,�,"�1?�,>�,��,� �,��,��,��,-�1?�,o�,��1?�,z�,��1^�,��,��,�,?�,?�,��,T�1��,T�,��,�,?�,c�,"�,��,-�,�1^�,-�,3�1��,��1%�1?�,��,�,,�,?�,��,��,"�1O�,-�,1�,?�1?�,,�1%�,��1��,^�,o�,'�," �1?�,��,��,��1%�,��,��1��,��1%�,,�1%�,-�,��,1�,��1?�,-�1؅,^�,��,��,��,-�,>�,?�,>�,'�,"�,,�1%�,-�1?�,-�1؅,^�,^�,��,'�,؅,�1^�,-�,-�,�,��,؅,��,T�1?�,z�,��1^�,-�1��,��1%�,�,T�1?�,-�,؅,��,��,��,-�,o�,1�1%�,-�,��1^�,T�,z�1%�,T�,o�,'�,"",
    en:"Do not edit, alter, or present evidence in a way that misrepresents what happened. Do not give false information or conceal relevant facts from staff to clear yourself or another player.",
    vi:"KhA'ng �`�����c ch��%nh s��-a, thay �`��i ho���c trA�nh bA�y b���ng ch��cng theo cA�ch lA�m sai l���ch s��� vi���c. KhA'ng �`�����c cung c���p thA'ng tin sai ho���c che gi���u s��� th��-t liA�n quan v��>i nhA�n viA�n �`��� giA�p b���n thA�n ho���c ng����?i khA�c thoA�t l��-i."
  }
});

window.KI_RULES.sections.find(s => s.id === "survival").items.push({
  type:"warning",
  title:{th:"�,?�,��,��,s�,�,؅,,�,�,s�1��,S�1% dY>��,? Sanctuary Camping",en:"dY>��,? �s��,? Sanctuary Camping enforcement",vi:"X��- lA� dY>��,? Sanctuary Camping"},
  body:{
    th:"�,?�,��,��,?�,��,��,-�,3�,,�,��,�1%�,؅1?�,��,?�,-�,��,^�1,�,"�1%�,��,�,s�,?�,��,��,�,�,?�1?�,�,��,-�,T �,��,��,?�,-�,3�,<�1%�,3�,��,��,��,-�,^�,؅1��,^�,-�,3�,�1^�,-�,��,��,�,؅1,�,"�1%�,��,�,s�,,�,3�1?�,�,��,-�,T �,��,��,��,��,��,-�1,�,"�1%�,��,�,s�,s�,-�,��,؅1,�,-�,c�,-�,�1^�,��,,�,T�1?�,��,؅,,�,�1%�,T",
    en:"A first incident may receive a warning. Repeated behaviour or intentionally continuing after a warning may result in a more severe penalty.",
    vi:"L��n vi ph���m �`��u cA3 th��� b��< c���nh cA�o. N���u tA�i ph���m ho���c c��` A� ti���p t���c sau khi �`�����c c���nh bA�o, hA�nh ph���t cA3 th��� nghiA�m kh��_c h��n."
  }
});
