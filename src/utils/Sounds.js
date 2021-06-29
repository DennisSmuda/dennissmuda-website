import { Howl } from "howler";

var clickSound = new Howl({
  src: ["zipclick.flac"],
  volume: 0.8,
});

function playClick() {
  clickSound.play();
}

export { playClick };
