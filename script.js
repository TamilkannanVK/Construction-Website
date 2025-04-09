// Image Slider
let slides = document.querySelectorAll(".slide");
let index = 0;
function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove("active");
    if (i === idx) slide.classList.add("active");
  });
}
function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}
showSlide(index);
setInterval(nextSlide, 3000);

// Gallery Lightbox
const galleryImgs = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

galleryImgs.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});