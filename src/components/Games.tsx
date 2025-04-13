import React, { useEffect, useState } from 'react'
import "./notepad.css"

export default function Games() {
  const [count, setCount] = useState(0);
  const [dots, setDots] = useState(".")

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => {
        const newCount = prevCount < 8 ? prevCount + 1 : 0;

        let newDots = "";
        for (let i = 0; i < newCount; i++) {
          newDots += ".";
        }
        setDots(newDots);

        return newCount;
      });
    }, 460)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='section settings'>
      <div className='section-header'>GAMES</div>
      <div className='section-container'>
        <div>Searching for games{dots}</div>
      </div>
    </div>
  )
}