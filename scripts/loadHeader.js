document.addEventListener("DOMContentLoaded", function() {
    fetch('../components/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            setActiveNavItem();
        });
});

function setActiveNavItem() {
    const currentPath = window.location.pathname;
    console.log('Current Path:', currentPath);
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        console.log('Link Href:', link.getAttribute('href'));
        if (link.getAttribute('href') === currentPath.slice(1)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
