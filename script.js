// Select all section elements and navigation links
const sections = document.querySelectorAll("header, section");
const navLinks = document.querySelectorAll(".nav-link");

// Observer callback to handle active link updates
const observerCallback = (entries) => {
    let activeSection = null;
    let highestVisibility = 0;

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const visibility = entry.intersectionRatio;

            if (visibility > highestVisibility) {
                highestVisibility = visibility;
                activeSection = entry.target.id;
            }
        }
    });

    if (activeSection) {
        // Remove active class from all links
        navLinks.forEach((link) => link.classList.remove("text-indigo-400"));

        // Add active class to the most visible section's link
        const activeLink = document.querySelector(`.nav-link[data-link="${activeSection}"]`);
        if (activeLink) {
            activeLink.classList.add("text-indigo-400");
        }
    }
};

// Create an Intersection Observer instance
const observer = new IntersectionObserver(observerCallback, {
    root: null, // Observe within the viewport
    threshold: [0.1], // Ensures smoother section activation
    rootMargin: "-20% 0px -30% 0px", // Adjust for better timing
});

// Observe all sections
sections.forEach((section) => observer.observe(section));

// Handle manual clicks on navbar links
navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        const targetId = link.getAttribute("data-link");
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Smooth scrolling
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Adjust offset for fixed navbar
                behavior: "smooth",
            });

            // Wait for scroll to complete, then highlight link
            setTimeout(() => {
                navLinks.forEach((nav) => nav.classList.remove("text-indigo-400"));
                link.classList.add("text-indigo-400");
            }, 300); // Delay ensures smooth transition
        }
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const closeSidebar = document.getElementById("closeSidebar");
    const sidebarLinks = document.querySelectorAll("#sidebar a");

    // Open sidebar when hamburger is clicked
    hamburger.addEventListener("click", () => {
        sidebar.style.display = "block"; // Show the sidebar
    });

    // Close sidebar when close button is clicked
    closeSidebar.addEventListener("click", () => {
        sidebar.style.display = "none"; // Hide the sidebar                    
    });

    sidebarLinks.forEach(link => {
        link.addEventListener("click", () => {
            sidebar.style.display = "none"; // Hide the sidebar
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typed-text-1", {
        strings: ["", "Web Developer", "UI-UX Developer", "Programmer", "Tech Enthusiast"],
        typeSpeed: 50, // Speed of typing
        backSpeed: 50,  // Speed of backspacing
        startDelay: 500, // Delay before typing starts
        loop: true, // Repeats the animation
        showCursor: false, // Shows the typing cursor
        cursorChar: "|", // Cursor style
    });
});