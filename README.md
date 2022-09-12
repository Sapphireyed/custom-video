# custom-video
Create a custom video player where you can hide or show chosen controls, decide on colors of background as well as icons, decide on icons themselves by providing icon you want to be displayed and more

1. import createCustomVideo from node modules video.js;
   import { createCustomVideo } from 'path to video.js'
2. create config object with obligatory src property set. Other proerties are optional.
   const config = { properties: { src: 'src to video'} }
3. call createCustomVideo function passing config object as 1st mandatory argument
4. 2nd argument of createCustomVideo function is optional - and it decides at the beginning of which node your video will be inserted. Default - document.body

Available configurations:

const videoConfig = {
  properties: {
    src: htmlData.VIDEO_SRC,
    autoplay: false,
    muted: false,
    loop: false,
    nocontrols: false,
    bigPlay: false,
    type: 'video/mp4'
  },
  styles: {
    width: '100%',
    height: '100%',
    bgColor: '#7c52ff',
    fontColor: '#fff'
  },
  buttons: {
    playpause: true,
    timeElapsed: true,
    duration: true,
    progress: true,
    mute: true,
    settings: true
    fullscreen: true
  },
  buttonsIcons: {
    playpause: false,
    timeElapsed: false,
    duration: false,
    progress: false,
    mute: false,
    settings: false,
    fullscreen: false
  }
};
