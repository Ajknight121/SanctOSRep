import { TimeStampProps } from './VideoContext'

export default function TimeStamp({timePercent, name}: TimeStampProps) {
  return (
    <div className='timestamp' style={{left:`${timePercent}%`}}>

    </div>
  )
}
