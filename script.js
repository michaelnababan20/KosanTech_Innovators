var isGambar1 = true;
var gambarElement = document.getElementById('gambar');
function toggleImage() {
    console.log("test")
    if (isGambar1) {
        gambarElement.src = "image/Whislist/Wishlist.png"; // Ganti ke gambar kedua
      } else {
        gambarElement.src = "image/Whislist/Wishlist2.png"; // Kembali ke gambar pertama
      }
      isGambar1 = !isGambar1; 
  }