const highlightNavbar = () => {
    const navbar = document.querySelector(".nav")
    const menuTabs = document.querySelector(".menu-tabs")
    let scrollPos = window.scrollY

    if (window.innerWidth > 960 && scrollPos > 0) {
        navbar.style.backgroundColor="white"
        menuTabs.style.color="black"
    } else {
        navbar.style.backgroundColor="transparent"
        menuTabs.style.color="white"
    }

    const parallaxCon = document.querySelector(".parallax-container")
    const swiper = document.querySelector(".swiper")

    parallaxCon.style.top = scrollPos * 0.5 + 'px';
    swiper.style.top = scrollPos * 0.7 + 'px';
}

window.addEventListener('scroll', highlightNavbar);
