// mobile nav
$('#hamburger').on('click', function () {
    $('.mobile-nav').addClass('show');
    $('.overlay').addClass('active');
});

$('.close-nav').on('click', function () {
    $('.mobile-nav').removeClass('show');
    $('.overlay').removeClass('active');
});

$(".overlay").on("click", function () {
    $(".mobile-nav").removeClass("show");
    $('.overlay').removeClass('active');
});



// slider owl
$(".hero-slider-2").owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    autoplayTimeout: 9000,
    autoplay: true,
});
//  product owl
$('.product-owl').owlCarousel({
    loop: false,
    // margin:10,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        300: {
            items: 3
        },
        400: {
            items: 4
        },
        600: {
            items: 5
        },
        1000: {
            items: 6
        }
    }
})



// login js
const loginBtn = document.querySelector(".loginBtn"),
    registerBtn = document.querySelector(".registerBtn"),
    loginForm = document.querySelector(".login"),
    registerForm = document.querySelector(".register");



    
    //show login form
    if (loginBtn) {
        loginBtn.addEventListener('click', showLogin)
    }
    //show Register form
    if (registerBtn) {
        registerBtn.addEventListener('click', showRegister)
    }


    
//function show login form
function showLogin(e) {
    e.preventDefault()
    loginBtn.classList.add('active')
    loginBtn.classList.remove('deactive')
    registerBtn.classList.remove('active')
    registerBtn.classList.add('deactive')
    loginForm.classList.remove('d-none')
    registerForm.classList.add('d-none')
};
//function show Register form
function showRegister(e) {
    e.preventDefault()
    registerBtn.classList.add('active')
    registerBtn.classList.remove('deactive')
    loginBtn.classList.add('deactive')
    loginBtn.classList.remove('active')
    registerForm.classList.remove('d-none')
    loginForm.classList.add('d-none')
};