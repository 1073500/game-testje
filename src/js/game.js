import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Buttons } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 800,
            height: 450,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }


    startGame() {

       let sea = new Actor()
        sea.graphics.use(Resources.BG.toSprite())
        sea.pos = new Vector(0, 0)
        /*sea.scale = new Vector(4, 10)*/
        this.add(sea)


// vissen maken
        // dit is een loop die 50 vissen maakt en ze random op het scherm plaatst
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * 800
            let y = Math.random() * 450


            const fish = new Actor()
            fish.graphics.use(Resources.Fish.toSprite())
            fish.pos = new Vector(x, y)
            fish.vel = new Vector(-100, 0)

            let randomScale = Math.random() * 0.5 + 0.5
            fish.scale = new Vector(randomScale, randomScale)

            fish.angularVelocity = 0.1
            fish.events.on("exitviewport", (e) => this.fishLeft(e))
            this.add(fish)
        }
        
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * 800
            let y = Math.random() * 450

// spongebob maken
            const spongebob = new Actor()
            spongebob.graphics.use(Resources.Spongebob.toSprite())
            spongebob.pos = new Vector(x, y)
            spongebob.vel = new Vector(-100, 0)

            spongebob.scale = new Vector(0.04, 0.04)
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

new Game()
