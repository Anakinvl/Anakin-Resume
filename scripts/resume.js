document.addEventListener('DOMContentLoaded', () => {
    const experienceArticles = document.querySelectorAll('.experiences article');
    
    experienceArticles.forEach(article => {
        const title = article.querySelector('h4');
        const content = article.querySelector('ul');
        
        title.addEventListener('click', () => {
            content.classList.toggle('expanded');
        });
        
        content.classList.remove('expanded');
    });
});
