export const addSettingsEventListeners = (videoContainer) => {
  const speedButton = document.querySelector('#settings-container div:first-child p');
  const qualityButton = videoContainer.querySelector('#settings-container div:nth-child(2) p');

  toggleSettingsContainerOnClick();
  toggleSpeedQualityOnClick(speedButton, qualityButton);
  setSpeed();
  setQuality();
}

function toggleSettingsContainerOnClick() {
  const settingsContainer = document.getElementById('settings-container');
  const settingsButton = document.querySelector('#settings svg')

  settingsButton.addEventListener('click', () => {
    settingsContainer.classList.toggle('hidden');
  });
}

function toggleSpeedQualityOnClick(speedButton, qualityButton) {
  const speedList = document.querySelector('#settings-speed');
  const qualityList = videoContainer.querySelector('#settings-quality');

  [speedButton, qualityButton].forEach(button => {
    button.addEventListener('click', () => {
      speedList.classList.toggle('hidden');
      qualityList.classList.toggle('hidden');
    })
  })
}

function setSpeed() {
  const video = document.getElementById('video');
  const speedOptions = Array.from(document.querySelectorAll('#settings-speed li'));

  speedOptions.forEach(option=> {
    option.addEventListener('click', () => {
      const speed = option.innerText;
      video.playbackRate = speed.replace('x', '');

      updateSpeedInfo(speed);
    })
  })
}

function updateSpeedInfo(speed) {
  const speedInfo = document.querySelector('#settings-speed').previousElementSibling;

  speedInfo.querySelector('span:nth-child(2)').innerText = speed;
}

function setQuality() {
  const video = document.getElementById('video');
  const qualityOptions = Array.from(document.querySelectorAll('#settings-quality li'));

  qualityOptions.forEach(option=> {
    option.addEventListener('click', () => {
      const quality = option.innerText;
      video.querySelector('source').setAttribute('label', quality)

      updateQualityInfo(quality);
    })
  })
}

function updateQualityInfo(quality) {
  const qualityInfo = document.querySelector('#settings-quality').previousElementSibling;

  qualityInfo.querySelector('span:nth-child(2)').innerText = quality;
}
