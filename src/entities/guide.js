import guideLines from "../content/guideDialog.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import { gameState } from "../state/stateManagers.js";

export function generateGuideComponents(k, pos) {
  return [
    k.sprite("game-assets", {
      anim: "guide-idle-down",
    }),
    k.area({ shape: new k.Rect(k.vec2(3, 2), 10, 14) }),
    k.body({isStatic: true}),
    k.pos(pos),
    "guide",
  ];
}

export async function startInteraction(k, guide, player) {
    if (player.direction === "left") {
        guide.flipX = true;
        playAnimIfNotPlaying(guide, "guide-idle-side", 5);
    }
    if (player.direction === "right") {
        guide.flipX = false;
        playAnimIfNotPlaying(guide, "guide-idle-side", 5);
    }
    if (player.direction === "down") {
        playAnimIfNotPlaying(guide, "guide-idle-up", 5);
    }
    if (player.direction === "up") {
        playAnimIfNotPlaying(guide, "guide-idle-down", 5);
    }

    const responses = guideLines[gameState.getLanguage()];
    
    dialog(k, k.vec2(250, 500), responses[0],  )
}

// export async function endInteraction(k, )
