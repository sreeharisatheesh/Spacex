import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='banner-container'>

            <div className='first-text'>
                <h4 className='lighterone'>UPCOMING LAUNCH</h4>
                <br></br>
                <h1 className='bolderone'>POLARIS DAWN</h1>
                <br></br>
                <button className='watchone'>WATCH</button>
            </div>
            <div className='second-text'>
                <h4 className='lighterone'>RECENT LAUNCH</h4>
                <br></br>
                <h1 className='bolderone'>STARLINK MISSION</h1>
                <br></br>
                <button className='watchone'>WATCH</button>
            </div>
            <div className='third-text'>
                <h4 className='lighterone'>UPCOMING LAUNCH</h4>
                <br></br>
                <h1 className='bolderone'>STARLINK MISSION</h1>
                <br></br>
                <button className='watchone'>WATCH</button>
            </div>
            <div className='fourth-text'>
                <h4 className='lighterone'>ADVANCING HUMAN</h4>
                <br></br>
                <h1 className='bolderone'>SPACEFLIGHT</h1>
                <br></br>
                <button className='watchone'>LEARN MORE</button>
            </div>
            <div className='fifth-text'>
                <h4 className='lighterone'>TO MAKE LIFE</h4>
                <br></br>
                <h1 className='bolderone'>MULTIPLANETARY</h1>
                <br></br>
                <button className='watchone'>LEARN MORE</button>
            </div>
            <footer>
                <div className='footer'>
                    <p>SpaceX © 2024</p>
                    <p>PRIVACY POLICY</p>
                    <p>SUPPLIERS</p>
                </div>
            </footer>
    </div>
  )
}

export default Banner
