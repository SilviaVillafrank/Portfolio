import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();


window.addEventListener('DOMContentLoaded', event => {
    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const icon = menuToggle.querySelector("i"); // Prendo l'icona dentro il pulsante

    function toggleMenu() {
        sidebarWrapper.classList.toggle('active');
        menuToggle.classList.toggle('active');
        _toggleMenuIcon();
    }

    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        toggleMenu();
    });

    menuClose.addEventListener('click', event => {
        event.preventDefault();
        toggleMenu();
    });

    document.addEventListener('click', event => {
        if (!sidebarWrapper.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        }
    });

    function _toggleMenuIcon() {
        if (sidebarWrapper.classList.contains("active")) {
            menuToggle.setAttribute("style","display:none")
            //icon.classList.remove("fa-bars");
            //icon.classList.add("fa-times");  Cambia in "X"
        } else {
           // icon.classList.remove("fa-times");
           
           menuToggle.setAttribute("style","display:block")
            //icon.classList.add("fa-bars"); // Torna a "☰"
        }
    }
});






