export const addVolumeEventListeners = (video) => {
  const volumeProgress = document.getElementById('progress-volume-bar');
  let changingVolume = false;

  volumeProgress.addEventListener('mousedown', () => {
    changingVolume = true;
  });

  window.addEventListener('mouseup', () => {
    changingVolume = false;
  });

  volumeProgress.addEventListener('mousemove', (event) => {
    handleVolumeEventListeners(video, volumeProgress, event, changingVolume);
  });

  volumeProgress.addEventListener('click', (event) => {
    handleVolumeEventListeners(video, volumeProgress, event);
  });

  handleMute(video);
};

function handleVolumeEventListeners(video, volumeProgress, event, changingVolume) {
  const volumeeMesurements = volumeProgress.getBoundingClientRect();

  if (event.type === 'mousemove' && changingVolume) {
    if (event.x > volumeeMesurements.left && event.x < volumeeMesurements.right &&
        event.y > volumeeMesurements.top + 9 && event.y < volumeeMesurements.bottom - 10) {
      handleVolume(video, volumeProgress, event);
    }
  }
  if (event.type === 'click' ) {
    handleVolume(video, volumeProgress, event);
  }
}

function handleVolume(video, volumeProgress, event) {
  const mute = document.getElementById('mute');
  const pos = event.y - volumeProgress.getBoundingClientRect().top;
  const volumeeMesurements = volumeProgress.getBoundingClientRect();
  const percentPosition = pos / volumeeMesurements.height * 100;

  volumeProgress.querySelector('progress').style.setProperty('--progress-top', percentPosition + '%');
  video.volume = 0.9 - percentPosition / 100;

  sessionStorage.setItem('video-volume', video.volume);

  videoUnmuted(video, mute);
  if (video.volume < 0.1) {
    toggleMuteIcon(mute);
    video.volume = 0;
  }
}

function videoUnmuted(video, mute) {
  video.muted = false;
  mute.children[0].classList.remove('hidden');
  mute.children[1].classList.add('hidden');
}

function handleMute(video) {
  const mute = document.getElementById('mute');

  mute.addEventListener('click', function() {
    video.volume = sessionStorage.getItem('video-volume');
    video.muted = !video.muted;
    setProgressStyles(video);
    toggleMuteIcon(mute);
  });
}

function toggleMuteIcon(mute) {
  mute.children[0].classList.toggle('hidden');
  mute.children[1].classList.toggle('hidden');
}

function setProgressStyles(video) {
  const progressDiv = document.querySelector('#progress-volume-bar');
  const progress = document.querySelector('#progress-volume-bar progress');
  const progressDotPosition = video.muted ? '90%' : '10';

  progress.style.setProperty('--progress-top', progressDotPosition);
  progressDiv.classList.toggle('hidden');
}
