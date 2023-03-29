// wave gradient

import p5 from 'p5'
import { sample, getRandomArbitrary } from '../prototypes/utilities'

const canvasSize = 600
const diaMin = 50
const diaMax = getRandomArbitrary(200, 600)
const diaStep = 20

let xx, yy

function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
    canvas.parent('prototype_40')
    p.noFill()
    p.strokeWeight(diaStep/4)
    //p.blendMode(p.DIFFERENCE)

    //p.background(0)
  }

  p.draw = () => {
    p.background(0)
    p.translate(p.width/2, p.height/2)

    xx = p.map(p.sin(p.radians(p.frameCount)), -1, 1, -100, 100)
    yy = p.map(p.cos(p.radians(p.frameCount)), -1, 1, -100, 100)
    
    for (let dia = diaMin; dia < diaMax; dia+=diaStep) {
      p.stroke('#6157CD')
      p.ellipse(-xx, 0, dia, dia)
      p.stroke('#B0C23E')
      p.ellipse(xx, yy, dia, dia)
      p.stroke('#D27B4A')
      p.ellipse(-xx*2, -yy*2, dia, dia)
    }
    
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch)
})
