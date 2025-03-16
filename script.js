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
    let audio = document.getElementById("audioPlayer");
    let source = document.getElementById("audioSource");
    let beforeBtn = document.getElementById("beforeBtn");
    let afterBtn = document.getElementById("afterBtn");

    function switchAudio(file) {
        source.src = file;
        audio.load(); // Reload the audio player with the new source
        audio.play(); // Auto-play the new file
    }

    beforeBtn.addEventListener("click", function () {
        switchAudio("dialogue_editing_before.wav");
    });

    afterBtn.addEventListener("click", function () {
        switchAudio("dialogue_editing_after.wav");
    });
});
