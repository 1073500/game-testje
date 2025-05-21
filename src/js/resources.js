import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
// img resources zijn objecten die een afbeelding bevatten
const Resources = {
    Jellyfish: new ImageSource('images/coin.png'),
    BG: new ImageSource('images/game-bg.png'),
    Spongebob: new ImageSource('images/main-sprite.png'),
    Mine: new ImageSource('images/mine-scaled.png'),
    // House: new ImageSource('images/pineapple.png'),
    //geluid
    Laugh: new Sound('sounds/spongebob-laugh.wav'),
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }