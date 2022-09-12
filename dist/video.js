(function() {
  'use strict';

  /* video/video.css */
  var css_248z =
    ':root{--bgColor:#3c3c3c;--bgSecondary:rgba(20,20,20,0.6);--bgHover:rgba(0,0,0,0.8);--fontColor:#fff;--width:100%;--height:100%}progress{--progress-left:0;--progress-top:10px}figure{max-width:100%;max-height:100%;margin:0;width:var(--width);height:var(--height)}video{width:100%;height:auto}figure#video-container video{background-color:transparent;border:none;width:100%;height:auto}.hidden{display:none!important}#video-overlay{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:1}.controls,.controls li{padding:0 5px;margin:0;color:var(--fontColor)}.controls{display:flex;align-items:center;justify-content:space-between;position:relative;list-style-type:none;background:var(--bgColor);height:25px;color:var(--fontColor);font-size:12px;padding:0 10px;margin-top:-4px;z-index:2}.controls li{float:left;margin-left:.3%;cursor:pointer}.controls button,.controls time{display:flex;align-items:center;justify-content:center}svg{fill:#fff}.stop{display:none}.controls .progress{position:relative;width:100%;cursor:pointer}.controls button{width:100%;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;background-color:transparent;border:none;color:var(--fontColor);cursor:pointer}.controls progress{display:block;width:100%;height:20px;height:1.1rem;padding:.5rem 0;margin-top:.125rem;overflow:hidden;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px}.controls progress:before{content:"";position:absolute;background-color:#fff;width:6px!important;height:6px!important;top:50%;top:var(--progress-top);left:var(--progress-left);transform:translateY(-45%);border-radius:50%;display:inline-block;box-shadow:0 0 4px #fff}progress::-webkit-progress-value{background:#fff}.mute{position:relative}#progress-volume-bar{position:absolute;width:30px;height:100px;bottom:20.5px;padding:0;background:var(--bgSecondary);z-index:1}.mute progress{width:2px;height:100%;margin:0 auto;padding:10px 0}.mute progress:before{position:absolute;top:var(--progress-top);left:50%;transform:translateX(-55%)}#settings #settings-container{position:absolute;bottom:25px;background-color:var(--bgSecondary);display:flex;flex-direction:column;right:0;width:18%}#settings-container p{margin:5%}#settings-container div{border-bottom:1px solid hsla(0,0%,100%,.15)}#settings div ul{display:flex;flex-direction:column;justify-content:left;align-items:start;list-style-type:none;margin:0;padding:0;overflow:hidden}#settings p{display:flex;justify-content:space-between;padding:0 10%}#settings div ul li{width:100%;height:25px;display:flex;align-items:center;justify-content:left;padding-left:25%;letter-spacing:1.5px}#settings div ul li:hover{background-color:var(--bgHover)}html:-ms-fullscreen{width:100%}:-webkit-full-screen{background-color:transparent}figure[data-fullscreen=true] video::-webkit-media-controls{display:none!important}figure[data-fullscreen=true]{max-width:100%;width:100%;margin:0;padding:0}figure[data-fullscreen=true] video{height:auto}figure[data-fullscreen=true] figcaption{display:none}figure[data-fullscreen=true] .controls{position:absolute;bottom:2%;width:100%;z-index:2147483647}figure[data-fullscreen=true] .controls li{width:5%}figure[data-fullscreen=true] .controls .progress{width:68%}';

  /* video/video.html */
  var videohtml =
    '<figure id="videoContainer" data-fullscreen="false"> <div id="video-overlay" class="hidden"></div> <video id="video" controls playsinline preload="metadata"> <source src="VIDEO_SRC" type="video/mp4"> <!-- Flash fallback --> <object type="application/x-shockwave-flash" data="flash-player.swf?videoUrl=video/tears-of-steel-battle-clip-medium.mp4" width="1024" height="576"> <param name="movie" value="flash-player.swf?videoUrl=https://cdn.21.co.uk/images/test/live-casino/lightning-roulette.mp4"> <param name="allowfullscreen" value="true"> <param name="wmode" value="transparent"> </object> </video> <div id="video-controls" class="controls"> <li clsss="\'playpause"> <button id="playpause" type="button"> <svg id="play" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg> <svg id="pause" class="hidden" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"/></svg> </button> </li> <li class="time"> <time id="time-elapsed" class="timeElapsed">00:00</time> <time id="duration" class="duration"> / 00:00</time> </li> <li class="stop"><button id="stop" type="button">Stop</button></li> <li class="progress"> <progress id="progress" value="0" min="0"></progress> </li> <li class="mute"> <div id="progress-volume-bar" class="hidden"><progress id="progress-volume" value="0" min="0"></progress></div> <button id="mute" type="button"> <svg id="unmuted" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M6 7l8-5v20l-8-5v-10zm-6 10h4v-10h-4v10zm20.264-13.264l-1.497 1.497c1.847 1.783 2.983 4.157 2.983 6.767 0 2.61-1.135 4.984-2.983 6.766l1.498 1.498c2.305-2.153 3.735-5.055 3.735-8.264s-1.43-6.11-3.736-8.264zm-.489 8.264c0-2.084-.915-3.967-2.384-5.391l-1.503 1.503c1.011 1.049 1.637 2.401 1.637 3.888 0 1.488-.623 2.841-1.634 3.891l1.503 1.503c1.468-1.424 2.381-3.309 2.381-5.394z"/></svg> <svg id="muted" class="hidden" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M19 7.358v15.642l-8-5v-.785l8-9.857zm3-6.094l-1.548-1.264-3.446 4.247-6.006 3.753v3.646l-2 2.464v-6.11h-4v10h.843l-3.843 4.736 1.548 1.264 18.452-22.736z"/></svg> </button> </li> <li class="settings"> <button id="settings" type="button"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 13.616v-3.232l-2.869-1.02c-.198-.687-.472-1.342-.811-1.955l1.308-2.751-2.285-2.285-2.751 1.307c-.613-.339-1.269-.613-1.955-.811l-1.021-2.869h-3.232l-1.021 2.869c-.686.198-1.342.471-1.955.811l-2.751-1.308-2.285 2.285 1.308 2.752c-.339.613-.614 1.268-.811 1.955l-2.869 1.02v3.232l2.869 1.02c.197.687.472 1.342.811 1.955l-1.308 2.751 2.285 2.286 2.751-1.308c.613.339 1.269.613 1.955.811l1.021 2.869h3.232l1.021-2.869c.687-.198 1.342-.472 1.955-.811l2.751 1.308 2.285-2.286-1.308-2.751c.339-.613.613-1.268.811-1.955l2.869-1.02zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg> <div id="settings-container" class="hidden"> <div> <p><span>Speed</span><span>1x</span></p> <ul id="settings-speed"> <li><span>0.5x</span></li> <li><span>0.75x</span></li> <li><span>1x</span></li> <li><span>1.25x</span></li> <li><span>1.5x</span></li> <li><span>1.75x</span></li> <li><span>2x</span></li> </ul> </div> <div> <p><span>Quality</span><span>auto</span></p> <ul id="settings-quality" class="hidden"> <li><span>auto</span></li> <li><span>224p</span></li> <li><span>360p</span></li> <li><span>540p</span></li> <li><span>720p</span></li> <li><span>1080p</span></li> </ul> </div> </div> </button> </li> <!-- <li class=\'volup\'><button id="volinc" type="button">Vol+</button></li>\n    <li class=\'volup\'><button id="voldec" type="button">Vol-</button></li> --> <li class="fullscreen"> <button id="fullscreen" type="button"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 9h-2v-4h-4v-2h6v6zm-6 12v-2h4v-4h2v6h-6zm-18-6h2v4h4v2h-6v-6zm6-12v2h-4v4h-2v-6h6zm14 4h-16v10h16v-10z"/></svg> </button> </li> </div> </figure> ';

  /* video/utils.js */
  var isMobile = function isMobile() {
    return window.innerWidth < 767;
  };

  /* video/handlers/fullscreen.js */
  /* eslint-disable no-param-reassign */

  var addFullScreenHandlers = function addFullScreenHandlers(
    videoContainer,
    video
  ) {
    var fullscreen = document.getElementById('fullscreen');
    fullscreen.addEventListener('click', function() {
      handleFullscreen(videoContainer);
    });

    if (!isMobile()) {
      video.addEventListener('click', function() {
        handleFullscreen(videoContainer);
      });
    }
  };

  function handleFullscreen(videoContainer) {
    var video = videoContainer.querySelector('video');
    var controls = videoContainer.querySelector('#video-controls');

    if (isFullScreen()) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitCancelFullScreen)
        document.webkitCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      setFullscreenData(videoContainer, false);
      controls.classList.remove('hidden');
    } else {
      if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
      else if (videoContainer.mozRequestFullScreen)
        videoContainer.mozRequestFullScreen();
      else if (videoContainer.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
      } else if (videoContainer.msRequestFullscreen)
        videoContainer.msRequestFullscreen();
      setFullscreenData(videoContainer, true);
      controls.classList.add('hidden');
      showControlsIfActive(controls);
      hideControlsOnMouseAway(controls);
    }
  }

  function isFullScreen() {
    return !!(
      document.fullScreen ||
      document.webkitIsFullScreen ||
      document.mozFullScreen ||
      document.msFullscreenElement ||
      document.fullscreenElement
    );
  }

  function setFullscreenData(videoContainer, state) {
    videoContainer.setAttribute('data-fullscreen', !!state);
  }

  function showControlsIfActive(controls) {
    window.addEventListener('mousemove', function() {
      controls.classList.remove('hidden');
      var idleTimer = 0;
      hideControlsIfIdle(controls, idleTimer);
    });
  }

  function hideControlsIfIdle(controls, idleTimer) {
    var checkIfIdle = setInterval(function() {
      idleTimer++;

      if (idleTimer >= 4) {
        controls.classList.add('hidden');
        clearInterval(checkIfIdle);
      }
    }, 1000);
    window.addEventListener(
      'mousemove',
      function() {
        clearInterval(checkIfIdle);
      },
      true
    );
    return checkIfIdle;
  }

  function hideControlsOnMouseAway(controls) {
    var videoContainer = document.querySelector('#videoContainer');
    videoContainer.addEventListener('mouseleave', function() {
      console.log('fsdgfsd');
      controls.classList.add('hidden');
    });
  }

  /* video/handlers/volume.js */
  //TODO
  // remember volume settings when toggling
  var addVolumeEventListeners = function addVolumeEventListeners(video) {
    var volumeProgress = document.getElementById('progress-volume-bar');
    var changingVolume = false;
    volumeProgress.addEventListener('mousedown', function() {
      changingVolume = true;
    });
    window.addEventListener('mouseup', function() {
      changingVolume = false;
    });
    handleVolumeProgressBar(video, volumeProgress, event, changingVolume);
    handleMute(video);
  };

  function handleVolumeProgressBar(
    video,
    volumeProgress,
    event,
    changingVolume
  ) {
    volumeProgress.addEventListener('mousemove', function(event) {
      handleVolumeEventListeners(video, volumeProgress, event, changingVolume);
    });
    volumeProgress.addEventListener('click', function(event) {
      handleVolumeEventListeners(video, volumeProgress, event);
    });
    volumeProgress.addEventListener('mouseleave', function() {
      volumeProgress.classList.toggle('hidden');
    });
  }

  function handleVolumeEventListeners(
    video,
    volumeProgress,
    event,
    changingVolume
  ) {
    var volumeeMesurements = volumeProgress.getBoundingClientRect();

    if (event.type === 'mousemove' && changingVolume) {
      if (
        event.x > volumeeMesurements.left &&
        event.x < volumeeMesurements.right &&
        event.y > volumeeMesurements.top + 9 &&
        event.y < volumeeMesurements.bottom - 10
      ) {
        handleVolume(video, volumeProgress, event);
      }
    }

    if (event.type === 'click') {
      handleVolume(video, volumeProgress, event);
    }
  }

  function handleVolume(video, volumeProgress, event) {
    var mute = document.getElementById('mute');
    var pos = event.y - volumeProgress.getBoundingClientRect().top;
    var volumeeMesurements = volumeProgress.getBoundingClientRect();
    var percentPosition = (pos / volumeeMesurements.height) * 100;
    var dotPosition = percentPosition > 90 ? '90' : percentPosition;
    volumeProgress
      .querySelector('progress')
      .style.setProperty('--progress-top', dotPosition + '%');
    video.volume =
      0.9 - percentPosition / 100 < 0 ? 0 : 0.9 - percentPosition / 100 + 0.19;
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
    var mute = document.getElementById('mute');
    mute.addEventListener('click', function() {
      var settingsContainer = document.getElementById('settings-container');
      settingsContainer.classList.add('hidden');
      video.muted = !video.muted;
      video.volume =
        sessionStorage.getItem('video-volume') || video.muted ? 0 : 1;
      setProgressStyles(video);
      toggleMuteIcon(mute);
    });
    var progressDiv = document.querySelector('#progress-volume-bar');
    mute.addEventListener('mouseenter', function() {
      progressDiv.classList.remove('hidden');
    });
    mute.addEventListener('mouseleave', function() {
      progressDiv.classList.add('hidden');
    });
    progressDiv.addEventListener('mouseenter', function() {
      progressDiv.classList.remove('hidden');
    });
    progressDiv.addEventListener('mouseleave', function() {
      progressDiv.classList.add('hidden');
    });
  }

  function toggleMuteIcon(mute) {
    mute.children[0].classList.toggle('hidden');
    mute.children[1].classList.toggle('hidden');
  }

  function setProgressStyles(video) {
    var progress = document.querySelector('#progress-volume-bar progress');
    var progressDotPosition = video.muted
      ? '90%'
      : sessionStorage.getItem('video-volume-dot') + '%';
    progress.style.setProperty('--progress-top', progressDotPosition);
  }

  /* video/handlers/playpause.js */
  var addPlayPauseEventListeners = function addPlayPauseEventListeners(video) {
    var playpause = document.getElementById('playpause');
    var volumeBar = document.getElementById('progress-volume-bar');
    playpause.addEventListener('click', function() {
      playpause.children[0].classList.toggle('hidden');
      playpause.children[1].classList.toggle('hidden');

      if (video.paused || video.ended) {
        video.play();
        volumeBar.classList.add('hidden');
      } else {
        video.pause();
      }
    });
  };

  /* video/handlers/progress.js */
  var setProgressBar = function setProgressBar(video) {
    var progress = document.getElementById('progress');
    setMaxProgress(video, progress);
    updateProgressOnPlay(video, progress);
    updateProgressOnClick(video, progress);
  };

  function setMaxProgress(video, progress) {
    video.addEventListener('loadedmetadata', function() {
      progress.setAttribute('max', video.duration);
    });
  }

  function updateProgressOnPlay(video, progress) {
    video.addEventListener('timeupdate', function() {
      if (!progress.getAttribute('max'))
        progress.setAttribute('max', video.duration);
      progress.value = video.currentTime;
      progress.style.setProperty(
        '--progress-left',
        Math.floor((video.currentTime / video.duration) * 100) + '%'
      );
    });
  }

  function updateProgressOnClick(video, progress) {
    progress.addEventListener('click', function(e) {
      var pos = e.pageX - this.getBoundingClientRect().left;
      var percentPosition = (pos / this.getBoundingClientRect().width) * 100;
      video.currentTime = (video.duration * percentPosition) / 100;
      progress.style.setProperty(
        '--progress-left',
        Math.floor((video.currentTime / video.duration) * 100) + '%'
      );
      video.play();
      document.getElementById('play').classList.add('hidden');
      document.getElementById('pause').classList.remove('hidden');
    });
  }

  /* video/handlers/settings.js */
  var addSettingsEventListeners = function addSettingsEventListeners(
    videoContainer
  ) {
    var speedButton = document.querySelector(
      '#settings-container div:first-child p'
    );
    var qualityButton = videoContainer.querySelector(
      '#settings-container div:nth-child(2) p'
    );
    toggleSettingsContainerOnClick();
    toggleSpeedQualityOnClick(speedButton, qualityButton);
    setSpeed();
    setQuality();
  };

  function toggleSettingsContainerOnClick() {
    var settingsContainer = document.getElementById('settings-container');
    var volumeContainer = document.getElementById('progress-volume-bar');
    var settingsButton = document.querySelector('#settings svg');
    settingsButton.addEventListener('click', function() {
      settingsContainer.classList.toggle('hidden');
      volumeContainer.classList.add('hidden');
    });
  }

  function toggleSpeedQualityOnClick(speedButton, qualityButton) {
    var speedList = document.querySelector('#settings-speed');
    var qualityList = videoContainer.querySelector('#settings-quality');
    [speedButton, qualityButton].forEach(function(button) {
      button.addEventListener('click', function() {
        speedList.classList.toggle('hidden');
        qualityList.classList.toggle('hidden');
      });
    });
  }

  function setSpeed() {
    var video = document.getElementById('video');
    var speedOptions = Array.from(
      document.querySelectorAll('#settings-speed li')
    );
    speedOptions.forEach(function(option) {
      option.addEventListener('click', function() {
        var speed = option.innerText;
        video.playbackRate = speed.replace('x', '');
        updateSpeedInfo(speed);
      });
    });
  }

  function updateSpeedInfo(speed) {
    var speedInfo = document.querySelector('#settings-speed')
      .previousElementSibling;
    speedInfo.querySelector('span:nth-child(2)').innerText = speed;
  }

  function setQuality() {
    var video = document.getElementById('video');
    var qualityOptions = Array.from(
      document.querySelectorAll('#settings-quality li')
    );
    qualityOptions.forEach(function(option) {
      option.addEventListener('click', function() {
        var quality = option.innerText;
        video.querySelector('source').setAttribute('label', quality);
        updateQualityInfo(quality);
      });
    });
  }

  function updateQualityInfo(quality) {
    var qualityInfo = document.querySelector('#settings-quality')
      .previousElementSibling;
    qualityInfo.querySelector('span:nth-child(2)').innerText = quality;
  }

  /* video/handlers/timelines.js */
  var setTimelines = function setTimelines(video) {
    var timeElapsed = document.getElementById('time-elapsed');
    var duration = document.getElementById('duration');
    video.addEventListener('loadedmetadata', function() {
      initializeVideo(video, duration);
    });
    video.addEventListener('timeupdate', function() {
      updateTimeElapsed(video, timeElapsed);
    });
  };

  function initializeVideo(video, duration) {
    var videoDuration = Math.round(video.duration);
    var time = formatTime(videoDuration);
    duration.innerText = ''.concat(time.minutes, ':').concat(time.seconds);
    duration.setAttribute(
      'datetime',
      ''.concat(time.minutes, 'm ').concat(time.seconds, 's')
    );
  }

  function updateTimeElapsed(video, timeElapsed) {
    var time = formatTime(Math.round(video.currentTime));
    timeElapsed.innerText = ''.concat(time.minutes, ':').concat(time.seconds);
    timeElapsed.setAttribute(
      'datetime',
      ''.concat(time.minutes, 'm ').concat(time.seconds, 's')
    );
  }

  function formatTime(timeInSeconds) {
    var result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);
    return {
      minutes: result.substr(3, 2),
      seconds: result.substr(6, 2),
    };
  }

  /* video/video.js */
  var createCustomVideo = function createCustomVideo(config) {
    var element =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : document.body;
    if (!isVideoSupported()) return '';
    element.insertAdjacentHTML(
      'afterbegin',
      videohtml.replace('VIDEO_SRC', config.properties.src)
    );
    var videoContainer = document.getElementById('videoContainer');
    var video = document.getElementById('video');

    if (document.addEventListener) {
      insertStyles();
      hideDefaultControls(video);
      hideFullScreenIfNotSupported(); // hideOrShowControls(videoContainer)

      setProgressBar(video);
      setTimelines(video);
      addPlayPauseEventListeners(video);
      addVolumeEventListeners(video);
      addFullScreenHandlers(videoContainer, video);
      addSettingsEventListeners(videoContainer);
    }

    customConfig(config);
  };

  function isVideoSupported() {
    return !!document.createElement('video').canPlayType;
  }

  function insertStyles() {
    var style = '<style>'.concat(css_248z, '</style>');
    var headChildren = document.head.children;
    headChildren[headChildren.length - 1].insertAdjacentHTML('afterend', style);
  }

  function hideDefaultControls(video) {
    video.controls = false;
  }

  function hideFullScreenIfNotSupported() {
    var fullscreen = document.getElementById('fullscreen');
    var fullScreenEnabled = !!(
      document.fullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled ||
      document.webkitSupportsFullscreen ||
      document.webkitFullscreenEnabled ||
      document.createElement('video').webkitRequestFullScreen
    );

    if (!fullScreenEnabled) {
      fullscreen.style.display = 'none';
    }
  }

  function customConfig(config) {
    var videoContainer = document.getElementById('videoContainer');
    handleCustomStyles(config, videoContainer);
    handleCustomProperties(config, videoContainer);
    handleCustomButtons(config, videoContainer);
    handleCustomIcons(config, videoContainer);
  }

  function handleCustomStyles(config, videoContainer) {
    if (config.styles) {
      Object.entries(config.styles).forEach(function(style) {
        videoContainer.style.setProperty('--'.concat(style[0]), style[1]);
      });
    }
  }

  function handleCustomProperties(config, videoContainer) {
    var video = document.getElementById('video');

    if (Object.entries(config.properties).length > 1) {
      Object.entries(config.properties).forEach(function(prop) {
        video[prop[0]] = prop[1];

        if (prop[0] === 'nocontrols' && prop[1] === true) {
          videoContainer
            .querySelector('#video-controls')
            .classList.add('hidden');
        }

        if (prop[0] === 'bigPlay' && prop[1] === true) {
          videoContainer
            .querySelector('#video-overlay')
            .classList.remove('hidden');
        }
      });
    }
  }

  function handleCustomButtons(config, videoContainer) {
    if (config.buttons) {
      Object.entries(config.buttons).forEach(function(button) {
        if (button[1] === false) {
          videoContainer
            .querySelector('#'.concat(button[0]))
            .classList.add('hidden');
        }
      });
    }
  }

  function handleCustomIcons(config, videoContainer) {
    if (config.buttonsIcons) {
      Object.entries(config.buttonsIcons).forEach(function(icon) {
        console.log(icon);

        if (icon[0]) {
          videoContainer.querySelector('#'.concat(icon[0])).innerHTML = icon[1];
        }
      });
    }
  }

  /* demo/demo.js */
  var config = {
    properties: {
      src:
        'https://cdn.21.co.uk/images/test/live-casino/lightning-roulette.mp4',
    },
    styles: {
      width: '50%',
    },
    buttons: {
      duration: false,
    },
    buttonsIcons: {
      fullscreen:
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M15 2h2v5h7v2h-9v-7zm9 13v2h-7v5h-2v-7h9zm-15 7h-2v-5h-7v-2h9v7zm-9-13v-2h7v-5h2v7h-9z"/></svg>',
    },
  };
  createCustomVideo(config);
})();
//# sourceURL=url://lc.test/video.js
