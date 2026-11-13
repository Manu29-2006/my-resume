function submitForm(event) {

    event.preventDefault();

    document.getElementById("result").innerHTML =
    "Thank you! Your message has been submitted.";

    event.target.reset();
}