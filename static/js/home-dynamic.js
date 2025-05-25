// home-dynamic.js
// Handles the animated cycling of the dynamic word in the left text block

document.addEventListener('DOMContentLoaded', function() {
    const dynamicWords = ["Developer", "Hiring manager", "Lecturer"];
    let dynamicIndex = 0;
    const dynamicSpan = document.querySelector('.home-left-dynamic');
    let animating = false;

    function animateOut(callback) {
        if (!dynamicSpan) return;
        dynamicSpan.classList.add('slide-out-top');
        setTimeout(() => {
            dynamicSpan.classList.remove('slide-out-top');
            if (callback) callback();
        }, 350);
    }

    function animateIn() {
        if (!dynamicSpan) return;
        dynamicSpan.classList.add('slide-in-top');
        setTimeout(() => {
            dynamicSpan.classList.remove('slide-in-top');
            animating = false;
        }, 350);
    }

    function updateDynamicWord() {
        if (animating) return;
        animating = true;
        animateOut(() => {
            dynamicSpan.textContent = dynamicWords[dynamicIndex];
            animateIn();
            dynamicIndex = (dynamicIndex + 1) % dynamicWords.length;
        });
    }

    // Initial word
    dynamicSpan.textContent = dynamicWords[dynamicIndex];
    dynamicIndex = (dynamicIndex + 1) % dynamicWords.length;
    setInterval(updateDynamicWord, 2000);
});
