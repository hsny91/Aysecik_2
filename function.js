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

function carpim(diziAdi) {
  let carpSonuc = 1;
  for (let i = 0; i < diziAdi.length; i++) {
    carpSonuc *= Number(diziAdi[i]);
  }
  document.getElementById("carpim").innerHTML =
    "Ayse'nin Girdigi Sayilarin Carpimi: " + carpSonuc;
}
function enBuyukSayi(diziAdi) {
  let max = Math.max.apply(Math, diziAdi);
  document.getElementById("enBuyukSayi").innerHTML =
    "Ayse'nin Girdigi En Buyuk Sayi: " + max;
}

function enKucukSayi(diziAdi) {
  let min = Math.min.apply(Math, diziAdi);
  document.getElementById("enKucukSayi").innerHTML =
    "Ayse'nin Girdigi En Kucuk Sayi: " + min;
}
function hataBulma(ilkDeger, diziAdi) {
  if (ilkDeger > diziAdi.length) {
    document.getElementById("hataBulma").innerHTML = "AYSE HATALI SAYI GIRDIN";
  }
}
function tekrarliSayilar(diziAdi) {
  let k = "";
  for (let i = 0; i < diziAdi.length; i++) {
    let sayac = 0;
    for (let j = 0; j < diziAdi.length; j++) {
      if (diziAdi[i] === diziAdi[j]) {
        // if fonksiyonunda amac dizi icerisindeki elamanlari karsilastirmak ve ayni olanlari tespit etmek .
        sayac++;
      }
    }
    if (sayac != 0) {
      // sayacimin sifir olmamasi durumu dizinin icinde kendini tekrar eden elemanlarin oldugunu gosterir. Bunlar "k" degiskenin icine atanir.
      k += document.getElementById("tekrarliSayilar").innerHTML =
        diziAdi[i] + " Sayisindan " + sayac + " Tane Girilmistir.<br>";
    }
    document.getElementById("tekrarliSayilar").innerHTML = k;
  }
}
