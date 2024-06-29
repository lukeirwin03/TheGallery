export default function guideGlobalStateManager() {
    let instance = null;
  
    function createInstance() {
      let nbTalkedGuide = 0;
  
      return {
        setNbTalkedGuide(value) {
          nbTalkedGuide = value;
        },
        getNbTalkedGuide: () => nbTalkedGuide,
      };
    }
  
    return {
      getInstance() {
        if (!instance) {
          instance = createInstance();
        }
  
        return instance;
      },
    };
  }