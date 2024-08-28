import kaboom from "../lib/kaboom.mjs";

const k = kaboom({
    width: window.innerWidth,
    height: window.innerHeight,
    letterbox: true,
    global: false,
    stretch: true, 
});

export default k;
