import React from 'react'
import './Banner.css'

export default function Banner() {
  return (
    <div id='banner' className='Container'>

      <div className='education ' >

        <h2 className='heading'> My <span>Education</span></h2>

        <div className='timeline'>
          <div className='container right'>
            <div className='content'>
              <div className='tag'>
                <h2>Kendriya Vidyalaya Garden Reach</h2>
              </div>
              <div className='decs'>
                <p> i have done my upto 10th academic(2016) from there and learned great facts from teachers and had great oppurtunites to build my skill career.
                </p>
              </div>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <div className='tag'>
                <h2>Central Model School</h2>
              </div>
              <div className='decs'>
                <p> i have done 11th class and 12th boards(2018) with computer science stream and learned about the technologies and coding from there. </p>
              </div>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <div className='tag'>
                <h2>Netaji Subhash Engineering College</h2>
              </div>
              <div className='decs'>
                <p> I have done my bachelor program with 81% and specialised in Electrical Engineering.</p>
              </div>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <div className='tag'>
                <h2>Ardent Computech pvt ltd.</h2>
              </div>
              <div className='decs'>
                <p> We have made an Android Application and was based on online education platform.it was an internship of 1 month in kolkata</p>
              </div>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <div className='tag'>
                <h2>Teachnook</h2>
              </div>
              <div className='decs'>
                <p> I have learned about how the cloud functions and its features,made some projects thats are based on cloud and also hosted some website on cloud.it was 2 month internship </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
