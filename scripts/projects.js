document.addEventListener('DOMContentLoaded', () => {
    fetch('/scripts/projects-data.json')
        .then(response => response.json())
        .then(data => {
            const projectCards = document.querySelectorAll('.project-card');

            projectCards.forEach((card, index) => {
                const projectData = data[index];
                const showMoreButton = card.querySelector('.show-more');
                
                // Add event listener to show/hide slideshow container
                let isExpanded = false;

                showMoreButton.addEventListener('click', () => {
                    isExpanded = !isExpanded;
                    if (isExpanded) {
                        showSlideshow(projectData);
                        showMoreButton.textContent = 'Close';
                    } else {
                        hideSlideshow();
                        showMoreButton.textContent = 'Show More';
                    }
                });

                // Function to show slideshow
                function showSlideshow(projectData) {
                    const slideshowContainer = document.createElement('div');
                    slideshowContainer.className = 'slideshow-container';

                    projectData.images.forEach(image => {
                        const imageElement = document.createElement('img');
                        imageElement.src = image;
                        imageElement.className = 'slideshow-image';
                        slideshowContainer.appendChild(imageElement);
                    });

                    const descriptionElement = document.createElement('div');
                    descriptionElement.className = 'slideshow-description';
                    descriptionElement.textContent = projectData.description;
                    slideshowContainer.appendChild(descriptionElement);

                    card.appendChild(slideshowContainer);
                }

                // Function to hide slideshow
                function hideSlideshow() {
                    const slideshowContainer = card.querySelector('.slideshow-container');
                    if (slideshowContainer) {
                        slideshowContainer.remove();
                    }
                }

                // Slideshow functionality
                setInterval(() => {
                    const image = card.querySelector('.slideshow-image');
                    const description = card.querySelector('.slideshow-description');

                    if (image && description) {
                        image.src = projectData.images[0]; // Show first image initially
                        description.textContent = projectData.description;

                        // You can add more complex slideshow logic here if needed
                    }
                }, 5000); 
            });
        })
        .catch(error => console.error('Error:', error));
});
