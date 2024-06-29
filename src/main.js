import k from "./kaboomContext.js";
import mainMenu from "./scenes/mainMenu.js"
import world from "./scenes/world.js";
import gallery from "./scenes/gallery.js";

k.loadFont("gameboy", "./assets/gb.ttf");
k.loadSprite("assets", "./assets/maps/the_gallery_sprites.png", {
  sliceX: 16,
  sliceY: 16,
  anims: {
    "player-idle-down": 209,
    "player-down": {
      from: 210,
      to: 212,
      loop: true,
    },
    "player-idle-side": 225,
    "player-side": {
      from: 226,
      to: 229,
      loop: true,
    },
    "player-idle-up": 241,
    "player-up": {
      from: 242,
      to: 244,
      loop: true,
    },
    "guide-idle-down": {
        from: 214,
        to: 215,
        loop: true,
        speed:6,
    },
    "guide-idle-side": {
        from: 216,
        to: 217,
        loop: true,
        speed:6,
    },
    "guide-idle-up": {
        from: 230,
        to: 231,
        loop: true,
        speed:6,
    },
  },
});

const scenes = {
  mainMenu: mainMenu,
  world: world,
  gallery: gallery,
};

for (const sceneName in scenes) {
  k.scene(sceneName, () => scenes[sceneName](k));
}

k.go("mainMenu");
