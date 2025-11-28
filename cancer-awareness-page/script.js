// Form Submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    alert(`Thank you, ${name}! Your message has been received.`);
    contactForm.reset();
});

// Quote API
async function fetchQuote() {
    const quoteDisplay = document.getElementById("quote-display");

    try {
        const response = await fetch("https://api.quotable.io/random");

        if (!response.ok) throw new Error("API Error");

        const data = await response.json();

        quoteDisplay.innerHTML = `"${data.content}"<br>— ${data.author}`;
    } catch (error) {
        quoteDisplay.textContent = "Stay strong. Keep fighting.";
    }
}

document.addEventListener("DOMContentLoaded", fetchQuote);
