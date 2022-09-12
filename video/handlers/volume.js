//TODO

// remember volume settings when toggling
export const addVolumeEventListeners = (video) => {
  const volumeProgress = document.getElementById('progress-volume-bar');
  let changingVolume = false;

  volumeProgress.addEventListener('mousedown', () => {
    changingVolume = true;
  });

  window.addEventListener('mouseup', () => {
    changingVolume = false;
  });

  handleVolumeProgressBar(video, volumeProgress, event, changingVolume);
  handleMute(video);
};

function handleVolumeProgressBar(video, volumeProgress, event, changingVolume) {
  volumeProgress.addEventListener('mousemove', (event) => {
    handleVolumeEventListeners(video, volumeProgress, event, changingVolume);
  });

  volumeProgress.addEventListener('click', (event) => {
    handleVolumeEventListeners(video, volumeProgress, event);
  });

  volumeProgress.addEventListener('mouseleave', () => {
    volumeProgress.classList.toggle('hidden')
  })
}

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
  const dotPosition = percentPosition > 90 ? '90' : percentPosition

  volumeProgress.querySelector('progress').style.setProperty('--progress-top', dotPosition + '%');
  video.volume = 0.9 - percentPosition / 100 < 0 ? 0 : (0.9 - percentPosition / 100) + 0.19;

  sessionStorage.setItem('video-volume', video.volume);
  sessionStorage.setItem('video-volume-dot', dotPosition);

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
    const settingsContainer = document.getElementById('settings-container');
    settingsContainer.classList.add('hidden');

    video.muted = !video.muted;
    video.volume = sessionStorage.getItem('video-volume') || video.muted ? 0 : 1;

    setProgressStyles(video);
    toggleMuteIcon(mute);
  });

  const progressDiv = document.querySelector('#progress-volume-bar');
  mute.addEventListener('mouseenter', () => {
    progressDiv.classList.remove('hidden');
  })

  mute.addEventListener('mouseleave', () => {
    progressDiv.classList.add('hidden');
  })
  progressDiv.addEventListener('mouseenter', () => {
    progressDiv.classList.remove('hidden');
  })

  progressDiv.addEventListener('mouseleave', () => {
    progressDiv.classList.add('hidden');
  })
}

function toggleMuteIcon(mute) {
  mute.children[0].classList.toggle('hidden');
  mute.children[1].classList.toggle('hidden');
}

function setProgressStyles(video) {
  const progress = document.querySelector('#progress-volume-bar progress');
  const progressDotPosition = video.muted ? '90%' : sessionStorage.getItem('video-volume-dot') + '%';

  progress.style.setProperty('--progress-top', progressDotPosition);
}
