// changing color on mouse move

import p5 from 'p5'
import { sample, getRandomArbitrary } from '../prototypes/utilities'

const canvasSize = 600
//let tileAmount = 0
//let r = canvasSize/tileAmount

function sketch(p) {
  
  p.setup = () => {
    const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
    canvas.parent('prototype_36')
    
    

  }

  p.draw = () => {
    p.background(0)
    let tileAmount = p.map(p.mouseX, 0, p.width, 5, 20)
    let r = Math.floor(p.width/tileAmount)
    p.translate(r/2, r/2)
    for (let i = 0; i < tileAmount; i++) {
      for (let j = 0; j < tileAmount; j++) {
        p.push()
        p.translate(r * i, r * j)
        p.ellipse(0, 0, r, r)
        p.pop()

      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch)
})
