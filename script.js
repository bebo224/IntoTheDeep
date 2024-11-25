
function updateDepth() {
    // Get the depth display element
    const depthDisplay = document.getElementById('depthDisplay');

    // Calculate depth based on scroll position
    // You can adjust the divisor to change the sensitivity of the depth change
    const depth = Math.max(0, Math.floor(window.scrollY / 40)); // Adjust divisor as needed

    // Update the depth display
    depthDisplay.textContent = `Depth: ${depth}m`;
}
window.addEventListener('scroll', updateDepth);


