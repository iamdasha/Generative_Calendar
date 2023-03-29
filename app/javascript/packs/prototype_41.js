// flower

import p5 from 'p5'
import { sample, getRandomArbitrary } from '../prototypes/utilities'

const canvasSize = 700
const r = 3

let slider, slider2, button

function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(canvasSize, canvasSize)
    canvas.parent('prototype_41')
    p.noStroke()
    slider = p.createSlider(1, 10, 2)
    slider.position(10, 10)
    slider.style('width', '20%')
    slider2 = p.createSlider(0, 255, 100)
    slider2.position(10, 30)
    slider2.style('width', '20%')
  }

  p.draw = () => {
    p.background(5)
    let step = slider.value();
    let blue = slider2.value();

    p.translate(p.width / 2, p.height / 2)
    p.rotate(p.frameCount * 0.01)
    //p.scale(2)

    for (let i = 0; i < 360; i += 180) {
      for (let q = 160; q > 0; q -= step) {
        let angle = p.sin(p.radians(i * r + q + p.frameCount)) * q
        let x = p.sin(p.radians(i + angle)) * (q * 2)
        let y = -p.cos(p.radians(i + angle)) * (q * 2)
        p.strokeWeight(2)
        p.stroke(255, 0, blue)
        p.line(x, y, -x, -y)
        p.line(y, x, -y, -x)
      }
    }
    
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch)
})
