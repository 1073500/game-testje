import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
// img resources zijn objecten die een afbeelding bevatten
const Resources = {
    Jellyfish: new ImageSource('images/jellyfish.png'),
    BG: new ImageSource('images/spongebob-sea.jpg'),
    Spongebob: new ImageSource('images/spongebob.png'),
    Bubble: new ImageSource('images/bubble.png'),
    House: new ImageSource('images/pineapple.png'),
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }