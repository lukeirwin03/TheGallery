import menuText from "../content/menuText.js";
import { gameState } from "../state/stateManagers.js";
import { colorizeBackground } from "../utils.js";

export default function mainMenu(k) {
  const currentLanguage = gameState.getLanguage();

  colorizeBackground(k, 0, 0, 0);

  k.add([
    k.text(menuText[currentLanguage].title, { size: 56, font: "gameboy" }),
    k.area(),
    k.anchor("center"),
    k.pos(k.center().x, k.center().y - 100),
  ]);

  k.add([
    k.text(menuText[currentLanguage].languageIndication, {
      size: 14,
      font: "gameboy",
    }),
    k.area(),
    k.anchor("center"),
    k.pos(k.center().x, k.center().y + 75),
  ]);

  k.add([
    k.text(menuText[currentLanguage].playIndication, {
      size: 24,
      font: "gameboy",
    }),
    k.area(),
    k.anchor("center"),
    k.pos(k.center().x, k.center().y + 155),
  ]);

  k.onKeyPress("f", () => {
    if (currentLanguage !== "spanish") gameState.setLanguage("spanish");
    if (currentLanguage !== "english") gameState.setLanguage("english");
    k.go("mainMenu");
  });

  k.onKeyPress("enter", () => {
    if (gameState.getLanguage() === "spanish") gameState.setFontSize(28);
    k.go("world");
  });
}
