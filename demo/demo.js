import { createCustomVideo } from '../video/video.js';

const config = {
  properties: {
    src: 'https://cdn.21.co.uk/images/test/live-casino/lightning-roulette.mp4'
  },
  styles: {
    width: '50%'
  },
  buttons: {
    duration: false
  },
  buttonsIcons: {
    fullscreen: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M15 2h2v5h7v2h-9v-7zm9 13v2h-7v5h-2v-7h9zm-15 7h-2v-5h-7v-2h9v7zm-9-13v-2h7v-5h2v7h-9z"/></svg>'
  }
}

createCustomVideo(config)
