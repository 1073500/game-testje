import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Buttons } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Spongebob } from './spongebob.js'
import { Bubble } from './bubble.js'
//!
import { Jellyfish } from './jellyfish.js'

// import van "excalibur"
export class Game extends Engine {
    // constructor van de game
    // instellingen van game worden gedefinieerd
    constructor() {
        super({
            width: 800,
            height: 450,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    // starten van de game
    startGame() {
        // achtergrond van game
        let sea = new Actor()
        sea.graphics.use(Resources.BG.toSprite())
        sea.pos = new Vector(400, 450 / 2)
        sea.scale = new Vector(1.3, 1.3)
        this.add(sea)

        // huis spongbob
        let house = new Actor()

        let x = Math.random() * 800
        let y = Math.random() * 450

        house.graphics.use(Resources.House.toSprite())
        house.pos = new Vector(100, 300)
        house.scale = new Vector(0.6, 0.6)
        house.vel = new Vector(100, 0)
        house.events.on("exitviewport", (e) => this.houseLeft(e))
        this.add(house)
        

        // kwallen maken
        // loop die 20 kwallen maakt en ze random op het scherm plaatst
        // alle code van de kwal zit in de loop
        for (let i = 0; i < 20; i++) {

            // de kwal is een actor die een sprite gebruikt
            let jellyfish = new Actor()

            let x = Math.random() * 800
            let y = Math.random() * 450
            // jellyfish. wordt gebruikt om dingen met de actor te doen
    
            // de afbeelding van de kwal wordt geladen uit de images map die als objecten in resources.js staan
            jellyfish.graphics.use(Resources.Jellyfish.toSprite())
            // de positie van de kwal wordt in dit geval random gezet (code bovenin)
            jellyfish.pos = new Vector(x, y)
            // snelheid van de kwal
            jellyfish.vel = new Vector(-100, 0)
    
            // de scale van de kwal is random
            let randomScale = Math.random() * 0.05 + 0.05
            // de waarde van de vector is de randomScale variabel
            jellyfish.scale = new Vector(randomScale, randomScale)
    
            // de kwal draait met angularVelocity
            jellyfish.angularVelocity = 0.1
            // kwal gaat weer naar het begin gaat als hij het scherm verlaat (functie onderin)
            jellyfish.events.on("exitviewport", (e) => this.jellyfishLeft(e))
            // de kwal is draggable, dat betekent dat je hem kan slepen met de muis
            jellyfish.draggable = true
            // kwal toevoegen aan de game (net als prg03 met object.append)

            // vang de kwal als je hem aanklikt
            jellyfish.on("pointerup", () => {
                console.log("Je hebt een kwal gevangen!")
                jellyfish.kill()
            })

            this.add(jellyfish)
        }

        // spongebob maken
        for (let i = 0; i < 20; i++) {

            let spongebob = new Spongebob()
            this.add(spongebob)
        }

        // bubbles maken
        for (let i = 0; i < 50; i++) {

            let bubble = new Bubble()
            this.add(bubble)
        }



    }

    jellyfishLeft(e) {
        let x = Math.random() * 800
        let y = Math.random() * 450
        e.target.pos = new Vector(x, y)

    }

    //!huis komt niet smooth terug!
    houseLeft(e) {
        let x = Math.random() * 800
        let y = Math.random() * 450
        e.target.pos = new Vector(100, 300)

    }




}

// roept de game aan
new Game()
