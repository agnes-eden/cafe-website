        const modal = document.getElementById("contactModal");
        const contactLink = document.getElementById("contactLink");

        const closeButton = document.querySelector(".close-button");

        const contactForm = document.getElementById("contactForm");
        const submissionMessage = document.getElementById("submissionMessage");

        contactLink.addEventListener('click', function(event) {
            event.preventDefault();
            modal.style.display = "block";
        });
        closeButton.addEventListener('click', function() {
            modal.style.display = "none";
            submissionMessage.style.display = "none"; 
            contactForm.reset(); 
        });

        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                submissionMessage.style.display = "none";
                contactForm.reset();
            }
        });

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            console.log("Form submitted!");
            console.log("Name:", document.getElementById("name").value);
            console.log("Email:", document.getElementById("email").value);
            console.log("Phone:", document.getElementById("phone").value);
            console.log("Message:", document.getElementById("message").value);

            submissionMessage.style.display = "block";

            setTimeout(() => {
                contactForm.reset();
                submissionMessage.style.display = "none";
            }, 3000);
        });
  