let firstArray = [
  "sifir",
  "bir",
  "iki",
  "üç",
  "dört",
  "beş",
  "altı",
  "yedi",
  "sekiz",
  "dokuz",
  "on",
  "onbir",
  "oniki",
  "onüç",
  "ondört",
  "onbeş"
]; 
let promtValue = prompt("Ayse Bir Sayi Girer Misin.");
let newArray = new Array();
for (let i = 0; i < promtValue; i++) {
  let deger = prompt("sayi:" + (i + 1));
  let lowerCaseDeger = deger.toLowerCase();
  for (let j = 0; j < firstArray.length; j++) {
    if (firstArray[j] === lowerCaseDeger) {
      newArray.push(firstArray.indexOf(lowerCaseDeger)); 
    }
  }
}

girilenSayi(promtValue);
sayiListesi(newArray);
toplam(newArray);
carpim(newArray);
enBuyukSayi(newArray);
enKucukSayi(newArray);
tekrarliSayilar(newArray); 
hataBulma(promtValue, newArray);
