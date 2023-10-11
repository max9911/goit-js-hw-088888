import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const sTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
const playOptions = {
  id: 236203659,
  width: 640,
  height: 360,
};

const player = new Player(iframe, playOptions);

player.setCurrentTime(sTime);

player.on('timeupdate', function (data) {
  const cTime = JSON.stringify(data.seconds);
  localStorage.setItem('videoplayer-current-time', cTime);
});
