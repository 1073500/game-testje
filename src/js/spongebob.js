// alles wat je van excalibur nodig hebt moet je importeren
import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

// export, zodat spongebob in de game komt
export class Spongebob extends Actor {
    constructor() {
        super()

        let x = Math.random() * 800
        let y = Math.random() * 450

        console.log("Ben er klaar voor!")
        //console.log(this.pos)

        this.graphics.use(Resources.Spongebob.toSprite())
        this.pos = new Vector(x, y)
        this.vel = new Vector(-100, 0)

        this.scale = new Vector(0.04, 0.04)
        // ik kan spongebob slepen met de muis
        this.draggable = true

        this.events.on("exitviewport", (e) => this.spongebobLeft(e))

    }

    spongebobLeft(e) {
        let x = Math.random() * 800
        let y = Math.random() * 450
        e.target.pos = new Vector(x, y)

    }

}