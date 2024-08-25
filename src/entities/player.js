import { playAnimIfNotPlaying, isKeyDown } from "../utils.js";
import { gameState } from "../state/stateManagers.js";

export function generatePlayerComponents(k, pos) {
  return [
    k.sprite("assets", {
      anim: "player-idle-down",
    }),
    k.area({ shape: new k.Rect(k.vec2(3, 2), 10, 14) }),
    k.body(),
    k.pos(pos),
    k.z(0), // Default z-index for the player
    k.opacity(),
    {
      speed: 80,
      direction: "down",
      update() {
        // Dynamically update the z-index based on the player's y-position
        this.use(k.z(this.pos.y));
      },
    },
    "player",
  ];
}

// TODO: FIX MOVEMENT LOGIC (ex. if you press left and a, you move at 2x speed)
export function setPlayerMovement(k, player) {
  k.onKeyDown((key) => {
    if (gameState.getFreezePlayer()) return;
    if (k.isKeyDown("space")) return;

    if (
      ["left", "a"].includes(key) &&
      !isKeyDown(k, ["up", "w", "down", "s"])
    ) {
      player.flipX = true;
      playAnimIfNotPlaying(player, "player-side");
      player.move(-player.speed, 0);
      player.direction = "left";
      return;
    }
    if (
      ["right", "d"].includes(key) &&
      !isKeyDown(k, ["up", "w", "down", "s"])
    ) {
      player.flipX = false;
      playAnimIfNotPlaying(player, "player-side");
      player.move(player.speed, 0);
      player.direction = "right";
      return;
    }
    if (
      ["up", "w"].includes(key) &&
      !isKeyDown(k, ["left", "a", "right", "d"])
    ) {
      playAnimIfNotPlaying(player, "player-up");
      player.move(0, -player.speed);
      player.direction = "up";
      return;
    }
    if (
      ["down", "s"].includes(key) &&
      !isKeyDown(k, ["left", "a", "right", "d"])
    ) {
      playAnimIfNotPlaying(player, "player-down");
      player.move(0, player.speed);
      player.direction = "down";
      return;
    }
  });

  k.onKeyRelease(() => {
    player.stop();
    switch (player.direction) {
      case "left":
      case "right":
        playAnimIfNotPlaying(player, "player-idle-side");
        break;
      case "up":
        playAnimIfNotPlaying(player, "player-idle-up");
        break;
      case "down":
        playAnimIfNotPlaying(player, "player-idle-down");
        break;
    }
  });
}
