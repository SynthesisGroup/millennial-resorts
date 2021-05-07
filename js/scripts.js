
document.addEventListener('DOMContentLoaded', function() {
    // Declarations
    let body = document.querySelector('.preload')
    let nav = document.querySelector(".navbar")
    let navMenu = document.querySelector(".navbar-menu")
    let headerElement = document.getElementById('header')
    window.onscroll = () => { stickyHeader() }
    document.getElementById("year").innerHTML = new Date().getFullYear()

    // Header Fixed
    function stickyHeader() {
        if (window.pageYOffset > 0) {
            headerElement.classList.add('header-fixed')
        } else {
            headerElement.classList.remove('header-fixed');
        }
    }

    // Sidebar Drawer
    window.addEventListener("load", () => {
        document.body.classList.remove("preload");
    });

    document.querySelector('.sidebar-toggler').addEventListener("click", () => {
        nav.classList.add("nav-open");
        navMenu.style.display = 'block';
        body.classList.add('disabled-bodyscroll');
    });

    document.querySelector(".nav-overlay").addEventListener("click", () => {
        nav.classList.remove("nav-open");
        navMenu.style.display = 'none';
        body.classList.remove('disabled-bodyscroll');
    });

    // AOS Initialized
    AOS.init();

    // Banner Swiper
    let bannerSwiper = new Swiper('.swiper-banner', {
        spaceBetween: 30,
        effect: 'fade',
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    // Testimonials Swiper
    let testimonialsSwiper = new Swiper('.swiper-testimonials', {
        spaceBetween: 30,
        effect: 'fade',
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    // Gallery Swiper
    let swiper = new Swiper('.swiper-gallery', {
        slidesPerView: 1,
        spaceBetween: 5,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
    });
});