const assistant = document.getElementById("ai-assistant");
const chatBox = document.getElementById("chat-box");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");

/* Mascot Name (tiny nod to me) */
const mascotName = "Auris";

/* Desktop - follow cursor */
document.addEventListener("mousemove", (e) => {
    if (window.innerWidth > 768) {
        assistant.style.left = e.clientX + 15 + "px";
        assistant.style.top = e.clientY + 15 + "px";
    }
});

/* Mobile - follow touch */
document.addEventListener("touchmove", (e) => {
    if (window.innerWidth <= 768) {
        const touch = e.touches[0];
        assistant.style.left = touch.clientX + 10 + "px";
        assistant.style.top = touch.clientY + 10 + "px";
    }
});

/* Toggle Chat */
assistant.addEventListener("click", () => {
    chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";

    /* click animation */
    assistant.style.transform = "scale(1.2)";
    setTimeout(() => {
        assistant.style.transform = "scale(1)";
    }, 200);
});

/* Send Message */
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter" && input.value.trim() !== "") {

        let userBubble = document.createElement("div");
        userBubble.className = "bubble";
        userBubble.style.background = "#2e86de";
        userBubble.innerText = input.value;
        messages.appendChild(userBubble);

        input.value = "";
        messages.scrollTop = messages.scrollHeight;

        setTimeout(() => {
            let aiBubble = document.createElement("div");
            aiBubble.className = "bubble";
            aiBubble.innerText = randomAIMsg();
            messages.appendChild(aiBubble);
            messages.scrollTop = messages.scrollHeight;
        }, 800);
    }
});

/* Random friendly messages */
function randomAIMsg() {
    const msgs = [
        `Hi! I’m ${mascotName} ✨ How can I protect you today?`,
        "Analyzing your request securely... 🔐",
        "All systems safe and monitored! ✅",
        "Your data protection is my priority!",
        "Scanning for vulnerabilities… 🛡️"
    ];
    return msgs[Math.floor(Math.random() * msgs.length)];
}