
(function () {
  emailjs.init("S5uNuqfCCLANObzq8"); // Ersätt med din public key
})();
document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();

  document.getElementById("loadingMessage").style.display = "block"; // Visa spinner
  document.getElementById("bookingForm").style.display = "none";     // Dölj formuläret

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    phone: document.getElementById("phone").value,
    service: document.getElementById("service").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value
  };

  // Skicka till företaget
  emailjs.send("service_lic5y1s", "template_0wldx3d", params)
    .then(() => {
      // Skicka bekräftelse till kund
      return emailjs.send("service_lic5y1s", "template_p4ch3fa", params);
    })
    .then(() => {
      document.getElementById("loadingMessage").style.display = "none";
      document.getElementById("confirmationMessage").style.display = "block";
    })
    .catch((error) => {
      console.error("Fel vid skickande:", error);
      alert("Något gick fel. Försök igen.");
      document.getElementById("bookingForm").style.display = "block";
      document.getElementById("loadingMessage").style.display = "none";
    });
});
// header content toogle
document.addEventListener('DOMContentLoaded', function () {
  const heroContent = document.querySelector('.hero-content');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      heroContent.classList.add('hide-on-scroll');
    } else {
      heroContent.classList.remove('hide-on-scroll');
    }
  });
});
