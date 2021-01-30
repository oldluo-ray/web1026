import React, { Component } from 'react'
import MouseUrl from '../assets/mouse.gif'
import position from '../position'

export default function Mouse() {
  const { x, y } = position()
  return (
    <div>
      <img
        src={MouseUrl}
        alt=""
        style={{ position: 'absolute', left: x, top: y, width: 100 }}
      />
    </div>
  )
}
