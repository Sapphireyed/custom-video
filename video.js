import css from './video.css';
import videohtml from './video.html';
import { addFullScreenHandlers } from './handlers/fullscreen';
import { addVolumeEventListeners } from './handlers/volume.js';
import { addPlayPauseEventListeners } from './handlers/playpause.js';
import { setProgressBar } from './handlers/progress.js';
import { setTimelines } from './handlers/timelines.js';
import { isMobile } from './utils.js';

export const createCustomVideo = (config) => {
  if (!isVideoSupported()) return '';

  const videoContainer = document.getElementById('videoContainer');
  const video = document.getElementById('video');

  if (document.addEventListener) {
    insertStyles();
    hideDefaultControls(video);
    hideFullScreenIfNotSupported();

    setProgressBar(video);
    setTimelines(video);

    addPlayPauseEventListeners(video);
    addVolumeEventListeners(video);
    addFullScreenHandlers(videoContainer, video);
  }

  customConfig(config);
  return videohtml.replace('VIDEO_SRC', config.properties.src);
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
  var fullscreen = document.getElementById('fs');
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

function customConfig(config) {
  const videoContainer = document.getElementById('videoContainer');

  handleCustomStyles(config, videoContainer);
  handleCustomProperties(config, videoContainer);
  handleCustomButtons(config, videoContainer);
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
        videoContainer.querySelector(`#${button}`).classList.add('hidden');
      }
    });
  }
}
