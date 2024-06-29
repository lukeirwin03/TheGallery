export function generateFrogComponents(k, pos) {
    return [
      k.sprite("assets", {
        anim: "frog-idle-down",
      }),
      k.area({ shape: new k.Rect(k.vec2(3, 2), 10, 14) }),
      k.body(),
      k.pos(pos),
      k.offscreen(),
      k.opacity(),
      {
        speed:60,
        direction: "down",
      },
      "frog",
    ];
  }
  