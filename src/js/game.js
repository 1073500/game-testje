import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Buttons } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

// import van "excalibur"
export class Game extends Engine {
    // constructor van de game
    // hier worden de instellingen van de game gedefinieerd
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
        // achtergrondkleur van de game *niet goed gescaled
       let sea = new Actor()
        sea.graphics.use(Resources.BG.toSprite())
        sea.pos = new Vector(0, 0)
        /*sea.scale = new Vector(4, 10)*/
        this.add(sea)


// vissen maken
        // dit is een loop die 50 vissen maakt en ze random op het scherm plaatst
        // alle code van de vis zit in de loop
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * 800
            let y = Math.random() * 450

// de vis is een actor die een sprite gebruikt
            const fish = new Actor()
            // fish. wordt gebruikt om dingen met de actor te doen
            // de afbeelding van de vis wordt geladen uit de images map die als objecten in resources.js staan
            fish.graphics.use(Resources.Fish.toSprite())
            // de positie van de vis wordt in dit geval random gezet (code bovenin)
            fish.pos = new Vector(x, y)
            // snelheid van de vis
            fish.vel = new Vector(-100, 0)

            // de scale van de vis is random
            let randomScale = Math.random() * 0.5 + 0.5
            // de waarde van de vector is de randomScale variabel
            fish.scale = new Vector(randomScale, randomScale)

            // de vis draait met angularVelocity
            fish.angularVelocity = 0.1
            // zorgt ervoor dat de vis weer naar het begin gaat als hij het scherm verlaat (functie onderin)
            fish.events.on("exitviewport", (e) => this.fishLeft(e))
            // vis toevoegen aan de game (net als prg03 met object.append)
            this.add(fish)
        }
        
        // spongebob maken
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * 800
            let y = Math.random() * 450

            const spongebob = new Actor()
            spongebob.graphics.use(Resources.Spongebob.toSprite())
            spongebob.pos = new Vector(x, y)
            spongebob.vel = new Vector(-100, 0)

            spongebob.scale = new Vector(0.04, 0.04)
            // ik kan spongebob slepen met de muis
            spongebob.draggable = true

            
            spongebob.events.on("exitviewport", (e) => this.spongebobLeft(e))
            this.add(spongebob)
        }

        // bubbles maken
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * 800
            let y = Math.random() * 450


            const bubble = new Actor()
            bubble.graphics.use(Resources.Bubble.toSprite())
            bubble.pos = new Vector(x, y)
            bubble.vel = new Vector(-50, 0)

            let randomScale = Math.random() * 0.003 + 0.003
            bubble.scale = new Vector(randomScale, randomScale)

            bubble.angularVelocity = -0.5
            bubble.events.on("exitviewport", (e) => this.bubbleLeft(e))
            this.add(bubble)
        }

    }

    // deze functie wordt aangeroepen als een vis het scherm verlaat
    fishLeft(e) {
        let x = Math.random() * 800
        let y = Math.random() * 450
        e.target.pos = new Vector(x, y)

    }
    spongebobLeft(e) {
        let x = Math.random() * 800
        let y = Math.random() * 450
        e.target.pos = new Vector(x, y)

    }
    bubbleLeft(e) {
        let x = Math.random() * 800
        let y = Math.random() * 450
        e.target.pos = new Vector(x, y)

    }


}

// roept de game aan
new Game()
