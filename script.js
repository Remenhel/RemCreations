const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.getElementById('theme-toggle');

// Toggle nav on mobile
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Toggle light/dark mode
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Hide loader when page fully loads
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

//hero content
// Typing animation for hero section
const typedTextElement = document.getElementById("typed-text");
const words = ["awesome websites.", "beautiful designs.", "digital artworks.", "editing photos/videos."];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenWords = 1500;

function type() {
  if (wordIndex >= words.length) wordIndex = 0;
  currentWord = words[wordIndex];

  if (!isDeleting) {
    typedTextElement.textContent = currentWord.slice(0, letterIndex + 1);
    letterIndex++;

    if (letterIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenWords);
      return;
    }
  } else {
    typedTextElement.textContent = currentWord.slice(0, letterIndex - 1);
    letterIndex--;

    if (letterIndex === 0) {
      isDeleting = false;
      wordIndex++;
    }
  }
  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

// Start the typing animation after DOM loads
window.addEventListener("DOMContentLoaded", () => {
  if (typedTextElement) {
    type();
  }
});

//contact
fetch(apiEndpoint, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(formData)
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        responseMessage.innerHTML = `<p>${data.message}</p>`;
        responseMessage.classList.add("success", "show");

        setTimeout(() => {
            contactForm.reset();
            responseMessage.innerHTML = "";
            responseMessage.classList.remove("success", "show");
        }, 2000);
    })
    .catch(error => {
        console.error("Error:", error);
        responseMessage.innerHTML = `<p>Error submitting the form. Please try again later.</p>`;
        responseMessage.classList.add("error", "show");

        setTimeout(() => {
            responseMessage.innerHTML = "";
            responseMessage.classList.remove("error", "show");
        }, 3000);
    });

document.getElementById("contact").scrollIntoView();
