import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);
const MEMORY_TIME = "videoplayer-current-time";
const savedTime = localStorage.getItem(MEMORY_TIME) || 0;
player.setCurrentTime(savedTime);
const saveTime = function (data) {
    localStorage.setItem(MEMORY_TIME, data.seconds);

};
const throttleTime = throttle(saveTime, 1000)

player.on('timeupdate', throttleTime);


