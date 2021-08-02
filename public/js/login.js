
const login = document.getElementById("a-login-in");
const signup = document.getElementById('a-sign-up');
const formParent = document.querySelector('.form-parent');


login.addEventListener('click', ()=> {
    console.log(login)
    formParent.style.transform = "translateY(-50%)";
    console.log(login)
    // formParent.classList.add("log");
})

signup.addEventListener('click', ()=> {
    console.log(signup)
    formParent.style.transform = "translateY(0)";
    console.log(signup)
    // formParent.classList.remove("log");
})