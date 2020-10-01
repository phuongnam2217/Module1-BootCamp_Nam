//// --------------SLIDE SHOW----------------////
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
  setTimeout(showSlides, 1000);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
var slideIndexs = 0;
showSlides1();

function showSlides1() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexs++;
  if (slideIndexs > slides.length) {
    slideIndexs = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexs - 1].style.display = "block";
  dots[slideIndexs - 1].className += " active";
  setTimeout(showSlides1, 5000); // Change image every 2 seconds
}
// ----------TOUR NỔI BẬT-------------//
// ----------TOUR NỔI BẬT-------------//

let img = 0;
let imgNoiBat1 = [
  "New folder/tournoibat1.jpg",
  "New folder/tournoibat1-2.jpg",
  "New folder/tournoibat1-3.jpg",
];
let imgNoiBat2 = [
  "New folder/tournoibat2.jpg",
  "New folder/tournoibat2-2.jpg",
  "New folder/tournoibat2-3.jpg",
];
let imgNoiBat3 = [
  "New folder/tournoibat3.jpg",
  "New folder/tournoibat3-2.jpg",
  "New folder/tournoibat3-3.jpg",
];
changeImage = function () {
  document.getElementById("noiBat1").src = imgNoiBat1[img];
  document.getElementById("noiBat2").src = imgNoiBat2[img];
  document.getElementById("noiBat3").src = imgNoiBat3[img];
  document.getElementById("mienNam3").src = imgNoiBat2[img];
  img++;
  if (img == 3) {
    img = 0;
  }
  setTimeout(changeImage, 4000);
};

// ----------TOUR NỔI BẬT-------------//
// ----------TOUR NỔI BẬT-------------//
// ----------TOUR MIỀN BẮC-------------//
let img1 = 0;
let imgMienBac1 = [
  "New folder/tourmienbac1.jpg",
  "New folder/tourmienbac1-2.jpg",
  "New folder/tourmienbac1-3.jpg",
];
let imgMienBac2 = [
  "New folder/tourmienbac2.jpg",
  "New folder/tourmienbac2-2.jpg",
  "New folder/tourmienbac2-3.jpg",
];
let imgMienBac3 = [
  "New folder/tourmienbac3.jpg",
  "New folder/tourmienbac3-2.jpg",
  "New folder/tourmienbac3-3.jpg",
];
changeImageMB = function () {
  document.getElementById("mienBac1").src = imgMienBac1[img1];
  document.getElementById("mienBac2").src = imgMienBac2[img1];
  document.getElementById("mienBac3").src = imgMienBac3[img1];
  img1++;
  if (img1 == 3) {
    img1 = 0;
  }
  setTimeout(changeImageMB, 4000);
};
// ----------TOUR MIỀN BẮC-------------//
// ----------TOUR MIỀN TRUNG-------------//
let imgMienTrung1 = [
  "New folder/tourmientrung1.jpg",
  "New folder/tourmientrung1-2.jpg",
  "New folder/tourmientrung1-3.jpg",
];
let imgMienTrung2 = [
  "New folder/tourmientrung2.jpg",
  "New folder/tourmientrung2-2.jpg",
  "New folder/tourmientrung2-3.jpg",
];
let imgMienTrung3 = [
  "New folder/tourmientrung3.jpg",
  "New folder/tourmientrung3-2.jpg",
  "New folder/tourmientrung3-3.jpg",
];
let img2 = 0;
changeImageMT = function () {
  document.getElementById("mienTrung1").src = imgMienTrung1[img2];
  document.getElementById("mienTrung2").src = imgMienTrung2[img2];
  document.getElementById("mienTrung3").src = imgMienTrung3[img2];
  img2++;
  if (img2 == 3) {
    img2 = 0;
  }
  setTimeout(changeImageMT, 4000);
};
// ----------TOUR MIỀN NAM-------------//
// ----------TOUR MIỀN NAM-------------//
let img3 = 0;
let imgMienNam1 = [
  "New folder/tourmiennam1.jpg",
  "New folder/tourmiennam1-2.jpg",
  "New folder/tourmiennam1-3.jpg",
];
let imgMienNam2 = [
  "New folder/tourmiennam2.jpg",
  "New folder/tourmiennam2-2.jpg",
  "New folder/tourmiennam2-3.jpg",
];
changeImageMN = function () {
  document.getElementById("mienNam1").src = imgMienNam1[img3];
  document.getElementById("mienNam2").src = imgMienNam2[img3];
  img3++;
  if (img3 == 3) {
    img3 = 0;
  }
  setTimeout(changeImageMN, 4000);
};
function startChange() {
  changeImage();
  changeImageMB();
  changeImageMT();
  changeImageMN();
}
startChange();
// Modal----------Nổi Bật 1----------------
let noibatModal1 = document.getElementById("nb-Modal1");
// Get the image and insert it inside the modal - use its "alt" text as a caption
let imgnoibat1 = document.getElementById("noiBat1");
let noibatModalImg1 = document.getElementById("imgnb1");
imgnoibat1.onclick = function () {
  noibatModal1.style.display = "block";
  noibatModalImg1.src = this.src;
};
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
// When the user clicks on <span> (x), close the modal;
span1.onclick = function () {
  noibatModal1.style.display = "none";
};
// Modal----------Nổi Bật 2----------------
let noibatModal2 = document.getElementById("nb-Modal2");
let imgnoibat2 = document.getElementById("noiBat2");
let imgbatModalImg2 = document.getElementById("imgnb2");
let span2 = document.getElementsByClassName("close2")[0];
imgnoibat2.onclick = function () {
  noibatModal2.style.display = "block";
  imgbatModalImg2.src = this.src;
};
span2.onclick = function () {
  noibatModal2.style.display = "none";
};
// // Modal----------Nổi Bật 3----------------
let noibatModal3 = document.getElementById("nb-Modal3");
let imgnoibat3 = document.getElementById("noiBat3");
let imgbatModalImg3 = document.getElementById("imgnb3");
let span3 = document.getElementsByClassName("close3")[0];
imgnoibat3.onclick = function () {
  noibatModal3.style.display = "block";
  imgbatModalImg3.src = this.src;
};
span3.onclick = function () {
  noibatModal3.style.display = "none";
};
