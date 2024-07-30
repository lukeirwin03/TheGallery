import exhibitLines from "../content/exhibitDialog.js";
import { dialog } from "../uiComponents/dialog.js";
import { playAnimIfNotPlaying } from "../utils.js";
import { gameState } from "../state/stateManagers.js";

// Function to generate the pedestal components
export function generateExhibitComponents(k, pos, project) {
  const pedestal = k.add([
    k.sprite("assets", {
      anim: "pedestal",
    }),
    k.area({shape: new k.Rect(k.vec2(3, 2), 10, 14)}),
    k.body({ isStatic: true }),
    k.pos(pos),
    "pedestal",
    {
      type: project, 
    },
  ]);

  const floatingObject = k.add([
    k.sprite("assets", {
      anim: project, 
    }),
    k.area(),
    k.pos(pedestal.pos.add(0, -12)), 
    "floatingObject",
    {
      originalPos: pedestal.pos.add(0, -10),
      time: 0,
      type: project, 
    },
  ]);

  floatingObject.onUpdate(() => { 
    floatingObject.time += k.dt();
    floatingObject.pos.y = floatingObject.originalPos.y + Math.sin(floatingObject.time * 3);
  });

  return [pedestal, floatingObject];
}

export async function startPedestalInteraction(k, type) {
  const responses = exhibitLines[type][gameState.getLanguage()];
  dialog(k, k.vec2(250, 500), responses[0]);
}
