// Step 1: Select the button and body element
const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

// Step 2: Add a click event listener to the button
toggleBtn.addEventListener("click", function() {
  // Step 3: Toggle the dark-mode class on the body
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  // Step 4: Change button text based on current mode
  if(body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Switch to Light Mode";
  } else {
    toggleBtn.textContent = "Switch to Dark Mode";
  }
});
