import menuText from "../content/menuText.js";
import { gameState } from "../state/stateManagers.js";
import { colorizeBackground } from "../utils.js";

export default function mainMenu(k) {
  k.loadSprite("background", "../../game-assets/maps/gallery_main_menu.png");

  k.scene("mainMenu", () => {
    const currentLanguage = gameState.getLanguage();

    k.add([
      k.sprite("background", { width: k.width(), height: k.height() }), // Adjust to fit the screen
      k.pos(0, 0),
    ]);

    k.add([
      k.text(menuText[currentLanguage].title, { size: 56, font: "gameboy" }),
      k.area(),
      k.anchor("center"),
      k.pos(k.center().x, k.center().y - 100),
    ]);

    const languageText = k.add([
      k.text(menuText[currentLanguage].languageIndication, {
        size: 14,
        font: "gameboy",
      }),
      k.area(),
      k.anchor("center"),
      k.pos(k.center().x, k.center().y + 110),
    ]);

    languageText.onUpdate(() => {
      const blinkSpeed = 6; // Adjust the blinking speed as needed
      languageText.opacity = Math.sin(k.time() * blinkSpeed) > 0 ? 1 : 0;
    });

    const playText = k.add([
      k.text(menuText[currentLanguage].playIndication, {
        size: 24,
        font: "gameboy",
      }),
      k.area(),
      k.anchor("center"),
      k.pos(k.center().x, k.center().y + 145),
    ]);

    playText.onUpdate(() => {
      const blinkSpeed = 6; // Adjust the blinking speed as needed
      playText.opacity = Math.sin(k.time() * blinkSpeed) > 0 ? 1 : 0;
    });

    k.onKeyPress("f", () => {
      const currentLanguage = gameState.getLanguage();
      if (currentLanguage === "english") {
        gameState.setLanguage("spanish");
      } else if (currentLanguage === "spanish") {
        gameState.setLanguage("english");
      }
      k.go("mainMenu");
    });

    k.onKeyPress("enter", () => {
      if (gameState.getLanguage() === "spanish") gameState.setFontSize(28);
      k.go("world");
    });
  });

  // Start the main menu scene
  k.go("mainMenu");
}
