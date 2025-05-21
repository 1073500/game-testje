import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Label, Font, FontUnit, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { UI } from './ui.js'
import { Spongebob } from './spongebob.js'
import { Mine } from './mine.js'
import { Jellyfish } from './jellyfish.js'

// import van "excalibur"
export class Game extends Engine {

    ui

    constructor() {
        super({
            width: 640,
            height: 360,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.showDebug(true)
        this.start(ResourceLoader).then(() => this.startGame())
    }

    // starten van de game
    startGame() {

        // achtergrond van game
        let bg = new Actor()
        bg.graphics.use(Resources.BG.toSprite())
        //bg.pos = new Vector(400, 450 / 2)
        bg.scale = new Vector(0.5, 0.5)
        bg.anchor = new Vector(0, 0) //makkelijk afbeelding centeren
        this.add(bg)

        // huis spongbob
        //let house = new Actor()

        //let x = Math.random() * 640
        //let y = Math.random() * 360

        //house.graphics.use(Resources.House.toSprite())
        //house.pos = new Vector(100, 300)
        //house.scale = new Vector(0.6, 0.6)
        //house.vel = new Vector(100, 0)
        //house.events.on("exitviewport", (e) => this.houseLeft(e))
        //this.add(house)


        // kwallen maken
        for (let i = 0; i < 5; i++) {

            let jellyfish = new Jellyfish()

            this.add(jellyfish)
        }

        // spongebob maken
        //for (let i = 0; i < 1; i++) {

        let spongebob = new Spongebob("Not-Spongebob", 100, 175, "playerOne")
        this.add(spongebob)

        this.ui = new UI(30, 170)
        this.add(this.ui)



        let notSpongebob = new Spongebob("Not-not-Spongebob", 200, 220, "playerTwo")
        this.add(notSpongebob)

        //}

        //mine maken
        let mine = new Mine 
        this.add(mine)

        // bubbles maken
        // for (let i = 0; i < 50; i++) {
        //
        //     let bubble = new Bubble()
        //    this.add(bubble)
        //}




        //this.scoreLabel = new Label({
        //  text: 'Score: 0',
        //pos: new Vector(100, 50),
        //font: new Font({
        //  family: 'Arial',
        //size: 24,
        //unit: FontUnit.Px,
        //color: Color.White
        //})
        //})

        //this.score = 0
        //this.add(this.scoreLabel)

    }

    //addScore() {
    //console.log("Je hebt een kwal gevangen!")
    //this.score += 1
    //this.scoreLabel.text = `Score: ${this.score}`

    // }


    // dit hoort in jellyfish
    // jellyfishLeft(e) {
    //     let x = Math.random() * 800
    //     let y = Math.random() * 450
    //     e.target.pos = new Vector(x, y)

    // }

    //!hdit hoort inhuis
    // houseLeft(e) {
    //     let x = Math.random() * 800
    //     let y = Math.random() * 450
    //     e.target.pos = new Vector(100, 300)

    // }




}

// roept de game aan
new Game()
