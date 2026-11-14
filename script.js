/* =================================
   NOVA STUDIO JAVASCRIPT
================================= */

// Select the contact form
const contactForm = document.getElementById("contact-form");

// Select the feedback message
const formFeedback = document.getElementById("form-feedback");


// CONTACT FORM FUNCTIONALITY

contactForm.addEventListener("submit", function(event) {

    // Prevent the browser from reloading the page
    event.preventDefault();

    // Get the values entered by the visitor
    const visitorName = document.getElementById("name").value.trim();

    // Display a demonstration message
    formFeedback.textContent =
        `Thank you, ${visitorName}! Your form works in this demo. A real message has not been sent yet.`;

    // Clear the form
    contactForm.reset();

});


// CONSOLE MESSAGE

console.log("Welcome to Nova Studio!");

console.log("Nova Studio website loaded successfully.");
