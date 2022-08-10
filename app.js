const highlightNavbar = () => {
    const navbar = document.querySelector(".nav")
    let scrollPos = window.scrollY

    if (window.innerWidth > 960 && scrollPos > 0) {
        navbar.style.backgroundColor="white"
    }
}

window.addEventListener('scroll', highlightNavbar);