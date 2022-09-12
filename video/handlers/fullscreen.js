import { isMobile } from '../utils';

/* eslint-disable no-param-reassign */
export const addFullScreenHandlers = (videoContainer, video) => {
  var fullscreen = document.getElementById('fullscreen');

  fullscreen.addEventListener('click', function() {
    handleFullscreen(videoContainer);
  });

  if (!isMobile()) {
    video.addEventListener('click', () => {
      handleFullscreen(videoContainer);
    });
  }
};

function handleFullscreen(videoContainer) {
  let video = videoContainer.querySelector('video');
  const controls = videoContainer.querySelector('#video-controls');

  if (isFullScreen(videoContainer, video)) {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();

    setFullscreenData(videoContainer, false);
    controls.classList.remove('hidden');
  } else {
    if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
    else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
    else if (videoContainer.webkitRequestFullScreen) {
      video.webkitRequestFullScreen();
    } else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();

    setFullscreenData(videoContainer, true);
    controls.classList.add('hidden');
    showControlsIfActive(controls);
    hideControlsOnMouseAway(controls)
  }
}

function isFullScreen() {
  return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
}

function setFullscreenData(videoContainer, state) {
  videoContainer.setAttribute('data-fullscreen', !!state);
}

function showControlsIfActive(controls) {
  window.addEventListener('mousemove', () => {
    controls.classList.remove('hidden');
    let idleTimer = 0;
    hideControlsIfIdle(controls, idleTimer);
  });
}

function hideControlsIfIdle(controls, idleTimer) {
  const checkIfIdle = setInterval(() => {
    idleTimer++;
    if (idleTimer >= 4) {
      controls.classList.add('hidden');
      clearInterval(checkIfIdle);
    }
  }, 1000);

  window.addEventListener('mousemove', () => {
    clearInterval(checkIfIdle);
  }, true);

  return checkIfIdle;
}

function hideControlsOnMouseAway(controls) {
  let videoContainer = document.querySelector('#videoContainer');

  videoContainer.addEventListener('mouseleave', () => {
    console.log('fsdgfsd')
    controls.classList.add('hidden');
  },);
}
