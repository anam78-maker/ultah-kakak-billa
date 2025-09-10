// Confetti simple effect
const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let particles = [];

function randomColor() {
  const colors = ["#fce38a", "#f38181", "#a6c1ee", "#fbc2eb", "#ffdde1"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createConfetti() {
  const x = Math.random() * confettiCanvas.width;
  const y = Math.random() * confettiCanvas.height - confettiCanvas.height;
  const size = Math.random() * 8 + 4;
  const speed = Math.random() * 3 + 2;
  particles.push({ x, y, size, speed, color: randomColor() });
}

function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  particles.forEach((p, i) => {
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
    p.y += p.speed;
    if (p.y > confettiCanvas.height) {
      particles.splice(i, 1);
    }
  });
}

function loop() {
  createConfetti();
  drawConfetti();
  requestAnimationFrame(loop);
}

loop();
