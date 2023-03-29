// wave gradient

import p5 from 'p5'
import { sample, getRandomArbitrary } from '../prototypes/utilities'

const canvasSize = 600
const elSize = 15
let mag = 400
let amount = 100

function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
    canvas.parent('prototype_39')
    p.noStroke()
    p.background(0)
  }

  p.draw = () => {
    //p.background(0)
    p.translate(p.width/2, p.height/2)
    for (let i = 0; i < amount; i++) {
      let w = p.map(p.sin(p.radians(p.frameCount + i)), -1, 1, -100, 100)
      let wave1 = p.map(p.tan(p.radians(p.frameCount * 2 + i + w)), -1, 1, -100, 100)
      let wave2 = p.map(p.sin(p.radians(p.frameCount + 2*i)), -1, 1, -mag, mag)
      let c = p.map(p.sin(p.radians(p.frameCount * 5 + i)), -1, 1, 0, 255)
      p.fill(c, 100, c)
      p.rect(wave1, wave2, elSize, elSize)
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch)
})
