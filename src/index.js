
const characters = document.querySelectorAll(".character");
const flags = document.querySelectorAll(".flag");
let previousFlag = null;

let moveAudio = new Audio("./src/sounds/move2.wav");
let themeAudio = new Audio("./src/sounds/theme.wav");


characters.forEach((character) => {
    character.addEventListener("mouseenter", () => {
        themeAudio.play();
        moveAudio.play();
        if(window.innerWidth < 450){
            window.scrollTo({top:0, behavior: "smooth"});
        }
        removeCharacterSelection();

        const characterCountry = character.getAttribute("country");

        flags.forEach((flag) => {
            const flagCountry = flag.classList[1];
            if(flagCountry === characterCountry){
                flag.classList.add("flag2");
                if(previousFlag && previousFlag !== flag) {
                    previousFlag.classList.remove("flag2");
                }
                previousFlag = flag;

            }
        })

        character.classList.add("selected");
        changeSelectedCharacterImage(character);
    });
});

function changeSelectedCharacterImage(character) {
    const largeCharacterImage = document.querySelector(".big-character");
    const characterId = character.attributes.id.value;
    largeCharacterImage.src = `./src/images/${characterId}.png`;
}

function removeCharacterSelection(){
    const selectedCharacter = document.querySelector(".selected");
    selectedCharacter.classList.remove("selected");
}

function removeFlagSelection(){
    const selectedFlag = document.querySelector(".flag2");
    selectedFlag.classList.remove("flag2");
}