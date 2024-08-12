import { generateExhibitComponents, startPedestalInteraction } from "../entities/exhibit.js";
import {
  generatePlayerComponents,
  setPlayerMovement,
} from "../entities/player.js";
import {
  colorizeBackground,
  fetchMapData,
  drawTiles,
  drawBoundaries,
} from "../utils.js";

export default async function world(k) {
  colorizeBackground(k, 32, 0, 178);
  const mapData = await fetchMapData("../assets/maps/world.json");

  const map = k.add([k.pos(0, 0)]);

  const entities = {
    player: null,
    exhibits: [],
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
          entities.player = k.add(
            generatePlayerComponents(k, k.vec2(object.x, object.y))
          );
          continue;
        }
        // add logic for the door before this else clause to make sure it gets rendered properly
        else {
          const [pedestal, project] = generateExhibitComponents(k, k.vec2(object.x, object.y), object.name);
          entities.exhibits.push(pedestal);
          entities.exhibits.push(project);
          continue;
        }
      }
      continue;
    }

    drawTiles(k, map, layer, mapData.tileheight, mapData.tilewidth);
  }
  k.camScale(4);
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

  entities.player.onCollide("pedestal", (pedestal) => {
    const pedestalType = pedestal.type;
    console.log(pedestal.type);
    if (pedestalType) {
      startPedestalInteraction(k, pedestalType);
    }
  });

  entities.player.onCollide("door-entrance", () => {
    k.go("gallery");
  });
}
