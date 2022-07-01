var firstName = prompt("Ismingiz");
var firstFamly = prompt("Familyangiz");
var firstOstv = prompt("Ochestivangiz");
var firstAge = prompt("Yoshiz nechida");
var firstOqish = prompt("Qayerda o'qiysiz");
var firstQayer = prompt("Qayerdansiz");
var firstOrzu = prompt("Kelajakdagi orzularingiz");
var firstDasturlash = prompt("Dasturlashni nimaga tanlagansiz");
var daraja = prompt("Hozirgi darajangiz ( 0 , junyor , middle , sinyor)");
var KursImtihon = prompt(" kursdagi imtihondan necha marta yiqilganiz ");


var returun = 
` -Sizning ismingiz: ${firstName}
  -Sizning familyangiz: ${firstFamly}
  -Sizning ochestivangiz: ${firstOstv}
  -Sizning yoshingiz: ${firstAge}
  -O'qish joyiz: ${firstOqish}
  -Sizning Qayerdan ekanligiz: ${firstQayer}
  -Kelajakdagi orzulariz: ${firstOrzu}
  -Tanlagan dasturlash tiliz: ${firstOqish}
  -Dasturlashdagi darajangiz: ${daraja}
  -Imtihondagi yebqo'yganlariz: ${KursImtihon}

`;

console.log(returun);

alert(returun);