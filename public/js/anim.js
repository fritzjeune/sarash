
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("slide");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 6000); // Change image every 2 seconds
// }


$(document).ready(function(){
  $(".owl-two").owlCarousel({
    loop:true,
    margin:20,
    autoplay:false,
    autoplayTimeout:1000,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            dots:true,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:false
        }
    }
  });
});


$(document).ready(function(){
  $(".owl-tree").owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            dots:true,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:false
        }
    }
  });
});

$(document).ready(function(){
  $(".owl-four").owlCarousel({
    loop:true,
    items:1,
    margin:20,
    autoplay:true,
    autoplayTimeout:5000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed:450
  });
});









