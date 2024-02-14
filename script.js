document.getElementById('noButton').addEventListener('mouseover', function() {
    // Reset the transform to trigger reflow
    this.style.transform = 'none';
    
    // Force a reflow to ensure the reset is processed
    void this.offsetWidth;

    const ratioX = 0.3; // 50% of the screen width
    const ratioY = 0.1; // 50% of the screen height

    const maxX = window.innerWidth * ratioX - this.clientWidth;
    const maxY = window.innerHeight * ratioY - this.clientHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    // Apply the new transformation
    this.style.transform = `translate(${x}px, ${y}px)`;
});
document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = 'yes.html'; // Redirects to the new page
});
// Function to generate a random number between min and max
function random(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a confetti particle
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = random(0, window.innerWidth) + 'px';
    confetti.style.animationDuration = random(1, 3) + 's'; // Randomize falling speed
    confetti.style.animationDelay = random(0, 5) + 's'; // Randomize start time
    document.getElementById('confettiContainer').appendChild(confetti);
    // Remove the confetti element after animation ends
    confetti.addEventListener('animationend', function() {
        confetti.remove();
    });
}

// Create confetti particles continuously
setInterval(createConfetti, 500);
// JavaScript to cycle through poems dynamically
let currentPoemIndex = 0;
const poems = document.querySelectorAll('.poem');

function showNextPoem() {
    poems[currentPoemIndex].style.display = 'none';
    currentPoemIndex = (currentPoemIndex + 1) % poems.length;
    poems[currentPoemIndex].style.display = 'block';
}

setInterval(showNextPoem, 5000); // Change poem every 5 seconds (5000 milliseconds)

