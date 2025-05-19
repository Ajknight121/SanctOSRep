import "./notepad.css"


export default function Credits() {
  
  return (
    <div className='section credits'>
      <div className='section-header'>CREDITS</div>
      <div className='section-container credits'>
        <div className='head'>Original design and music by:</div>
        <div><a href="https://www.youtube.com/@Dusqk" target="_blank">DUSQK</a></div>
        <div>Original Video:</div>
        <div className="sub"><a href="https://youtu.be/d3KfkKXRDzk">https://youtu.be/d3KfkKXRDzk</a></div>
        
        <p>Join the Official DUSQK discord <a href="https://discord.com/invite/sNrzkaAWmY" target='_blank'>HERE</a> to follow their official projects!</p>

        <div>This fan recreation by:</div>
        <div><a href='https://github.com/Ajknight121/SanctOSRep' target='_blank'>@Ajknight</a></div>
        This is a personal project I made for educational/fun purposes. I do not claim any ownership of the original concept.
      </div>
      <div className="arrow-down"></div>
      <div className="arrow-up"></div>
    </div>
  )
}