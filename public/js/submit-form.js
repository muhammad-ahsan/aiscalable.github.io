window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      
      emailjs.sendForm("gmail", "template_IsdzWbAL_clone", this).then(
        function (response) {
          let inputs = document.querySelectorAll(["input", "textarea"]);
          inputs.forEach((input) => (input.value = ""));
          document.getElementById('cf-response').innerText = 'Your message is successfully sent. Our team will contact you soon.';     
        },
        function (error) {
          document.getElementById('cf-response').innerText = 'Ooops! your message cannot be sent. Please try later.'
        }
      );
    });
};
