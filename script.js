function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById('year').textContent = new Date().getFullYear();

AOS.init();

// Add click event listeners for social icons
document.querySelectorAll("#socials-container a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent immediate navigation

    const url = link.href; // Get the target URL
    const platform = link.querySelector("img").alt.split(" ")[1]; // Extract platform name (e.g., "LinkedIn")

    // Show a toast notification
    const toast = document.createElement("div");
    toast.className = "social-toast";
    toast.textContent = `Redirecting to ${platform}...`;
    document.body.appendChild(toast);

    // Add animation and remove toast
    setTimeout(() => {
      toast.classList.add("fade-out");
      setTimeout(() => toast.remove(), 500); // Remove toast after fade-out
    }, 1500);

    // Redirect after delay
    setTimeout(() => {
      window.open(url, "_blank");
    }, 1000);
  });
});