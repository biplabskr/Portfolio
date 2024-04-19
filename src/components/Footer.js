import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div id="footer" className='container'>
      <div className='footer'>
        <div className='social'>
            <a href='#'><i className="fa-brands fa-linkedin"></i></a>
            <a href='#'><i className="fa-brands fa-square-instagram"></i></a>
            <a href='#'><i className="fa-brands fa-facebook"></i></a>
            <a href='#'><i className="fa-brands fa-x-twitter"></i></a>
        </div>
        <ul>
            <li><a href='#'>FAQ</a></li>
            <li><a href='#'>Service</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>Privacy Policies</a></li>
        </ul>
        <p className='copyright'>
            &copy; Biplab Sarkar | All Right Reserved
        </p>
      </div>
    </div>
  )
}
