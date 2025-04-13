import { useEffect, useState } from 'react'
import "./notepad.css"

export default function Memory() {
  const [count, setCount] = useState(3);
  const [dots, setDots] = useState(".")

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => {
        const newCount = prevCount < 4 ? prevCount + 1 : 0;

        let newDots = "";
        for (let i = 0; i < newCount; i++) {
          newDots += ".";
        }
        setDots(newDots);

        return newCount;
      });
    }, 650)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='section settings'>
      <div className='section-header'>MEMORY CARD</div>
      <div className='section-container'>
        <div>Searching for memory card{dots}</div>
      </div>
    </div>
  )
}