const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('bg-white','shadow');
    } else {
        navbar.classList.remove('bg-white','shadow');
    }
};