const container = document.querySelectorAll(".container");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

container.forEach(imgs => {
  imgs.addEventListener('click',getImg => {
    const img = getImg.target
    jumbo.src = img.src

    jumbo.classList.add('fade')
    setTimeout(function() {
      jumbo.classList.remove('fade')
    },500)

    thumbs.forEach(thumb => {
      if (thumb.classList.contains('active')) {
        thumb.classList.remove('active')
      }
    })
    img.classList.add('active')
  })
})
// function Mahasiswa(nama, energi) {
//   this.nama = nama
//   this.energi = energi
// }

// Mahasiswa.prototype.makan = function(porsi) {
//   return this.energi += porsi
// }

// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama
//     this.energi = energi
//   }

//   makan(porsi) {
//     return this.energi += porsi
//   }
// }

// const rafif =  new Mahasiswa('rafif', 10)