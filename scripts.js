document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent immediate navigation

            const targetUrl = link.getAttribute("href");

            // Add fade-out class
            document.body.classList.add("fade-out");

            // Wait for the animation to complete, then navigate
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 1000); // Match the duration of the fade-out animation
        });
    });
});

<script>
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('clock').textContent = timeString;
    }
    setInterval(updateClock, 1000); // Update every second
    updateClock(); // Initialize the clock immediately
</script>

<script>
function openModal(imageSrc, captionText) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    const caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imageSrc;
    caption.innerHTML = captionText;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
</script>

