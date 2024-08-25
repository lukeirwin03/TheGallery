export function generateWaterComponents(k, pos) {
    return [
      k.sprite("assets", {
        anim: "water-anim",
      }),
      k.area({ shape: new k.Rect(k.vec2(3, 2), 16, 16) }),
      k.body(),
      k.pos(pos),
      k.offscreen(),
    ];
  }
  