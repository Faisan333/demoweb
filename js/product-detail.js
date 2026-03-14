const img = document.getElementById("mainImage");
const zoom = document.getElementById("zoomView");

function setZoom(){
zoom.style.backgroundImage = `url(${img.src})`;
zoom.style.backgroundSize = "300%";
}

setZoom();

img.addEventListener("mousemove", function(e){

zoom.style.display="block";

let rect = img.getBoundingClientRect();

let x = ((e.clientX - rect.left) / rect.width) * 100;
let y = ((e.clientY - rect.top) / rect.height) * 100;

zoom.style.backgroundPosition = x + "% " + y + "%";

});

img.addEventListener("mouseleave", function(){
zoom.style.display="none";
});

function changeImage(el){
img.src = el.src;
setZoom();
}
let startX = 0;

img.addEventListener("touchstart", function(e){
  startX = e.touches[0].clientX;
});

img.addEventListener("touchend", function(e){
  let endX = e.changedTouches[0].clientX;
  if(endX - startX > 50){ // swipe right
    showPrevImage();
  } else if(startX - endX > 50){ // swipe left
    showNextImage();
  }
});

function showPrevImage(){
  const thumbs = document.querySelectorAll(".product-thumbs img");
  let currentIndex = Array.from(thumbs).findIndex(t => t.src === img.src);
  let prevIndex = currentIndex > 0 ? currentIndex - 1 : thumbs.length - 1;
  changeImage(thumbs[prevIndex]);
}

function showNextImage(){
  const thumbs = document.querySelectorAll(".product-thumbs img");
  let currentIndex = Array.from(thumbs).findIndex(t => t.src === img.src);
  let nextIndex = currentIndex < thumbs.length - 1 ? currentIndex + 1 : 0;
  changeImage(thumbs[nextIndex]);
}
const qtyInput = document.querySelector(".qty-input");
const btnPlus = document.querySelector(".qty-btn.plus");
const btnMinus = document.querySelector(".qty-btn.minus");

btnPlus.addEventListener("click", () => {
    qtyInput.value = parseInt(qtyInput.value) + 1;
});

btnMinus.addEventListener("click", () => {
    if(parseInt(qtyInput.value) > 1){
        qtyInput.value = parseInt(qtyInput.value) - 1;
    }
});
