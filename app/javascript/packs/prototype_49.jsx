import React from 'react'
import ReactDOM from 'react-dom'

import Container from '../prototypes/prototype_49/Container'
import { initSketch } from '../prototypes/prototype_49/sketch'

import {
  getStoreShift,
  setStoreShift,
  getStoreEnthropy,
  setStoreEnthropy,
  getStoreEffect,
  setStoreEffect
} from '../prototypes/prototype_49/store'

const props = {
  shift: getStoreShift(),
  enthropy: getStoreEnthropy(),
  effect: getStoreEffect()
}

const actions = {
  setStoreShift,
  setStoreEnthropy,
  setStoreEffect
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_49')
  ReactDOM.render(
    <Container initSketch={initSketch} {...props} {...actions} />,
    container
  )
})