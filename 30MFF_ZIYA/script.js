//Slides scrolling


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

document.addEventListener('DOMContentLoaded', function() {
  const descriptions = document.querySelectorAll('.image-description');

  function checkScroll() {
      const triggerBottom = window.innerHeight / 5 * 4;

      descriptions.forEach(description => {
          const descriptionTop = description.getBoundingClientRect().top;

          if(descriptionTop < triggerBottom) {
              description.classList.add('visible');
          } else {
              description.classList.remove('visible');
          }
      });
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); 
});

