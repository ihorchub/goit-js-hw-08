import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let timeInSeconds = 0;

function addToLocalStorage(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', throttle(addToLocalStorage, 1000));

try {
  const timeKey = JSON.parse(localStorage.getItem('videoplayer-current-time'));
  timeInSeconds = timeKey.seconds;
} catch (error) {
  console.error('Get state error: ', error.message);
} finally {
  player.setCurrentTime(timeInSeconds);
}
