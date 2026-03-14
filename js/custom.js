(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();


})()

document.querySelectorAll(".fs-product-card").forEach(card=>{
  let track = card.querySelector(".fs-slide-track");
  let images = track.querySelectorAll("img");
  let index = 0;
  let next = card.querySelector(".fs-next");
  let prev = card.querySelector(".fs-prev");

  next.addEventListener("click",()=>{
    index++;
    if(index >= images.length) index = 0;
    track.style.transform = "translateX(-"+index*100+"%)";
  });

  prev.addEventListener("click",()=>{
    index--;
    if(index < 0) index = images.length - 1;
    track.style.transform = "translateX(-"+index*100+"%)";
  });
});

const track = document.getElementById("reviewTrack");
let cards = Array.from(track.children);
let cardWidth = cards[0].offsetWidth + 20; // include margin
let index = 0;

// Clone cards for seamless loop
cards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
});

// Update card width on resize
window.addEventListener("resize", () => {
    cardWidth = cards[0].offsetWidth + 20;
});

// Slide function
function moveSlider() {
    track.style.transform = `translateX(${-index * cardWidth}px)`;
    track.style.transition = 'transform 0.5s ease-in-out';
}

// Auto slide every 3s
setInterval(() => {
    index++;
    if (index >= cards.length) {
        track.style.transition = 'none';
        index = 0;
        moveSlider();
        setTimeout(() => { track.style.transition = 'transform 0.5s ease-in-out'; index++; moveSlider(); }, 50);
    } else {
        moveSlider();
    }
}, 3000);

// Arrow controls
function nextReview() { index++; moveSlider(); }
function prevReview() { index--; if(index<0) index=cards.length-1; moveSlider(); }