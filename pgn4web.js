
/* Minimal PGN4web loader (stubbed for this demo) */
document.addEventListener("DOMContentLoaded", function() {
  const el = document.querySelector(".pgn");
  fetch(el.dataset.pgn)
    .then(r => r.text())
    .then(text => {
      el.innerText = "Game Loaded:\n" + text;
    })
    .catch(() => {
      el.innerText = "Failed to load PGN.";
    });
});
