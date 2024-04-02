
const characters = document.querySelectorAll(".character");
console.log(characters);
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