document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Project cards generation (you'll need to populate this data)
    const projectsSection = document.getElementById('projects');
    const projectCards = [
        { title: 'Project 1', description: 'Description 1', link: '#' },
        { title: 'Project 2', description: 'Description 2', link: '#' },
        { title: 'Project 3', description: 'Description 3', link: '#' },
    ];

    projectCards.forEach(project => {
        const card = document.createElement('div');
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="project-link">View Project</a>
        `;
        card.className = 'project-card';
        projectsSection.appendChild(card);
    });

    // Add styles for project cards
    const style = document.createElement('style');
    style.textContent = `
        .project-card {
            background-color: white;
            border-radius: 5px;
            padding: 1rem;
            margin-bottom: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        
        .project-link {
            display: inline-block;
            background-color: #333;
            color: white;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            margin-top: 10px;
        }
    `;
    document.head.appendChild(style);
});
