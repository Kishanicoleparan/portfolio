
/* FOR PROJECTS */
function showSection(sectionId, button) {

    // Hide all sections
    const sections =
        document.querySelectorAll(".portfolio-content");

    sections.forEach(section => {
        section.classList.remove("active-content");
    });


    // Show selected section
    document
        .getElementById(sectionId)
        .classList.add("active-content");


    // Remove active from all buttons
    const buttons =
        document.querySelectorAll(".tab-button");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });


    // Activate clicked button
    button.classList.add("active");

}
/* FOR CONTACT */

        const contactForm = document.getElementById("contact-form");
        const formStatus = document.getElementById("form-status");

        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            const emailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;
            window.location.href = `mailto:kishanicoleparan@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
            formStatus.textContent = "Opening your email app...";
        });
  