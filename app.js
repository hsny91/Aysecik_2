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
let degeri = prompt("Ayse Bir Sayi Girer Misin.");
let yeniDizi = new Array();
for (let i = 0; i < degeri; i++) {
  let deger = prompt("sayi:" + (i + 1));
  let lowerCaseDeger = deger.toLowerCase();
  for (let j = 0; j < firstArray.length; j++) {
    if (firstArray[j] === lowerCaseDeger) {
      yeniDizi.push(firstArray.indexOf(lowerCaseDeger)); 
    }
  }
}

girilenSayi(degeri);
sayiListesi(yeniDizi);
toplam(yeniDizi);
carpim(yeniDizi);
enBuyukSayi(yeniDizi);
enKucukSayi(yeniDizi);
tekrarliSayilar(yeniDizi); 
hataBulma(degeri, yeniDizi);
