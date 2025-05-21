// alles wat je van excalibur nodig hebt moet je importeren
import { Actor, Vector, Keys, CollisionType } from "excalibur"
import { Resources } from './resources.js'
import { Jellyfish } from "./jellyfish.js"

// export, zodat spongebob in de game komt
export class Spongebob extends Actor {

    name
    score
    player

    constructor(name, x, y, player) {
        super({
            width: Resources.Spongebob.width,
            height: Resources.Spongebob.height,
            collisionType: CollisionType.Active
        })

        //array
        

        this.score = 0
        console.log(`My name is ${name}`)
        this.name = name
        this.player = player


        console.log("Ben er klaar voor!")
        //console.log(this.pos)

        this.graphics.use(Resources.Spongebob.toSprite())
        this.pos = new Vector(x, y)
        //this.vel = new Vector(-100, 0)

        this.scale = new Vector(0.2, 0.2)
        // ik kan spongebob slepen met de muis
        //this.draggable = true

        //this.events.on("exitviewport", (e) => this.spongebobLeft(e))

    }

    // spongebobLeft(e) {
    //let x = Math.random() * 800
    //let y = Math.random() * 450
    // e.target.pos = new Vector(x, y)

    //}

    onPreUpdate(engine) {
        let xspeed = 0
        let yspeed = 0
        let kb = engine.input.keyboard

        //keys playerOne
        if (this.player === "playerOne") {
            
            if (kb.isHeld(Keys.W)) {
                yspeed = -300
            }
            if (kb.isHeld(Keys.S)) {
                yspeed = 300
            }
            if (kb.isHeld(Keys.A)) {
                xspeed = -300
                this.graphics.flipHorizontal = true       // flip de sprite
            }
            if (kb.isHeld(Keys.D)) {
                xspeed = 300
                this.graphics.flipHorizontal = false      // flip de sprite
            }
            this.vel = new Vector(xspeed, yspeed)
    
            // als er maar 1x iets gebeurt check je of die key was ingedrukt in dit frame
            if (kb.wasPressed(Keys.Space)) {
                this.shoot()
            }
        }

        //keys playerTwo
        if (this.player === "playerTwo") {
            
            if (kb.isHeld(Keys.Up)) {
                yspeed = -300
            }
            if (kb.isHeld(Keys.Down)) {
                yspeed = 300
            }
            if (kb.isHeld(Keys.Left)) {
                xspeed = -300
                this.graphics.flipHorizontal = true       // flip de sprite
            }
            if (kb.isHeld(Keys.Right)) {
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

    onInitialize(engine) {
        this.on('collisionstart', (event) => this.hitSomething(event))
    }


    hitSomething(event) {
        if (event.other.owner instanceof Jellyfish) {
            // Je kan `instanceof` gebruiken om te zien waar je tegenaan botst.
            console.log(`${this.name} ving een kwal`)
            event.other.owner.kill()
            //event.other.owner.wasEatenByShark
            //geluid
            //Resources.Laugh.play()
            this.score++
            console.log(`${this.score}`)
            this.scene.engine.ui.showScore(this.score)
        }
    }




}