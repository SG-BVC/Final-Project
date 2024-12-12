document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main > section');
    const body = document.body;

    const sectionBackgrounds = [
        'url("/Final-Project/img/Grass1.jpg")',
        'url("/Final-Project/img/Snow1.jpg")',
        'url("/Final-Project/img/Mower1.jpg")',
        'url("/Final-Project/img/Mower2.jpg")'
    ];

    const SCROLL_INTERVAL = 1000; // Change every 1000 pixels of scroll

    function changeBackground() {
        let scrollPosition = window.scrollY;
        let scrollDistance = Math.floor(scrollPosition / SCROLL_INTERVAL);

        // Determine which background to use based on the scroll distance
        if (scrollDistance < sectionBackgrounds.length) {
            body.style.backgroundImage = sectionBackgrounds[scrollDistance];
        }
    }

    window.addEventListener('scroll', changeBackground);
    changeBackground(); // Set initial background based on the current scroll position
});
