document.addEventListener('DOMContentLoaded', function() {
    var cursor = document.querySelector('.circle-cursor');

    // Function to update cursor position
    function updateCursorPosition(e) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    }

    // Initialize cursor position at the center of the viewport
    updateCursorPosition({ pageX: window.innerWidth / 2, pageY: window.innerHeight / 2 });

    // Update cursor position on mouse move
    document.addEventListener('mousemove', updateCursorPosition);

    // Update cursor position on window resize
    window.addEventListener('resize', function() {
        updateCursorPosition({ pageX: window.innerWidth / 2, pageY: window.innerHeight / 2 });
    });
})


document.addEventListener('DOMContentLoaded', function() {
    const fadeImg = document.getElementById('fadeImg');

    // Function to fade in the image
    function fadeInImage() {
        fadeImg.style.opacity = '1';
    }

    // Call the function after a short delay to trigger the fade-in effect
    setTimeout(fadeInImage, 100);
});