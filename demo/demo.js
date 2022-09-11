import { createCustomVideo } from '../video.js';

const config = {
  properties: {
    src: 'https://cdn.21.co.uk/images/test/live-casino/lightning-roulette.mp4'
  },
  styles: {
    width: '50%'
  }
}

createCustomVideo(config, document.body)
