export const addPlayPauseEventListeners = (video) => {
  const playpause = document.getElementById('playpause');
  const volumeBar = document.getElementById('progress-volume-bar');

  playpause.addEventListener('click', function() {
    playpause.children[0].classList.toggle('hidden');
    playpause.children[1].classList.toggle('hidden');

    if (video.paused || video.ended) {
      video.play();
      volumeBar.classList.add('hidden')
    } else {
      video.pause();
    }
  });
};
