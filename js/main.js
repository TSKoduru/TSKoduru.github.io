/* =============== SKILLS/EDUCATION SWIPER =============== */
let swiper = new Swiper(".skills-container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
const toggleSkills = document.getElementById('skills-education-toggle')
/*=============== WORK MODAL ===============*/
const modalViews = document.querySelectorAll('.work-modal'),
      modalBtns = document.querySelectorAll('.work-button'),
      modalClose = document.querySelectorAll('.work-modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
    document.body.style.overflow = 'hidden'
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
            document.body.style.overflow = 'auto'
        })
    })
})
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work-container', {
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 400
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work-item')

function activeWork(){
    linkWork.forEach(i => i.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(i => i.addEventListener('click', activeWork))
/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2000,
    useDelay: 'onload',
    reset: true
})

sr.reveal('.home-data')
sr.reveal('.home-handle', {delay: 700})
sr.reveal('.home-social, .home-scroll', {delay: 900, origin: 'bottom'})
sr.reveal('.about-img, .about-data', {delay: 500, origin: 'left'})
//sr.reveal('.skills-container, .skills-img', {delay: 500, origin: 'right'})
sr.reveal('contact-card', {delay: 1500, origin: 'top'})

/*=============== 3D CARDS EFFECT ===============*/