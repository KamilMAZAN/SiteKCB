document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll("nav a");
    
    menuLinks.forEach(link => {
        link.addEventListener("click", scrollToSection);
    });
    
    function scrollToSection(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        }
    }
});