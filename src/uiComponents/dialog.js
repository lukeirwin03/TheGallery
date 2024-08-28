import { gameState } from "../state/stateManagers.js";

async function displayLine(textContainer, line) {
  for (const char of line) {
    await new Promise((resolve) => {
      setTimeout(() => {
        textContainer.text += char;
        resolve();
      }, 10);
    });
  }
}

export async function dialog(k, content) {
  gameState.setFreezePlayer(true);

  const centerX = k.width() / 2 - 400; // 400 is half of the dialog box width (800/2)
  const centerY = k.height() / 1.5; // 100 is half of the dialog box height (200/2)


  const dialogBox = k.add([k.rect(800, 200), k.pos(centerX, centerY), k.fixed()]);
  const textContainer = dialogBox.add([
    k.text("", {
      font: "gameboy",
      width: 700,
      lineSpacing: 15,
      size: gameState.getFontSize(),
    }),
    k.color(0, 0, 0),
    k.pos(20, 40),
    k.fixed(),
  ]);

  let index = 0;

  await displayLine(textContainer, content[index]);
  let lineFinished = true;
  const dialogKey = k.onKeyPress("space", async () => {
    if (!lineFinished) return;
    index++;
    if (!content[index]) {
      k.destroy(dialogBox);
      dialogKey.cancel();
      gameState.setFreezePlayer(false);
      return;
    }
    textContainer.text = "";
    lineFinished = false;
    await displayLine(textContainer, content[index]);
    lineFinished = true;
  });
}
