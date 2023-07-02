/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtn = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close') 

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtn.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortafolio = mixitup(".work__container", {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkwork = document.querySelectorAll('.work__item')

function activework(){
    linkwork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkwork.forEach(l=> l.addEventListener('click', activework))

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('Id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link') 
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx bxs-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' :'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'bx bxs-moon' : 'bx bxs-sun'

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bxs-moon' ? 'add': 'remove'](iconTheme)
}

themeButton.addEventListener('click', ()=> {
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentTheme())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'Top',
    disstance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay: 700})
sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin: 'Botton'})
