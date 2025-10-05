//your JS code here. If required.
// your JS code here. If required.
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const output = document.getElementById("output");

// Function that returns a Promise that resolves after 'ms' milliseconds
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Async function to handle the button click
async function showMessage() {
  const message = textInput.value;
  const delayTime = Number(delayInput.value);

  // Wait for the specified delay
  await delay(delayTime);

  // Display the message after delay
  output.textContent = message;
}

// Attach click event listener to button
button.addEventListener("click", showMessage);
