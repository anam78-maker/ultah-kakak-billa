const music = document.getElementById('bg-music');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');

// Tombol Play
playBtn.addEventListener('click', () => {
  music.play();
});

// Tombol Pause
pauseBtn.addEventListener('click', () => {
  music.pause();
});

// Optional: autoplay saat halaman dibuka (beberapa browser mungkin butuh klik user)
window.addEventListener('load', () => {
  music.play().catch(() => {
    console.log('Autoplay diblokir, klik tombol play untuk mendengarkan musik.');
  });
});
