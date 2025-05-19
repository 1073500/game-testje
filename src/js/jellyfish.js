import { Actor, Vector, Keys } from "excalibur"
import { Resources } from './resources.js'

export class Jellyfish extends Actor {
    constructor() {
        super({
            width: Resources.Spongebob.width,
            height: Resources.Spongebob.height,
        })

        let x = Math.random() * 640
        let y = Math.random() * 360
        // jellyfish. wordt gebruikt om dingen met de actor te doen

        // de afbeelding van de kwal wordt geladen uit de images map die als objecten in resources.js staan
        this.graphics.use(Resources.Jellyfish.toSprite())
        // de positie van de kwal wordt in dit geval random gezet (code bovenin)
        this.pos = new Vector(800 + x, y)
        // snelheid van de kwal
        this.vel = new Vector(-500, 0)

        // de scale van de kwal is random
        let randomScale = Math.random() * 0.05 + 0.05
        // de waarde van de vector is de randomScale variabel
        this.scale = new Vector(randomScale, randomScale)

        // de kwal draait met angularVelocity
        // this.angularVelocity = 0.1
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
    jellyfishLeft(e) {
        let x = Math.random() * 800
        let y = Math.random() * 450
        e.target.pos = new Vector(800 + x, y)

    }

    onPostKill() {
        this.unkill()
        let x = Math.random() * 800
        let y = Math.random() * 450
        this.pos = new Vector(800 + x, y)
        console.log("Spongebob ving een kwal!")
    }









}