import globalStateManager from "./globalState.js";
import guideGlobalStateManager from "./guideGlobalState.js";

export const gameState = globalStateManager().getInstance();
export const guideState = guideGlobalStateManager().getInstance();
