var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".nav-link-box");
var navlink = document.querySelectorAll(".nav-lin");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("fa-bars")
    menu.classList.toggle("open-nav");
    hamburger.classList.toggle("fa-window-close")
    navlink.forEach(link => {
        link.classList.toggle("nav-link-in");
    });
    
});

// function isInViewport(el) {
//     var top = el.offsetTop;
//     var left = el.offsetLeft;
//     var width = el.offsetWidth;
//     var height = el.offsetHeight;
  
//     while(el.offsetParent) {
//       el = el.offsetParent;
//       top += el.offsetTop;
//       left += el.offsetLeft;
//     }
  
//     return (
//       top < (window.pageYOffset + window.innerHeight) &&
//       left < (window.pageXOffset + window.innerWidth) &&
//       (top + height) > window.pageYOffset &&
//       (left + width) > window.pageXOffset
//     );
//   }

// // function isInViewport2(el) {
// //     const rect = el.getBoundingClientRect();
// //     return (
// //         rect.top >= -50 &&
// //         rect.left >= 0 &&
// //         rect.bottom <= (document.documentElement.clientHeight + 50) &&
// //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)

// //     );
// // }



    


// const message = document.querySelector('#message');

// document.addEventListener('scroll', function () {
//     cards.forEach(card => {
//         const btnBoxes = document.querySelectorAll('.btn-card-cont');
//         console.log(isInViewport(card))
//         if (isInViewport(card)) {
//             const box = card.getElementsByClassName("btn-card-cont");
//             box[0].classList.add("btn-card-up");
//             // card..forEach(this.box => {
//             //     box.classList.add("btn-card-up")
//             // });
            
//         } else {
//             btnBoxes.forEach(box => {
//                 box.classList.remove("btn-card-up")
//             });
//         }
//     });
    
//     // const messageText = isInViewport(box) ?
//     //     'The box is visible in the viewport' :
//     //     'The box is not visible in the viewport';
        

//     // message.textContent = messageText;

// }, {
//     passive: true
// });



