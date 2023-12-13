//@Author- David Maduike Modified Proffesor Talmage original.
function setup() {
  createCanvas(600, 600); // Increased canvas size
  background(102, 153, 255); // Changed initial background color
}

function draw() {
  if (mouseIsPressed) {
    fill(255, 0, 0); // Change fill color when mouse is pressed
    stroke(255, 204, 0); // Change stroke color when mouse is pressed
    ellipse(mouseX, mouseY, 100, 100); // Increased ellipse size
  } else {
    fill(0, 255, 0); // Change fill color when mouse is not pressed
    noStroke(); // Remove stroke when mouse is not pressed
    ellipse(mouseX, mouseY, 50, 50); // Decreased ellipse size
  }
}

function mousePressed() {
  background(255, 204, 102); // Change background color on canvas click
  textSize(30); // Change text size
  fill(0); // Change text color
  text("Canvas Clicked!", 200, 300); // Display a different message
}
