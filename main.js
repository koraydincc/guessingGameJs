let rnd;
let uyari = '';
counter = 0

document.getElementById('btn-random').addEventListener('click', function() {
  rnd = Math.floor(Math.random() * 100)
  alert('Random sayınız alındı tahminde bulunabilirsiniz')
})



function yenidenBaslat() {
   counter=0;
   document.getElementById('sayi-dus').innerHTML = ''
   document.getElementById('inp-sayi').value = ''
   document.getElementById('rnd-sayi').innerHTML = ''
   document.getElementById('sayac').innerHTML = ''
   document.getElementById('uyari').innerHTML = ''
   return;
   
  
}

document.getElementById('btn-tahmin').addEventListener('click', function() {
  let sayi = parseInt(document.getElementById('inp-sayi').value)

  
  
  if (sayi > rnd) {

    

    let uyari = sayi - rnd + ' puan daha küçültmeniz lazım.';
    
    document.getElementById('sayi-dus').innerHTML = `Sayıyı küçültmeniz lazım`
    document.getElementById('uyari').innerHTML = uyari;
    counter++;
    document.getElementById('sayac').innerHTML = (3-counter) + ' '  +  'Hakkınız kaldı'
    
    
  }
  else if (sayi == rnd) {
    document.getElementById('sayi-dus').innerHTML = `Tebrikler doğru Tahmin Ettiniz. Random sayınız : ${rnd}` 
    document.getElementById('rnd-sayi').style.display = 'flex'
    setTimeout(yenidenBaslat, 3000)
    return;
  }
  else if (rnd > sayi) {

    let uyari = rnd - sayi + ' puan daha büyütmeniz lazım.';

    document.getElementById('sayi-dus').innerHTML = `Sayıyı büyütmeniz lazım`;
    document.getElementById('uyari').innerHTML = uyari;
    counter++;
    document.getElementById('sayac').innerHTML = (3 - counter) + ' Hakkınız kaldı';
    

  }

  else if(document.getElementById('inp-sayi').value == ""){
    alert('0-100 arasında sayı giriniz');
  }
 

  

  if (counter === 3) {
    document.getElementById('sayi-dus').innerHTML = '3 kez yanlış tahmin ettiniz. Oyunu kaybettiniz.';
    counter = 0;
    setTimeout(yenidenBaslat, 3000)
    

  }



  
})
