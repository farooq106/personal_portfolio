let arrowRight = document.querySelector('.box .navigation .arrow-right');
let arrowLeft = document.querySelector('.box .navigation .arrow-left');
let navBar = document.querySelector('header nav');
let menu = document.querySelector('#sandwich-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-xmark');
    navBar.classList.toggle('active');
});



const navLinks = document.querySelectorAll('header nav a');

// Function to handle the active view (clicking a link)
const handleActiveView = (clickedLink) => {
    navLinks.forEach(link => link.classList.remove('selected'));
    clickedLink.classList.add('selected');
};

// Event listener for each nav link
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        handleActiveView(link);
        window.location.href = link.href;  // Navigate after updating the view
    });
});

// Set the selected link when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;  // Get the current page's path
    navLinks.forEach(link => link.classList.toggle('selected', link.pathname === currentPath));
});






let idx = 0;
const totalImages = document.querySelectorAll('.portfolio-image-list-picture').length;

let portfolio = () => {
    let imageList = document.querySelector('.portfolio-image .portfolio-image-list');
    let imageDetails = document.querySelectorAll('.portfolio-list');

    // Move the image list
    imageList.style.transform = `translateX(calc(${idx * -100}% - ${idx * 2}rem))`;

    // Update active class for details
    imageDetails.forEach(d => {
        d.classList.remove('show');
    });
    imageDetails[idx]?.classList.add('show');
};


arrowRight.addEventListener('click', () => {

    if (idx < 4) {
        idx++;
        arrowLeft.classList.remove('stop');
    }
    else {
        idx === 5;
    }

    if (idx === 4) {
        arrowRight.classList.add('stop');
    }

    portfolio();
});

arrowLeft.addEventListener('click', () => {
    if (idx >= 1) {
        idx--; // Decrement index until the first slide
        arrowRight.classList.remove('stop'); // Enable right arrow
    }
    if (idx === 0) {
        arrowLeft.classList.add('stop');
    }

    portfolio();
});



//this for animation to my images
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".portfolio-image-list-picture");


    images.forEach((image, index) => {
        image.style.position = "relative";
        image.style.left = "-100vw";
        image.style.opacity = "0";
        setTimeout(() => {
            image.style.transition = "all 0.8s ease";
            image.style.left = "0";
            image.style.opacity = "1";
        }, index * 300); // 300ms delay for each image
    });

});

