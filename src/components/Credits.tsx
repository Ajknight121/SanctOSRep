import React, { useState } from 'react'
import "./notepad.css"


export default function Credits() {
  
  return (
    <div className='section credits'>
      <div className='section-header'>Credits</div>
      <div className='section-container'>
        <div className='head'>Original design and music by:</div>
        <div><a href="www.youtube.com/@Dusqk">DUSQK</a></div>
        <div>Original Video:</div>
        <div className="sub"><a href="https://youtu.be/d3KfkKXRDzk">https://youtu.be/d3KfkKXRDzk</a></div>
        <br/>
        <div>Recreation by:</div>
        <div>Ajknight</div>
      </div>
    </div>
  )
}