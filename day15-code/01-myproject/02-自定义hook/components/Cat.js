import React, { Component } from 'react'
import CatUrl from '../assets/cat.gif'

import position from '../position'

export default function Cat() {
  let { x, y } = position()
  x += 200
  y -= 50
  return (
    <div>
      <img
        src={CatUrl}
        alt=""
        style={{ position: 'absolute', left: x, top: y }}
      />
    </div>
  )
}
