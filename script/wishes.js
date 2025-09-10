const messageEl = document.getElementById("message");

const message = `
10 September 2025. Happy Birthday, Billa! ✨
I’m so thankful for you and for everything you’ve brought into my life. You’re truly like a sister to me. I hope this year gives you peace of mind, smooth paths, and reasons to smile every single day. May your heart stay light, your worries fade, and your journey ahead be filled with ease and happiness.💖
`;

let i = 0;
function typeWriter() {
  if (i < message.length) {
    messageEl.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 50); // kecepatan ketik
  }
}

window.onload = typeWriter;
