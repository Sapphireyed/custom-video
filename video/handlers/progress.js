export const setProgressBar = (video) => {
  const progress = document.getElementById('progress');

  setMaxProgress(video, progress);
  updateProgressOnPlay(video, progress);
  updateProgressOnClick(video, progress);
};

function setMaxProgress(video, progress) {
  video.addEventListener('loadedmetadata', () => {
    progress.setAttribute('max', video.duration);
  });
}

function updateProgressOnPlay(video, progress) {
  video.addEventListener('timeupdate', function() {
    if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);

    progress.value = video.currentTime;
    progress.style.setProperty('--progress-left', Math.floor((video.currentTime / video.duration) * 100) + '%');
  });
}

function updateProgressOnClick(video, progress) {
  progress.addEventListener('click', function(e) {
    const pos = e.pageX - this.getBoundingClientRect().left;
    const percentPosition = pos / this.getBoundingClientRect().width * 100;

    video.currentTime = video.duration * percentPosition / 100;
    progress.style.setProperty('--progress-left', Math.floor((video.currentTime / video.duration) * 100) + '%');

    video.play();
    document.getElementById('play').classList.add('hidden');
    document.getElementById('pause').classList.remove('hidden');
  });
}
