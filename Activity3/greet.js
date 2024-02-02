// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the necessary HTML elements
    const nameInput = document.getElementById('name');
    const greetButton = document.getElementById('greetButton');
    const greetingMessage = document.getElementById('greetingMessage');
  
    // Add an event listener to the "Greet" button
    greetButton.addEventListener('click', function () {
      // Get the value entered by the user in the input field
      const userName = nameInput.value;
  
      // Check if the user entered a name
      if (userName.trim() !== '') {
        // Display a personalized greeting message
        const greeting = `Hello, ${userName}! Welcome.`;
        greetingMessage.textContent = greeting;
      } else {
        // If the user didn't enter a name, display a default message
        greetingMessage.textContent = 'Please enter your name.';
      }
    });
  });
  