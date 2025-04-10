const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuLinks = document.querySelector(".menu-links");
const closeButton = document.querySelector(".close-btn");

// Add event listener to the hamburger menu
hamburgerMenu.addEventListener("click", (event) => {
	// Check if the clicked element is the hamburger icon
	if (
		event.target.classList.contains("hamburger-icon") ||
		event.target.closest(".hamburger-icon")
	) {
		// Toggle the menu open/close
		menuLinks.classList.toggle("open");
		hamburgerMenu.classList.toggle("open");
	}
});

// Close the menu when a navigation link is clicked
menuLinks.addEventListener("click", (event) => {
	if (event.target.tagName === "A") {
		// Remove the 'open' class to close the menu
		menuLinks.classList.remove("open");
		hamburgerMenu.classList.remove("open");
	}
});

// Close the menu when the close button is clicked
closeButton.addEventListener("click", () => {
	menuLinks.classList.remove("open");
	hamburgerMenu.classList.remove("open");
});

// Typed.js functionality
const elem = document.getElementById("element");

const options = {
	strings: ["Full Stack Web Developer", "I Build Web Applications"],
	typeSpeed: 100,
	backSpeed: 100,
	loop: true,
};
const typed = new Typed(elem, options);

// Update footer copyright dynamically
document.querySelector(
	".footer_copy_right"
).innerHTML = `© ${new Date().getFullYear()} Ashish Singh All Rights Reserved`;

// Theme toggle functionality
const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;

// // Add event listener to the theme toggle button
// themeToggleButton.addEventListener("click", () => {
// 	// Toggle the 'dark-theme' class on the body
// 	body.classList.toggle("dark-theme");

// 	// Update the button text based on the current theme
// 	if (body.classList.contains("dark-theme")) {
// 		themeToggleButton.textContent = "Switch to Light Theme";
// 	} else {
// 		themeToggleButton.textContent = "Switch to Dark Theme";
// 	}
// });
