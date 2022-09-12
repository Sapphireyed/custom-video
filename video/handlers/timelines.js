export const setTimelines = (video) => {
  const timeElapsed = document.getElementById('time-elapsed');
  const duration = document.getElementById('duration');

  video.addEventListener('loadedmetadata', () => {
    initializeVideo(video, duration);
  });

  video.addEventListener('timeupdate', () => {
    updateTimeElapsed(video, timeElapsed);
  });
};

function initializeVideo(video, duration) {
  const videoDuration = Math.round(video.duration);
  const time = formatTime(videoDuration);
  duration.innerText = `${time.minutes}:${time.seconds}`;
  duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
}

function updateTimeElapsed(video, timeElapsed) {
  const time = formatTime(Math.round(video.currentTime));
  timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
  timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
}

function formatTime(timeInSeconds) {
  const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

  return {
    minutes: result.substr(3, 2),
    seconds: result.substr(6, 2),
  };
}
