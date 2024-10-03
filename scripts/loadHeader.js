document.addEventListener("DOMContentLoaded", function() {
    fetch('/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;

            // Highlight the current page link
            const currentPage = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                const linkPath = link.getAttribute('href').split('/').pop();
                if (linkPath === currentPage) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => console.error('Error loading header:', error));
});