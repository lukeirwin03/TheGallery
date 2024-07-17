import k from "./kaboomContext.js";
import mainMenu from "./scenes/mainMenu.js"
import world from "./scenes/world.js";
import gallery from "./scenes/gallery.js";

k.loadFont("gameboy", "./assets/gb.ttf");
k.loadSprite("assets", "./assets/maps/new_gallery_sprites.png", {
  sliceX: 16,
  sliceY: 16,
  anims: {
    // "player-idle-down": 209,
    // "player-down": {
    //   from: 210,
    //   to: 212,
    //   loop: true,
    // },
    // "player-idle-side": 225,
    // "player-side": {
    //   from: 226,
    //   to: 229,
    //   loop: true,
    // },
    // "player-idle-up": 241,
    // "player-up": {
    //   from: 242,
    //   to: 244,
    //   loop: true,
    // },
    "player-down": {
      from: 224,
      to: 225,
      loop: true,
      speed:6,
  },
    "player-idle-down": {
      from: 224,
      to: 225,
      loop: true,
      speed:6,
  },
  "player-side": {
      from: 226,
      to: 227,
      loop: true,
      speed:6,
  },
  "player-idle-side": {
      from: 226,
      to: 227,
      loop: true,
      speed:6,
  },
  "player-up": {
      from: 240,
      to: 241,
      loop: true,
      speed:6,
  },
  "player-idle-up": {
      from: 240,
      to: 241,
      loop: true,
      speed:6,
  },
    "guide-idle-down": {
        from: 224,
        to: 225,
        loop: true,
        speed:6,
    },
    "guide-idle-side": {
        from: 226,
        to: 227,
        loop: true,
        speed:6,
    },
    "guide-idle-up": {
        from: 240,
        to: 241,
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
