import React from 'react'
import "./Work.css"

export default function Work() {
  return (
    <div id="work" className='Container'>

      <div className='skills'>

        <h2 className='heading'> My <span>Skills</span></h2>
        <div className='skills-row'>
          <div className='skills-column'>
            <h3 className='title'>Coding Skills</h3>

            <div className='skills-box'>
              <div className='skills-content'>

                <div className='progress'>
                  <h3>HTML <span>80%</span></h3>
                  <div className='bar'><span></span></div>
                </div>

                <div className='progress'>
                  <h3>CSS <span>80%</span></h3>
                  <div className='bar'><span></span></div>
                </div>

                <div className='progress'>
                  <h3>JavaScript <span>60%</span></h3>
                  <div className='bar'><span></span></div>
                </div>

                <div className='progress'>
                  <h3>C++ <span>70%</span></h3>
                  <div className='bar'><span></span></div>
                </div>
              </div>
            </div>
          </div>

          <div className='skills-column'>
            <h3 className='title'>Professional Skills</h3>

            <div className='skills-box'>
              <div className='skills-content'>

                <div className='progress'>
                  <h3>Web Development <span>80%</span></h3>
                  <div className='bar'><span></span></div>
                </div>

                <div className='progress'>
                  <h3>Web Design <span>70%</span></h3>
                  <div className='bar'><span></span></div>
                </div>

                <div className='progress'>
                  <h3>Graphic Design <span>50%</span></h3>
                  <div className='bar'><span></span></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
