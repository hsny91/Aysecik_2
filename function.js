function girilenSayi(pNumber) {
  // kac sayi girildi bilgisini veren fonksiyon
  document.getElementById("girilenSayi").innerHTML =
    pNumber + " Tane Sayi Girilmistir.";
}

function sayiListesi(pArray) {
  // Girilen sayilarin listesini veren fonksiyon.
  document.getElementById("sayiListesi").innerHTML =
    "Ayse'nin Girdigi Sayilar: " + pArray;
}

function toplam(pArray) {
  let sum = 0;
  for (let i = 0; i < pArray.length; i++) {
    sum += Number(pArray[i]);
  }
  document.getElementById("toplam").innerHTML =
    "Ayse'nin Girdigi Sayilarin Toplami: " + sum;
}

function carpim(pArray) {
  let carpSonuc = 1;
  for (let i = 0; i < pArray.length; i++) {
    carpSonuc *= Number(pArray[i]);
  }
  document.getElementById("carpim").innerHTML =
    "Ayse'nin Girdigi Sayilarin Carpimi: " + carpSonuc;
}

function enBuyukSayi(pArray) {
  let maxNumber = Math.max.apply(Math, pArray);
  document.getElementById("enBuyukSayi").innerHTML =
    "Ayse'nin Girdigi En Buyuk Sayi: " + maxNumber;
}

function enKucukSayi(pArray) {
  let minNumber = Math.min.apply(Math, pArray);
  document.getElementById("enKucukSayi").innerHTML =
    "Ayse'nin Girdigi En Kucuk Sayi: " + minNumber;
}

function hataBulma(firstValue, pArray) {
  if (firstValue > pArray.length) {
    document.getElementById("hataBulma").innerHTML = "AYSE HATALI SAYI GIRDIN";
  }
}

function tekrarliSayilar(pArray) {
  let result = "";
  for (let i = 0; i < pArray.length; i++) {
    let sayac = 0;
    for (let j = 0; j < pArray.length; j++) {
      if (pArray[i] === pArray[j]) {
        // if fonksiyonunda amac dizi icerisindeki elamanlari karsilastirmak ve ayni olanlari tespit etmek .
        sayac++;
      }
    }
    if (sayac != 0) {
      // sayacimin sifir olmamasi durumu dizinin icinde kendini tekrar eden elemanlarin oldugunu gosterir. Bunlar "k" degiskenin icine atanir.
      result += pArray[i] + " Sayisindan " + sayac + " Tane Girilmistir.<br>";
    }
    document.getElementById("tekrarliSayilar").innerHTML = result;
  }
}