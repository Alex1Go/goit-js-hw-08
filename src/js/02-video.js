import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(data) {
    const time = data.seconds;
    localStorage.setItem(TIME_KEY, time)   
};
const currentTime = localStorage.getItem(TIME_KEY);
if (currentTime) {
    player.setCurrentTime(currentTime); 
}
      