const musicPlayer = document.querySelector('#music-player');
const discs = document.querySelectorAll('.disc');
let currentAudio = null;

discs.forEach(disc => {
  disc.addEventListener('click', () => {
    stopAllAudio();
    const discId = disc.getAttribute('id').substring(5);
    const audio = new Audio(`./music/${discId}.ogg`);
    audio.play();
    currentAudio = audio;
  });
});

function stopAllAudio() {
  const audios = document.querySelectorAll('audio');
  audios.forEach(audio => audio.pause());
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
}
