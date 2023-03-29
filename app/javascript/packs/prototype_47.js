// RASTERIZE IMAGE

import p5 from 'p5'
import html2canvas from 'html2canvas'
import { getRandomArbitrary, generateHash } from '../prototypes/utilities'

import image1Url from '../../assets/images/deepface-dark-green-black.png'
import image2Url from '../../assets/images/abstract1.png'

let img, 
    colorFG = '#111111',
    colorBG = '#f1f1f1';




function sketch(p) {
  let sizes = [5, 10, 25, 50, 100, 125]
  let randomSize = p.random(sizes.length)
  randomSize = p.floor(randomSize)
  let tileSize = 10;

  p.preload = () => {
    img = p.loadImage(image2Url);
  }

  p.setup = () => {
    const canvas = p.createCanvas(500, 250)
    canvas.parent('prototype_47')
    p.background(0)
    p.image(img, 0, 0)
    img.resize(p.width, 0)
  }

  p.draw = () => {
    p.background(0);
    p.fill(colorFG);
    p.noStroke();
     
     
     let tilesX = p.width / tileSize;
     console.log(p.width)
     tilesX = p.floor(tilesX)
     let tilesY = p.height / tileSize;
     tilesY = p.floor(tilesY)
    
     for (let y = 0; y < tilesY; y++) {
       for (let x = 0; x < tilesX; x++) {
         let c = img.get(tileSize*x, tileSize*y);
         let b = p.map(p.brightness(c), 0, 255, 1, 0);
         p.fill(255)
         p.push();
         p.translate(tileSize*x, tileSize*y);
         //p.rect(0, 0, b * tileSize, b * tileSize);
         p.ellipseMode(p.CORNER)
         p.ellipse(0, 0, b * tileSize, b * tileSize)
         p.pop();
       }
     }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new p5(sketch)
})
