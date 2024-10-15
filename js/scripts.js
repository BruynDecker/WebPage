/*!
* Start Bootstrap - Clean Blog v6.0.3 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/

//This just filters the projects based on the category selected
function filterProjects(category, button) {
    const projects = document.querySelectorAll('.project-description');

    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    projects.forEach(project => {
        if (category === 'all') {
            project.style.display = 'block';
        } else if (project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

function toggleReadMore(element) {
    // Find the closest parent with the class 'project-description'
    const projectDescription = element.closest('.project-description');
    // Within this parent, find the '.more-text' div
    const moreText = projectDescription.querySelector('.more-text');

    // Check if '.more-text' is visible
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block"; // Show the '.more-text' content
        element.textContent = "Read Less";
    } else {
        moreText.style.display = "none"; // Hide the '.more-text' content
        element.textContent = "Read More";
    }
}


window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})
