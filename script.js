document.querySelectorAll('.highlightable').forEach(element => {
    element.addEventListener('click', () => {
        // Remove 'active' class from all elements
        document.querySelectorAll('.highlightable').forEach(el => el.classList.remove('active'));
        // Add 'active' class to the clicked element
        element.classList.add('active');
        // Play the short-circuit sound
        const sound = document.getElementById('shortCircuitSound');
        sound.currentTime = 0; // Rewind to start
        sound.play();
        // Remove the 'active' class after animation duration
        setTimeout(() => {
            element.classList.remove('active');
        }, 1500); // Duration matches the animation time
    });
});
////second functions///////////////
const square = document.getElementById('square');
const image = document.getElementById('bouncingImage');
//Parameters
let groundLevelPercentage = 19.5; // Initial ground level
const speed = 4; // Horizontal speed per frame
const bounceHeight = 30; // Maximum bounce height
let positionX = 0; // Initial horizontal position
let direction = 1; // 1 for right, -1 for left
let angle = 0; // Angle for sinwave
///////////////////////////////////////////////////////////////////////////////
// Update ground level just in the code not shown
groundSlider.addEventListener('input', (e) => {
    groundLevelPercentage = e.target.value;
});
function animate() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const squareWidth = square.offsetWidth;
    //horizontal position
    positionX += speed * direction;
    //direction if hitting viewport edges
    if (positionX + squareWidth >= viewportWidth || positionX <= 0) {
        direction *= -1;
    }
    //vertical bounce using sinwave
    const bounce = Math.abs(Math.sin(angle)) * bounceHeight;
    //ground level
    const groundLevel = (viewportHeight * groundLevelPercentage) / 100;
    //square position
    square.style.left = `${positionX}px`;
    square.style.top = `${groundLevel - bounce}px`;
    //angle for smooth animation
    angle += 0.09;
    if (angle >= Math.PI) {
        angle = 0; //Reset after a full bounce cycle
    }
    //Request next frame
    requestAnimationFrame(animate);
}
//Initialize position and start animation
function init() {
    positionX = (window.innerWidth - square.offsetWidth) / 2; // Start from center
    animate();
}
// Handle window resize
window.addEventListener('resize', () => {
    positionX = Math.min(positionX, window.innerWidth - square.offsetWidth);
});
// Start the animation after DOM content is loaded
document.addEventListener('DOMContentLoaded', init);
///////////////////////////////////////////////////////////////////////////
function alertbutton(){
    alert("You are currently on the main page bud!")
}
/////////////////
function alertbutton1(){
    alert("You are currently on my random page bud!")
}
////////////////////
//Another function but now tabs within the page////////
// Get the modal element
const modal = document.getElementById('modal');
// Get the button that opens the modal
const openModalButton = document.getElementById('openModalButton');
// Get the <span> element that closes the modal
const closeModalButton = document.getElementById('closeModal');
// When the user clicks the button, open the modal
openModalButton.onclick = function() {
    modal.style.display = 'block';
}
// When the user clicks on <span> (x), close the modal
closeModalButton.onclick = function() {
    modal.style.display = 'none';
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
///////////////////////////////////////////////////
