// --- GESTION MUSIQUE ---
window.addEventListener("DOMContentLoaded", () => {
  let music = document.getElementById("music");
  let playPromise = music.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      document.body.addEventListener("click", () => music.play(), { once: true });
    });
  }
});