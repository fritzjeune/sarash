var chckoutbtn = $("#checkOutbtn");
var ctnSopping = $("#ctnSopping");
var billingSection = $("#billing-info");


chckoutbtn.on("click", ()=> {
    // billingSection.classList.toggle("show-payment");
    billingSection.slideToggle();
});

