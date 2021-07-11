/**
 * Simple Progress Steps
 * Give me some love 🍻🥰🙏
 * BTC ☕️ 33JUpeb1SodHSG9vf3U8bWjRbYdredJZQ2
 */

// Steps

const steps = document.querySelectorAll(".step")

// Progress bar

const bar = document.getElementById("bar")

// Buttons

const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")

// Current Step
let currentStep = 1

// Next button
nextButton.addEventListener("click", () => { // console.log("NEXT >>>")
    

    if (currentStep < steps.length) {
        
        // +1
        currentStep++;
        
        // Go forward
        updateProgress();
    }

});

// Prev Button
prevButton.addEventListener("click", () => {

    if (currentStep > 1) {

    // -1
    currentStep--;

    // Go backward
    updateProgress();

    }

});

// Update progress

function updateProgress() {

  // Update steps
  steps.forEach((step, index) => {
    
    if (index < currentStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

/**********************
    Update progress bar
    1 position = 0
    2 position = 33.3
    3 position = 66.6
    4 position = 100
 */
 
const progress = (currentStep - 1) / (steps.length - 1) * 100;
  
  bar.style.width = progress + "%" // console.log(progress)
  
// Buttons Control

if (currentStep == steps.length) {

    // If the step is equal to the maximum, I disable the Next button
    
        nextButton.disabled = true;
    
    } else if (currentStep == 1) {
    
        prevButton.disabled = true;
    
    } else {

        // If the focus is neither the first nor the last, I enable both
    
        prevButton.disabled = nextButton.disabled = false;
    }
}
