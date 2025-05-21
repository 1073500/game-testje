import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'
import { Jellyfish } from "./jellyfish.js"

export class Bubble extends Actor {
    constructor(x, y) {
        super({width:Resources.Bubble.width, height: Resources.Bubble.height})


        this.graphics.use(Resources.Bubble.toSprite())
        this.pos = new Vector(x, y)
        this.vel = new Vector(0, -50)
        this.graphics.opacity = 0.7

        let randomScale = Math.random() * 0.003 + 0.003
        this.scale = new Vector(randomScale, randomScale)

        //this.angularVelocity = -0.5
        this.events.on("exitviewport", (e) => this.bubbleLeft(e))
    

    }

    onInitialize(engine) {
        this.on("collisionstart", (event) => this.hitSomething(event))
        this.on("exitviewport", (event) => this.kill())
    }

    hitSomething(event) {
        if (event.other.owner instanceof Jellyfish) {
            // Je kan `instanceof` gebruiken om te zien waar je tegenaan botst.
            this.score++
            console.log(`${this.score}`)
            this.scene.engine.ui.showScore(this.score)
            this.kill()
        }
    }

    bubbleLeft(e) {
        let x = Math.random() * 800
        let y = Math.random() * 450
        e.target.pos = new Vector(x, y)

    }

}