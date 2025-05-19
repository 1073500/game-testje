import { Actor, Label, Font, FontUnit, Color, Vector } from "excalibur"

export class UI extends Actor {

    scoreLabel
    score

    constructor() {
        super()
        console.log("ik ben de ui")
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
        this.score = 0
        this.addChild(this.scoreLabel)
        this.scoreLabel.text = `Score: 0`

        
    }

    addScore() {
        console.log("add score")
        this.score += 1
        this.scoreLabel.text = `Score: ${this.score}`

    }
}