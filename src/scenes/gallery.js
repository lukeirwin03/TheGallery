import {
  generatePlayerComponents,
  setPlayerMovement,
} from "../entities/player.js";
import {
  generateGuideComponents,
  startInteraction,
} from "../entities/guide.js";
import {
  colorizeBackground,
  fetchMapData,
  drawTiles,
  drawBoundaries,
  playAnimIfNotPlaying,
} from "../utils.js";

export default async function house(k) {
    colorizeBackground(k, 27, 29, 52);
  
    const mapData = await fetchMapData("./assets/maps/gallery.json");
    const map = k.add([k.pos(520, 200)]);
  
    const entities = {
      guide: null,
      player: null,
    };
  
    const layers = mapData.layers;
    for (const layer of layers) {
      if (layer.name === "boundaries") {
        drawBoundaries(k, map, layer);
        continue;
      }
  
      if (layer.name === "spawnpoints") {
        for (const object of layer.objects) {
          if (object.name === "player") {
            entities.player = map.add(
              generatePlayerComponents(k, k.vec2(object.x, object.y))
            );
            continue;
          }
  
          if (object.name === "guide") {
            entities.guide = map.add(
              generateGuideComponents(k, k.vec2(object.x, object.y))
            );
            continue;
          }
        }
  
        continue;
      }
  
      drawTiles(k, map, layer, mapData.tileheight, mapData.tileheight);
    }

  k.camScale(3);
  k.camPos(entities.player.worldPos());
  k.onUpdate(async () => {
    if (entities.player.pos.dist(k.camPos())) {
      await k.tween(
        k.camPos(),
        entities.player.worldPos(),
        0.15,
        (newPos) => {
          k.camPos(newPos);
        },
        k.easings.linear
      );
    }
  });

  setPlayerMovement(k, entities.player);

  entities.player.onCollide("door-exit", () => {
    k.go("world");
  });

  entities.player.onCollide("guide", () => {
    startInteraction(k, entities.guide, entities.player);
  });

  entities.player.onCollideEnd("guide", () => {
    playAnimIfNotPlaying(entities.guide, "guide-idle-down");
  });
}
