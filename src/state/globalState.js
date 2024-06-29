export default function globalStateManager() {
    let instance = null;

    function createInstance() {
        let freezePlayer = false
        let language = "english"
        let fontSize = 30

        return {
            setFreezePlayer: (val) => {
                freezePlayer = val;
            },
            getFreezePlayer: () => freezePlayer,
            setFontSize: (val) => {
                fontSize = val
            },
            getFontSize: () => fontSize,
            setLanguage: (val) => {
                language = val
            },
            getLanguage: () => language,
        }
    }

    return {
        getInstance: () => {
            if(!instance){
                instance = createInstance();
            }
            return instance
        }
    }
}