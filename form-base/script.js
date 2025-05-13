document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        console.log("User Name:", name);
        console.log("User Email:", email);
        console.log("User Message:", message);

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
        } else if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
        } else {
            alert("Thank you, " + name + "! Your message has been submitted.");
            console.log("Form submitted successfully!");
            form.reset();
        }
    });
});