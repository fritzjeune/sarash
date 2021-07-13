var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".nav-link-box");
var navlink = document.querySelectorAll(".nav-lin");
var cardItemDress = document.querySelectorAll(".card-prod");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("fa-bars")
    menu.classList.toggle("open-nav");
    hamburger.classList.toggle("fa-window-close")
    navlink.forEach(link => {
        link.classList.toggle("nav-link-in");
    });
    
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}





