import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Mine extends Actor {
    constructor() {
        super()

        this.graphics.use(Resources.Mine.toSprite())
        this.pos = new Vector(x, y)
        this.vel = new Vector(0, -50)
        this.graphics.opacity = 0.7

        let randomScale = Math.random() * 0.003 + 0.003
        this.scale = new Vector(randomScale, randomScale)

    }


}