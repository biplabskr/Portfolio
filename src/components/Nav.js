import React, { useState } from 'react'
import './Nav.css'
import { Link } from "react-scroll"

export default function Nav() {

    // useState(() => {

    //     window.addEventListener("scroll", function () {
    //         var header = document.querySelector(".Main-Header");
    //         header.classList.toggle("sticky", window.scrollY > 0)
    //     })
    // })

    const [click, setClick] = useState(1);

    const handleclicked = () => {

        if (click) {
            setClick(0);
        } else {
            setClick(1);
        }

    }

    return (

        <>




            <div className="Main-header">

                <Link className='logo' to='home' activeClass='active' smooth={true} spy={true}><svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path> </svg></Link>

                <div>

                    <ul id='Nav-menu' className={click ? "#Nav-menu" : "active"}>

                        <li><Link className='Link' to='home' activeClass='active' smooth={true} spy={true} >About</Link></li>
                        <li><Link className='Link' to='banner' activeClass='active' smooth={true} spy={true} >Education</Link></li>
                        <li><Link className='Link' to='service' activeClass='active' smooth={true} spy={true}>Services</Link></li>
                        <li><Link className='Link' to='work' activeClass='active' smooth={true} spy={true}>Skills</Link></li>
                        <li><Link className='Link' to='about' activeClass='active' smooth={true} spy={true}>Projects</Link></li>
                        <li><Link className='Link' to='contact' activeClass='active' smooth={true} spy={true}>Contact</Link></li>

                    </ul>

                </div>

                <div className='Mobile' onClick={handleclicked}>

                    <i className={click ? "fas fa-bars" : "fas fa-times"}></i>


                </div>

            </div>



        </>


    )
}
