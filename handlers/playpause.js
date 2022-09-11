export const addPlayPauseEventListeners = (video) => {
  const playpause = document.getElementById('playpause');

  playpause.addEventListener('click', function() {
    playpause.children[0].classList.toggle('hidden');
    playpause.children[1].classList.toggle('hidden');

    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  });
};
