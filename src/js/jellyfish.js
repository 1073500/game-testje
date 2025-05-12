import { Actor, Vector, Keys } from "excalibur"
import { Resources } from './resources.js'

export class Jellyfish extends Actor {
    constructor() {
        super()

        let x = Math.random() * 800
        let y = Math.random() * 450
        // jellyfish. wordt gebruikt om dingen met de actor te doen

        // de afbeelding van de kwal wordt geladen uit de images map die als objecten in resources.js staan
        this.graphics.use(Resources.Jellyfish.toSprite())
        // de positie van de kwal wordt in dit geval random gezet (code bovenin)
        this.pos = new Vector(x, y)
        // snelheid van de kwal
        //this.vel = new Vector(-20, 0)

        // de scale van de kwal is random
        let randomScale = Math.random() * 0.05 + 0.05
        // de waarde van de vector is de randomScale variabel
        this.scale = new Vector(randomScale, randomScale)

        // de kwal draait met angularVelocity
        //this.angularVelocity = 0.1
        // kwal gaat weer naar het begin gaat als hij het scherm verlaat (functie onderin)
        this.events.on("exitviewport", (e) => this.jellyfishLeft(e))
        // de kwal is draggable, dat betekent dat je hem kan slepen met de muis
        //this.draggable = true
        // kwal toevoegen aan de game (net als prg03 met object.append)

        // vernietig de kwal als je hem aanklikt
        this.on("pointerup", () => {
        console.log("Je hebt een kwal gevangen!")
        this.kill()
         })

    }

    // deze functie wordt aangeroepen als een kwal het scherm verlaat
    //jellyfishLeft(e) {
    //let x = Math.random() * 800
    //let y = Math.random() * 450
    // e.target.pos = new Vector(x, y)

    // }

    onPreUpdate(engine) {
        let xspeed = 0
        let yspeed = 0
        let kb = engine.input.keyboard

        if (kb.isHeld(Keys.W) || kb.isHeld(Keys.Up)) {
            yspeed = -300
        }
        if (kb.isHeld(Keys.S) || kb.isHeld(Keys.Down)) {
            yspeed = 300
        }
        if (kb.isHeld(Keys.A) || kb.isHeld(Keys.Left)) {
            xspeed = -300
            this.graphics.flipHorizontal = true       // flip de sprite
        }
        if (kb.isHeld(Keys.D) || kb.isHeld(Keys.Right)) {
            xspeed = 300
            this.graphics.flipHorizontal = false      // flip de sprite
        }
        this.vel = new Vector(xspeed, yspeed)

        // als er maar 1x iets gebeurt check je of die key was ingedrukt in dit frame
        if (kb.wasPressed(Keys.Space)) {
            this.shoot()
        }
    }


}