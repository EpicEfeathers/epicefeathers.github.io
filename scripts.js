// Footer Year
document.getElementById("footer").textContent = new Date().getFullYear()

// Light/Dark mode toggle
const toggleButton = document.getElementById("toggle");
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
})

//body.classList.toggle('dark-mode');