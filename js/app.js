document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#quote-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const age = parseInt(document.querySelector("#age").value, 10);
        if (age < 18) {
            alert("You must be at least 18 years old to request a quote.");
        } else {
            alert("Thank you for your submission!");
        }
    });
});
