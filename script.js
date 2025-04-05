let lastScrollTop = 0; // To track last scroll position
const subheader = document.querySelector('.subheader'); // The subheader element

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Check if scrolling down
    if (currentScroll > lastScrollTop) {
        // Scrolling down, hide the subheader
        subheader.style.transform = 'translateY(-100%)'; // Slide up
    } else {
        // Scrolling up, show the subheader
        subheader.style.transform = 'translateY(0)'; // Slide down
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
});

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const anchorLinks = document.querySelectorAll('a[href^="#"]'); // All anchor links

    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute('href').substring(1); // Get the target section ID
            const targetElement = document.getElementById(targetId); // Find the target element
            const headerHeight = document.querySelector('.header-wrapper').offsetHeight; // Get header height
            const subheaderHeight = document.querySelector('.subheader').offsetHeight; // Get subheader height

            // Scroll to the target element, adding the combined height of header and subheader as an offset
            window.scrollTo({
                top: targetElement.offsetTop - (headerHeight + subheaderHeight), // Adjust for fixed header and subheader
                behavior: 'smooth' // Smooth scrolling
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const contactBtn = document.getElementById("contactBtn");
    const modal = document.getElementById("contactModal");
    const closeModal = document.querySelector(".close");

    // Open modal when Contact Me is clicked
    contactBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Close modal when the close button is clicked
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the content box
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
