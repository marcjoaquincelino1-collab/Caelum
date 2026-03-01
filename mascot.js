// Create mascot element
const mascot = document.createElement("img");
mascot.src = "mascot.png"; // replace with your mascot image
mascot.id = "mascot";
mascot.style.position = "fixed";
mascot.style.width = "80px";
mascot.style.height = "80px";
mascot.style.pointerEvents = "auto"; // allow clicks
mascot.style.zIndex = "1000";
mascot.style.transition = "transform 0.1s ease";
document.body.appendChild(mascot);

// Follow mouse
document.addEventListener("mousemove", (e) => {
    const offsetX = -40; // half mascot width
    const offsetY = -40; // half mascot height
    mascot.style.transform = `translate(${e.clientX + offsetX}px, ${e.clientY + offsetY}px)`;
});

// Click interaction
mascot.addEventListener("click", () => {
    alert("Hello! I am your AI mascot 🤖");
});