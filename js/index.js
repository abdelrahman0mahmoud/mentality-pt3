/*=====================Swiper================ */
var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 27,
    loop: true,
    centerSlide:'true',
    fade:'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints : {
        0:{
            slidesPerView: 1,
            initialSlide: 1,
        },
        520:{
            slidesPerView: 2,
        },
        950:{
            slidesPerView: 3,
        }
    },
  });


/*======================== toggle icon navbar ================================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

/*======================== scroll section active links ================================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*======================== sticky navbar ================================== */
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    /*======================== remove navbar ================================== */
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');

};


/*======================== scroll reveal ================================== */
ScrollReveal({
    // reset : true, //to reset it without reload
    distance : '80px',
    duration : 2000,
    delay : 200
});


ScrollReveal().reveal('.home-content , .heading ' , {origin: 'top'});
// ScrollReveal().reveal('.home-content h1, .heading' , {origin: 'left'});
// ScrollReveal().reveal('.home-content p  ' ,{origin: 'right'});


/*======================== typed js ================================== */
const typed = new Typed('.multiple-text', {
    strings: ['&lt;code&gt; Welcome in Mentality &lt;/code&gt;'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
    showCursor: true, // Optional: Hide the blinking cursor if desired
    contentType: 'html' // Set content type to 'html' to interpret HTML tags
});


/*======================== dark & light mode ================================== */
const light_dark_btn = document.querySelector('.light-dark-btn');
light_dark_btn.addEventListener('click' , function () {
    const current_mode = light_dark_btn.querySelector('p').textContent
    if(current_mode == "Light"){
        light_dark_btn.querySelector('p').textContent = "Dark";
    }
    else{
        light_dark_btn.querySelector('p').textContent = "Light";
    }
})


/*======================== Language changing ================================== */
//don't start with arabic design
//don't use words in tempate
//padding and margin is better for parent not child
//Use inlineblock instead of float
//RTL File is for Direction Only.
//Order of Calling css files : style.css before rtl.css
//some english words are longer in arabic : don't assign width
//bdi -> if i want to write arabic inside english direction


const language_btn = document.querySelector('.language-btn');
language_btn.addEventListener('click' , function () {
    const current_language = language_btn.textContent;
    if(current_language == "العربية"){
        language_btn.textContent = "English";
    }
    else{
        language_btn.textContent = "العربية";
    }

})





/*=============== prevent scrolling ====================*/
