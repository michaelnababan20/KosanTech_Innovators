var isGambar1 = true;
var gambarElement = document.getElementById('gambar');
function toggleImage() {
    console.log("test")
    if (isGambar1) {
        gambarElement.src = "assets/images/Whislist/Wishlist.png"; // Ganti ke gambar kedua
      } else {
        gambarElement.src = "assets/images/Whislist/Wishlist2.png"; // Kembali ke gambar pertama
      }
      isGambar1 = !isGambar1; 
  }

  function like(button) {
    var image = button.querySelector("img");
  
    // Cek jika gambar saat ini adalah loveRed
    if (image.src.endsWith("loveEmpyty.svg")) {
      // Ganti gambar ke loveWhite
      image.src = "assets/icons/loveRed.svg";
    } else {
      // Ganti gambar kembali ke loveRed (jika sebelumnya loveWhite)
      image.src = "assets/icons/loveEmpyty.svg";
    }
  }
  