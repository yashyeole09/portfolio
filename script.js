// script.js

/* --- Smooth Scrolling for Nav Links --- */
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* --- Scroll Progress Indicator --- */
const scrollIndicator = document.getElementById('scroll-indicator');

/* --- Animate Skill Bars on Scroll --- */
const skillCards = document.querySelectorAll('.skill-card');

function animateSkills() {
  skillCards.forEach(card => {
    const rect = card.getBoundingClientRect();  // Position relative to viewport
    const progress = card.querySelector('.skill-progress');
    const skillLevel = card.getAttribute('data-skill'); // e.g., "80" or "4/5"

    if (!progress || !skillLevel) return;

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      // Convert rating to percentage if given out of 5 or 10
      let percentage = skillLevel;
      if (skillLevel.includes('/')) {
        const [score, max] = skillLevel.split('/').map(Number);
        percentage = (score / max) * 100;
      }
      progress.style.width = percentage + "%"; // Animate the bar
    }
  });
}

/* --- Combined Scroll Event --- */
window.addEventListener('scroll', () => {
  // Scroll Indicator
  if (scrollIndicator) {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    scrollIndicator.style.width = scrollPercent + "%";
  }

  // Animate skill bars
  animateSkills();
});

// Run once on page load
animateSkills();

/* --- Handle Contact Form Submission --- */
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation (optional)
    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Show thank you message
    alert(`Thank you, ${name}! Your message has been received.\nWe will get back to you at ${email}.`);

    // Reset the form
    contactForm.reset();
  });
}
