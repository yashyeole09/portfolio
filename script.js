const themeToggle = document.querySelector('.theme-toggle');
function setTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  localStorage.setItem('darkMode', isDark);
}

setTheme(localStorage.getItem('darkMode') !== 'false');
themeToggle.addEventListener('click', () => {
  setTheme(!document.body.classList.contains('dark'));
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', e => {
  e.preventDefault();

  const name = contactForm.querySelector('#name').value.trim();
  const email = contactForm.querySelector('#email').value.trim();
  const message = contactForm.querySelector('#message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill all the fields.');
    return;
  }

  const mailtoLink =
    `mailto:yashyeole2121@gmail.com` +
    `?subject=${encodeURIComponent(`Portfolio Message from ${name}`)}` +
    `&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

  window.location.href = mailtoLink;

  alert(
    "Thank you for reaching out! 😊\n" +
    "I’ve received your message and will get back to you shortly."
  );
  contactForm.reset();
});
