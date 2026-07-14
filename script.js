// ============================================
// Mobile Menu Toggle
// ============================================

const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    menuBtn.innerHTML = navbar.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

// Close menu when clicking a nav link
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// ============================================
// Sticky Navbar
// ============================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 50);
});

// ============================================
// Active Navigation Link
// ============================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ============================================
// Typing Effect
// ============================================

const typingText = document.getElementById("typing");

const words = [
    "Transform Your Life",
    "Become Stronger",
    "Stay Healthy",
    "Train Like a Champion"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent = currentWord.substring(0, charIndex++);
    } else {

        typingText.textContent = currentWord.substring(0, charIndex--);

    }

    if (!deleting && charIndex === currentWord.length + 1) {

        deleting = true;

        setTimeout(typeEffect, 1200);

        return;
    }

    if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

// ============================================
// Scroll Reveal Animation
// ============================================

const revealElements = document.querySelectorAll(
    ".about, .card, .feature-box, .contact, .home-content, .home-image"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

revealElements.forEach(el => el.classList.add("reveal"));

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ============================================
// Back To Top Button
// ============================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ============================================
// Contact Form Validation
// ============================================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill in all fields.");

        return;

    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;

    }

    alert("Message sent successfully!");

    form.reset();

});

// ============================================
// Button Ripple Effect
// ============================================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        ripple.style.width = ripple.style.height = diameter + "px";

        ripple.style.left =
            e.clientX - this.getBoundingClientRect().left - diameter / 2 + "px";

        ripple.style.top =
            e.clientY - this.getBoundingClientRect().top - diameter / 2 + "px";

        ripple.classList.add("ripple");

        const oldRipple = this.querySelector(".ripple");

        if (oldRipple) {

            oldRipple.remove();

        }

        this.appendChild(ripple);

    });

});

// ============================================
// Smooth Fade In on Page Load
// ============================================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});