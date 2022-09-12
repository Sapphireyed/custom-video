import css from './video.css';
import videohtml from './video.html';
import { addFullScreenHandlers } from './handlers/fullscreen';
import { addVolumeEventListeners } from './handlers/volume.js';
import { addPlayPauseEventListeners } from './handlers/playpause.js';
import { setProgressBar } from './handlers/progress.js';
import { addSettingsEventListeners } from './handlers/settings.js';
import { setTimelines } from './handlers/timelines.js';

export const createCustomVideo = (config, element=document.body) => {
  if (!isVideoSupported()) return '';

  element.insertAdjacentHTML('afterbegin', videohtml.replace('VIDEO_SRC', config.properties.src));

  const videoContainer = document.getElementById('videoContainer');
  const video = document.getElementById('video');

  if (document.addEventListener) {
    insertStyles();
    hideDefaultControls(video);
    hideFullScreenIfNotSupported();
    // hideOrShowControls(videoContainer)

    setProgressBar(video);
    setTimelines(video);

    addPlayPauseEventListeners(video);
    addVolumeEventListeners(video);
    addFullScreenHandlers(videoContainer, video);
    addSettingsEventListeners(videoContainer)
  }

  customConfig(config);
};

function isVideoSupported() {
  return !!document.createElement('video').canPlayType;
}

function insertStyles() {
  const style = `<style>${css}</style>`;
  const headChildren = document.head.children;

  headChildren[headChildren.length - 1].insertAdjacentHTML('afterend', style);
}

function hideDefaultControls(video) {
  video.controls = false;
}

function hideFullScreenIfNotSupported() {
  var fullscreen = document.getElementById('fullscreen');
  var fullScreenEnabled = !!(document.fullscreenEnabled
    || document.mozFullScreenEnabled
    || document.msFullscreenEnabled
    || document.webkitSupportsFullscreen
    || document.webkitFullscreenEnabled
    || document.createElement('video').webkitRequestFullScreen);

  if (!fullScreenEnabled) {
    fullscreen.style.display = 'none';
  }
}

function hideOrShowControls(videoContainer) {
  const controls = document.querySelector('#videoContainer .controls')

  videoContainer.addEventListener('mouseleave', () => {
    if (isVideoPlaying()) {
      controls.classList.add('hidden');
    }
  });

  videoContainer.addEventListener('mouseenter', () => {
    controls.classList.remove('hidden');
  });
}

function isVideoPlaying() {
  let playButton = document.querySelector('#videoContainer #play');

  return playButton.classList.contains('hidden')
}

function customConfig(config) {
  const videoContainer = document.getElementById('videoContainer');

  handleCustomStyles(config, videoContainer);
  handleCustomProperties(config, videoContainer);
  handleCustomButtons(config, videoContainer);
  handleCustomIcons(config, videoContainer);
}

function handleCustomStyles(config, videoContainer) {
  if (config.styles) {
    Object.entries(config.styles).forEach(style => {
      videoContainer.style.setProperty(`--${style[0]}`, style[1]);
    });
  }
}

function handleCustomProperties(config, videoContainer) {
  const video = document.getElementById('video');

  if (Object.entries(config.properties).length > 1) {
    Object.entries(config.properties).forEach(prop => {
      video[prop[0]] = prop[1];

      if (prop[0] === 'nocontrols' && prop[1] === true) {
        videoContainer.querySelector('#video-controls').classList.add('hidden');
      }

      if (prop[0] === 'bigPlay' && prop[1] === true) {
        videoContainer.querySelector('#video-overlay').classList.remove('hidden');
      }
    });
  }
}

function handleCustomButtons(config, videoContainer) {
  if (config.buttons) {
    Object.entries(config.buttons).forEach(button => {
      if (button[1] === false) {
        videoContainer.querySelector(`#${button[0]}`).classList.add('hidden');
      }
    });
  }
}

function handleCustomIcons(config, videoContainer) {
  if (config.buttonsIcons) {
    Object.entries(config.buttonsIcons).forEach(icon => {
      console.log(icon)
      if (icon[0]) {
        videoContainer.querySelector(`#${icon[0]}`).innerHTML = icon[1];
      }
    });
  }
}
