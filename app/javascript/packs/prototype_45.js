// GRADIENTS

import p5 from 'p5'
import { sample, getRandomArbitrary } from '../prototypes/utilities'

let clearCanvas = false

const canvasWidth = 500
const canvasHeight = 700

const Y_AXIS = 1
const X_AXIS = 2

const gradientColors = [
  '#FFA4EC',
  '#FFFFFA',
  '#FFEC84',
  '#751C20',
  '#4FA99D',
  '#01529D',
  '#011A31',
  '#C6AFFC',
  '#ABE1B4',
  '#FDAB5C',
  '#1EA6CB'
]
let c1, c2, c3, c4, c5
let randomColor,
  randomColor1,
  randomColor2,
  randomColor3,
  randomColor4,
  randomColor5

function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(canvasWidth, canvasHeight)
    canvas.parent('prototype_45')
    p.background(0)

    randomColor1 = p.random(gradientColors.length)
    randomColor1 = p.floor(randomColor1)

    randomColor2 = p.random(gradientColors.length)
    randomColor2 = p.floor(randomColor2)

    randomColor3 = p.random(gradientColors.length)
    randomColor3 = p.floor(randomColor3)

    randomColor4 = p.random(gradientColors.length)
    randomColor4 = p.floor(randomColor4)

    randomColor5 = p.random(gradientColors.length)
    randomColor5 = p.floor(randomColor5)

    c1 = p.color(gradientColors[randomColor1])
    c2 = p.color(gradientColors[randomColor2])
    c3 = p.color(gradientColors[randomColor3])
    c4 = p.color(gradientColors[randomColor4])
    c5 = p.color(gradientColors[randomColor5])

    //p.noLoop()
  }

  p.draw = () => {

    

    setGradient(0, 0, canvasWidth, canvasHeight / 4, c1, c2, Y_AXIS)
    setGradient(
      0,
      canvasHeight / 4,
      canvasWidth,
      canvasHeight / 4,
      c2,
      c3,
      Y_AXIS
    )
    setGradient(
      0,
      canvasHeight / 2,
      canvasWidth,
      canvasHeight / 4,
      c3,
      c4,
      Y_AXIS
    )
    setGradient(
      0,
      (canvasHeight / 4) * 3,
      canvasWidth,
      canvasHeight / 4,
      c4,
      c5,
      Y_AXIS
    )

    if (clearCanvas) {
      p.fill(255)
      p.rect(0, 0, 200, 200)
      clearCanvas = false
    }
  }

  function setGradient(x, y, w, h, c1, c2, axis) {
    p.noFill()

    if (axis === Y_AXIS) {
      // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        let inter = p.map(i, y, y + h, 0, 1)
        let c = p.lerpColor(c1, c2, inter)
        p.stroke(c)
        p.line(x, i, x + w, i)
      }
    } else if (axis === X_AXIS) {
      // Left to right gradient
      for (let i = x; i <= x + w; i++) {
        let inter = p.map(i, x, x + w, 0, 1)
        let c = p.lerpColor(c1, c2, inter)
        p.stroke(c)
        p.line(i, y, i, y + h)
      }
    }
  }

  function changeGradient() {
    randomColor1 = p.random(gradientColors.length)
    randomColor1 = p.floor(randomColor1)

    randomColor2 = p.random(gradientColors.length)
    randomColor2 = p.floor(randomColor2)

    randomColor3 = p.random(gradientColors.length)
    randomColor3 = p.floor(randomColor3)

    randomColor4 = p.random(gradientColors.length)
    randomColor4 = p.floor(randomColor4)

    randomColor5 = p.random(gradientColors.length)
    randomColor5 = p.floor(randomColor5)

    c1 = p.color(gradientColors[randomColor1])
    c2 = p.color(gradientColors[randomColor2])
    c3 = p.color(gradientColors[randomColor3])
    c4 = p.color(gradientColors[randomColor4])
    c5 = p.color(gradientColors[randomColor5])
  }

  const changeGradientButton = document.createElement('div')
  changeGradientButton.classList.add('changeGradientButton')
  changeGradientButton.innerText = 'Change Gradient'
  document.body.appendChild(changeGradientButton)

  changeGradientButton.addEventListener('click', () => {
    console.log('changeGradientButton')
    changeGradient()
  })
}

const resetButton = document.createElement('div')
  resetButton.classList.add('resetButton')
  resetButton.innerText = 'Clear'
  document.body.appendChild(resetButton)

  resetButton.addEventListener('click', () => {
    clearCanvas = true
  })

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch)
})
