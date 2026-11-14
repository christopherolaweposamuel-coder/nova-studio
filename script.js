/* =================================
   NOVA STUDIO JAVASCRIPT
================================= */

// Select the contact form
const contactForm = document.getElementById("contact-form");

// Select the feedback message
const formFeedback = document.getElementById("form-feedback");

// Select the submit button
const submitButton = document.getElementById("submit-button");


// CONTACT FORM SUBMISSION

contactForm.addEventListener("submit", async function(event) {

    // Prevent the normal page reload
    event.preventDefault();

    // Prevent multiple submissions while sending
    submitButton.disabled = true;

    // Change button text
    submitButton.textContent = "Sending...";

    // Clear previous feedback
    formFeedback.textContent = "";
    formFeedback.className = "form-feedback";

    // Collect the form information
    const formData = new FormData(contactForm);

    try {

        // Send the information to Formspree
        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        // Read the server response
        const result = await response.json();

        // Check whether the submission succeeded
        if (response.ok) {

            formFeedback.textContent =
                "Thank you! Your message has been submitted successfully.";

            formFeedback.classList.add("success-message");

            // Clear the form after successful submission
            contactForm.reset();

        } else {

            // Display Formspree's validation message if available
            const errorMessage =
                result.errors?.map(error => error.message).join(", ");

            formFeedback.textContent =
                errorMessage ||
                "Sorry, your message could not be submitted. Please try again.";

            formFeedback.classList.add("error-message");

        }

    } catch (error) {

        // Handle connection or network errors
        formFeedback.textContent =
            "Connection error. Please check your internet and try again.";

        formFeedback.classList.add("error-message");

        console.error("Form submission error:", error);

    } finally {

        // Restore the button
        submitButton.disabled = false;

        submitButton.textContent = "Send Message ↗";

    }

});


// WEBSITE CONSOLE MESSAGE

console.log("Welcome to Nova Studio!");

console.log("Nova Studio website loaded successfully.");
