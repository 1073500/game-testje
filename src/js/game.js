import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Label, Font, FontUnit, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Spongebob } from './spongebob.js'
import { Bubble } from './bubble.js'
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
        this.showDebug(true)
        this.start(ResourceLoader).then(() => this.startGame())
    }

    // starten van de game
    startGame() {
        let score = 0


        // achtergrond van game
        let sea = new Actor()
        sea.graphics.use(Resources.BG.toSprite())
        //sea.pos = new Vector(400, 450 / 2)
        sea.scale = new Vector(1.3, 1.3)
        sea.anchor = new Vector(0, 0) //makkelijk afbeelding centeren
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




        this.scoreLabel = new Label({
            text: 'Score: 0',
            pos: new Vector(100, 50),
            font: new Font({
                family: 'Arial',
                size: 24,
                unit: FontUnit.Px,
                color: Color.White
            })
        })

        this.add(this.scoreLabel)
        //this.scoreLabel.text = `Score: ${score}`


        // kwallen maken
        // loop die 20 kwallen maakt en ze random op het scherm plaatst
        // alle code van de kwal zit in de loop
        for (let i = 0; i < 5; i++) {

            // de kwal is een actor die een sprite gebruikt
            let jellyfish = new Jellyfish()

            this.add(jellyfish)
        }

        // spongebob maken
        for (let i = 0; i < 1; i++) {

            let spongebob = new Spongebob()
            this.add(spongebob)

        }

        // bubbles maken
        for (let i = 0; i < 50; i++) {

            let bubble = new Bubble()
            this.add(bubble)
        }



    }

    addScore() {
        score ++
        this.scoreLabel.text = `Score: ${score}`
        console.log("Je hebt een kwal gevangen!")
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
