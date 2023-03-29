// wave gradient

import p5 from 'p5'
import { sample, getRandomArbitrary } from '../prototypes/utilities'

const canvasSize = 600
const elSize = 20
let mag = 400

function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(canvasSize, canvasSize)
    canvas.parent('prototype_38')
    p.noStroke()
    p.background(0)
  }

  p.draw = () => {
    p.translate(p.width/2, p.height/2)
    for (let i = 0; i < 100; i++) {
      let w = p.map(p.sin(p.radians(p.frameCount)), -1, 1, -100, 100)
      let wave1 = p.map(p.sin(p.radians(p.frameCount * 0.8 + i + w)), -1, 1, -mag, mag)
      let wave2 = p.map(p.cos(p.radians(p.frameCount)), -1, 1, -mag, mag)
      let c = p.map(p.sin(p.radians(p.frameCount * 8 + i)), -1, 1, 0, 255)
      p.fill(c)
      p.rect(wave1, wave2, elSize, elSize)
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch)
})
