// hypno circles

import p5 from 'p5'
import { sample, getRandomArbitrary } from '../prototypes/utilities'

const canvasSize = 700
let tileAmount = 10
let r = canvasSize/tileAmount
let colors = ['#62FFF6', '#FF6287', '#25D96D', '#FF7A00', '#DFFF1D', '#FFFFFF']

function sketch(p) {
  
  p.setup = () => {
    const canvas = p.createCanvas(canvasSize, canvasSize)
    canvas.parent('prototype_43')
    p.background(0)
    p.noStroke()
    p.fill(p.random(colors))

  }

  p.draw = () => {
    p.background(0, 2)
    p.translate(r/2, r/2)
    for (let i = 0; i < tileAmount; i++) {
      for (let j = 0; j < tileAmount; j++) {

        let x = p.map(p.sin(p.radians(p.frameCount + i * 10 + j * 10)), -1, 1, -15, 15)
        let y = p.map(p.cos(p.radians(p.frameCount + i * 10 + j * 10)), -1, 1, -15, 15)

        p.push()
        p.translate(r * i, r * j)
        p.scale(.6)
        
        p.ellipse(x, y, r, r)
        p.pop()

      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch)
})


