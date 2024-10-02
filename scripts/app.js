document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#navigation a');
    const contentDiv = document.getElementById('content');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href').slice(1);
            fetch(`/pages/${href}.html`)
                .then(response => response.text())
                .then(html => {
                    contentDiv.innerHTML = html;
                });
        });
    });

    // Initial load
    window.location.hash && fetch(`/pages/${window.location.hash.slice(1)}.html`)
        .then(response => response.text())
        .then(html => {
            contentDiv.innerHTML = html;
        });
});
