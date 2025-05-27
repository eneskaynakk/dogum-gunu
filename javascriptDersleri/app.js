let isim = prompt("İsminizi Giriniz:");

kullaniciAdi(isim);
function kullaniciAdi(kullaniciIsmi){

    if(kullaniciIsmi == "Enes"){
        console.log("Hoş Geldiniz " + kullaniciIsmi +" Bey");
    }
    else{
        console.log("Yanlış isim " + kullaniciIsmi);
    }
}

