let rnd;
alert('0-10 Arasında Sayı Girebilirsiniz')

document.getElementById('btn-random').addEventListener('click', function() {
  rnd = Math.floor(Math.random() * 10)
  alert('Random sayınız alındı tahminde bulunabilirsiniz')
})

document.getElementById('btn-tahmin').addEventListener('click', function() {
  let sayi = parseInt(document.getElementById('inp-sayi').value)

  if (sayi > rnd) {
    document.getElementById('sayi-dus').innerHTML = `Sayıyı küçültmeniz lazım`
  }
  else if (sayi == rnd) {
    document.getElementById('sayi-dus').innerHTML = `Tebrikler doğru Tahmin Ettiniz. Random sayınız : ${rnd}` 
    document.getElementById('rnd-sayi').style.display.flex
  }
  else if (rnd > sayi) {

    document.getElementById('sayi-dus').innerHTML = `Sayıyı büyütmeniz lazım` 

  }
  else{
    alert('0 ile 10 arasında sayı giriniz')
  }

  
})
