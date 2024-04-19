import React, { useCallback, useEffect, useState } from 'react'
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "tsparticles-slim"
import Banner from "./Banner"
import Service from "./Service"
import Work from "./Work"
import Home from "./Home"
import About from "./About"
import Nav from "./Nav"
import Contact from './Contact';
import Footer from './Footer';


export default function Background() {

    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);

        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {

    };



    return (

        <>


            <Particles className='Background' id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#0d47a1",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 50,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 4,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 250,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }} />

            <Nav />


            <Home />
            <Banner />
            <Service />
            <Work />
            <About />
            <Contact />
            <Footer/>

        </>






    )
}
