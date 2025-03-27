// Footer Year
document.getElementById("footer").textContent = new Date().getFullYear()

// Light/Dark mode toggle
const toggleButton = document.getElementById("toggle");
const toggleIcon = document.getElementById("toggle-icon");

toggleButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');

    setTimeout(() => {
        if (toggleIcon.classList.contains('bi-moon-stars-fill')) {
            toggleIcon.classList.replace('bi-moon-stars-fill', 'bi-sun');
        } else {
            toggleIcon.classList.replace('bi-sun', 'bi-moon-stars-fill');
        }
    }, 50);
})