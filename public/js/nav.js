

var hamburger = $(".hamburger");
var menu = $(".nav-link-box");
var navlink = $(".nav-lin");
var cardItemDress = $(".card-prod");
var expLink = $(".exp-links");


hamburger.on("click", function() {
    hamburger.toggleClass("fa-bars")
    menu.toggleClass("open-nav");
    hamburger.toggleClass("fa-window-close")
    navlink.each(function() {
        $(this).toggleClass("nav-link-in");
    });
    
});


expLink.each(function() {
  $(this).on("click", function() { 
    $(this).next().slideToggle();
  })
});


var clickItem = (uid) => {
  // console.log(uid.id);
  var url = `/articles/${uid.id}`
  // console.log(url);
  window.location= url;
}
