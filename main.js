// Set the correct PIN code
const correctPin = '1234';

// Initialize the number of attempts and the start time
let numAttempts = 0;
let startTime = 0;

// Get the PIN input field and submit button
const pinInput = document.querySelector('#pin-input');
const submitBtn = document.querySelector('button[type="submit"]');

// Get the message element
const message = document.querySelector('#message');

// Add an event listener to the submit button
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Check if the user has made too many incorrect attempts
    if (numAttempts >= 5 && (Date.now() - startTime) <= 300000) {
        alert('You have exceeded the maximum number of attempts. Please try again later.');
        return;
    }
    
    // Get the user's input PIN code
    const userPin = pinInput.value;

    // Check if the entered code matches the correct code
    if (userPin === correctPin) {
        window.location.href = 'https://www.linkedin.com/in/touhidul77/'; // redirect to the webpage
    } else {
        numAttempts++; // increment the number of attempts
        if (numAttempts === 1) {
            startTime = Date.now(); // set the start time of the first attempt
        }
        alert('Incorrect PIN code. '+ numAttempts +' atempts used of 5');
        if (numAttempts >= 5) {
            alert('You have exceeded the maximum number of attempts. Please try again later.');
        }
    }
});
