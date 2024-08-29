// variabel untuk mengambil value di dispslay
const display = document.getElementById('display');

// function untuk menampilkan angka di display
function appendToDisplay(input) {
  display.value += input //display.value = display.value + input
}

// function untuk menghapus semua angka di display
function clearDisplay() {
  display.value = '';
}

// funuction unutk menghapus angka
function hapus() {
  display.value = display.value.slice(0, -1);
}

// function untuk menghitung angka
function calculate() {
 try {
  display.value = eval(display.value);
 } catch (error) {
  display.value = 'Error'
 } 
}