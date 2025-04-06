import React from 'react'
import { TimeStampProps } from './MediaControl'

export default function TimeStamp({timePercent, name}: TimeStampProps) {
  return (
    <div className='timestamp' style={{left:`${timePercent}%`}}>

    </div>
  )
}
