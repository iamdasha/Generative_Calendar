// arc grid

import p5 from 'p5'
import { sample, getRandomArbitrary } from '../prototypes/utilities'

const canvasSize = 600
let tileAmount = 6
let r = canvasSize/tileAmount

function sketch(p) {
  
  p.setup = () => {
    const canvas = p.createCanvas(canvasSize, canvasSize)
    canvas.parent('prototype_37')
    p.noStroke()

  }

  p.draw = () => {
    p.background(0)
    let colorWave = p.map(p.sin(p.radians(p.frameCount)), -1, 1, 100, 255)
    p.fill(255, 0, 255)
    //let selector = Math.floor(p.random(5))
    //let tileAmount = p.map(p.mouseX, 0, canvasSize, 5, 20)
    //let r = Math.floor(canvasSize/tileAmount)
    for (let i = 0; i < tileAmount; i++) {
      for (let j = 0; j < tileAmount; j++) {

        let wave = p.sin(p.radians(p.frameCount + i * 10 + j * 10))
        let mappedWave = p.map(wave, -1, 1, 0, 5);

        let selector = Math.floor(mappedWave)

        p.push()
        p.translate(r * i, r * j)
        if (selector == 0) {
          p.arc(0, 0, 2*r, 2*r, p.radians(0), p.radians(90))
        } else if (selector == 1) {
          p.arc(r, 0, 2*r, 2*r, p.radians(90), p.radians(180))
        } else if (selector == 2) {
          p.arc(r, r, 2*r, 2*r, p.radians(180), p.radians(270))
        } else if (selector == 3) {
          p.arc(0, r, 2*r, 2*r, p.radians(270), p.radians(360))
        } else {
          p.rect (0, 0, r, r)
        }
      
        
        p.pop()

      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch)
})
