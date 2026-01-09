// ===== Dark Mode =====
const themeToggle = document.querySelector('.theme-toggle');

function setTheme(dark) {
  document.body.classList.toggle('dark', dark);
  localStorage.setItem('darkMode', dark);
}

const savedTheme = localStorage.getItem('darkMode');
if (savedTheme === null || savedTheme === 'true') setTheme(true);

themeToggle.addEventListener('click', () => {
  setTheme(!document.body.classList.contains('dark'));
});

// ===== Contact Form (Frontend Only) =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill all the fields.");
    return;
  }

  const subject = encodeURIComponent(`Portfolio Message from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  // MAILTO
  window.location.href = `mailto:yashyeole2121@gmail.com?subject=${subject}&body=${body}`;

  // POLITE ALERT
  alert("Thank you for reaching out! 😊\nI’ve received your message and will get back to you shortly.");

  contactForm.reset();
});
