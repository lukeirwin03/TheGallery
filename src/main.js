import k from "./kaboomContext.js";
import mainMenu from "./scenes/mainMenu.js";
import world from "./scenes/world.js";

k.loadFont("gameboy", "../game-assets/gb.ttf");
k.loadSprite("game-assets", "../game-assets/maps/sprites/src/new_gallery_sprites.png", {
  sliceX: 16,
  sliceY: 16,
  anims: {
    "player-idle-down": 119,
    "player-down": {
      from: 117,
      to: 118,
      loop: true,
      speed: 5,
    },
    "player-idle-side": 132,
    "player-side": {
      from: 133,
      to: 137,
      loop: true,
      speed: 6,
    },
    "player-idle-up": 103,
    "player-up": {
      from: 101,
      to: 102,
      loop: true,
      speed: 5,
    },
    "guide-idle-down": {
      from: 224,
      to: 225,
      loop: true,
      speed: 6,
    },
    "guide-idle-side": {
      from: 226,
      to: 227,
      loop: true,
      speed: 6,
    },
    "guide-idle-up": {
      from: 240,
      to: 241,
      loop: true,
      speed: 6,
    },
    "pedestal": 123,
    "raspi": 94,
    "spotDetection": 110,
    "cornhacks": 126,
    "nnet": 95,
    "twitterBot": 111,
    "e_pacerr": 127,
    "water-anim":{
      from: 163,
      to:167,
      loop: true,
      speed: 1,
    }
  },
});

const scenes = {
  mainMenu: mainMenu,
  world: world,
};

for (const sceneName in scenes) {
  k.scene(sceneName, () => scenes[sceneName](k));
}

const canvas = k.canvas;
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("game-container").appendChild(canvas);
});

k.go("mainMenu");

// if (!document.getElementById("game-container")) {
//   canvas.destroyAll();
// } else {
//   document.getElementById("game-container").appendChild(canvas);
// }