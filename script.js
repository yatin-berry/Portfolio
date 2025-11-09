document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
    this.reset();
});
