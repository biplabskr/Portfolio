import { useCallback, useEffect, useState } from "react";
import "./Home.css"
import Pic3 from "../Assests/Picture3.jpg"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typed from 'typed.js';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-scroll"


export default function Home() {


  useEffect(() => {
    const typed = new Typed(".span", {
      strings: ['Graduate Engineer.', 'Frontend Developer.', 'Electrical Engineer.', 'Desginer.'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    });

    Aos.init({ duration: 1000 });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (

    <div className="section" id="home">

      <div className="home">

        <div className="home-img" >

          <img src={Pic3} alt="" />

        </div>

        <div className="home-content">

          <h1>Hi, It's <span>Biplab</span></h1>
          <h3 className="typing-text">I'm a <span className="span"></span></h3>
          <p>A self determined, agile, versatile and single-minded fresher and have fondness towards
            Learning,Solving Problems and Consistency.Seeking opportunities
            in the field of Computer and Information Technology to learn more about the new Technologies.</p>

          <div className="social-icon" >

            <a href="https://www.linkedin.com/in/biplab-sarkar-1988961b3/"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/biplabskr"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100004680071252"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/extol_rabelaisian?igsh=YzljYTk1ODg3Zg=="><i className="fa-brands fa-instagram"></i></a>

          </div>

          {/* <a href="#contact" className="btn" >Hire Me</a> */}
          <Link className='btn' to='contact' activeClass='active' smooth={true} spy={true}>Hire Me</Link>

        </div>

      </div>

    </div>


  )
    ;
};


{/* <div id="home" className="Container">
<div className="Main-Container">
  <div className="left-container">
    <p className="subtitle">Hello</p>
    <h1 className="title">I'm <span>Biplab<br /> a</span> Graduate Engineer
    </h1>
    <p className="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div className="btns">
      <button className="downloadcv">DownloadCV</button>
      <button className="hireme">Hireme</button>
    </div>


  </div>
  <div className="right-container">

    <div className="image">
      <img src={Pic} alt="picture"/>
    </div>


  </div>
</div>
</div> */}
