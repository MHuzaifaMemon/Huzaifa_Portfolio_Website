/*toggle icon navbar*/ 
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}
/*Scroll section active link*/ 

let sections =document.querySelectorAll('section');
let newLinks =document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top => offset && top<offset+height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
        };
    });
    /*Sticky Navbar*/ 
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
    /*remove toggle icon and navbar*/ 
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};

// const sr = ScrollReveal({
//     duration: 1000, // Animation duration in milliseconds (default is 500)
//     reset: true // Reset reveal animations when elements are not in view
// });

// // Configuration for each section
// sr.reveal('.home-content', {
//     origin: 'top',
//     distance: '50px',
//     delay: 300,
//     easing: 'ease-in-out'
// });

// sr.reveal('.about-img, .about-content', {
//     origin: 'bottom',
//     distance: '50px',
//     delay: 300,
//     easing: 'ease-in-out'
// });

// sr.reveal('.services-box', {
//     origin: 'bottom',
//     distance: '50px',
//     delay: 300,
//     easing: 'ease-in-out'
// });

// sr.reveal('.portfolio-box', {
//     origin: 'bottom',
//     distance: '50px',
//     delay: 300,
//     easing: 'ease-in-out'
// });

// sr.reveal('.contact form, .footer-text', {
//     origin: 'bottom',
//     distance: '50px',
//     delay: 300,
//     easing: 'ease-in-out'
// });
// Initialize ScrollReveal with global settings
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: true // Reset animations when elements are not in view
});

// Reveal animations for specific elements
const sr = ScrollReveal();

sr.reveal('.home-content, .heading', { origin: 'top' });
sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
sr.reveal('.home-contact h1, .about-img', { origin: 'left' });
sr.reveal('.home-contact p, .about-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text',{
    strings: ['Web Developer','Web Designer','Programmer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});