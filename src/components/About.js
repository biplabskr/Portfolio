import React from 'react'
import "./About.css"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

import { Pagination, Navigation } from 'swiper/modules';





export default function About() {


  // const [items, setItems] = React.useState(data);
  // const [selected, setSelected] = React.useState([]);

  // const isItemSelected = (id) => !!selected.find((el) => el === id);

  // const handleClick =
  //   (id) =>
  //     ({ getItemById, scrollToItem }) => {
  //       const itemSelected = isItemSelected(id);

  //       setSelected((currentSelected) =>
  //         itemSelected
  //           ? currentSelected.filter((el) => el !== id)
  //           : currentSelected.concat(id),
  //       );
  //     };

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };


  return (
    <div id='about' className='Container'>
      <div className='projects'>
        <h2 className='heading'>Projects</h2>
        <div className='project-container'>



          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="myswiper"
          >


            {
              data.map((d)=>(

                <SwiperSlide id={d.id}>
                  <a href={d.link} className='project-box'>
                    <h1 className='project-heading'>{d.title}</h1>
                    <div className='para'>{d.para}</div>
                    <div className='image-box'>
                      <img src={d.img} />
                    </div>
                  </a>
                </SwiperSlide>
  
              ))
            }
          </Swiper>

        </div>
      </div>

    </div>
  )
}



const data = [

  {
    id: 2,
    title: `GLOW BUTTON`,
    para: `A button animation when someone try to hover the pointer on button  it will give you a fluorescent look`,
    img: `https://github.com/biplabskr/glowButton/blob/master/samples/glowbtn.png?raw=true`,
    link: `https://github.com/biplabskr/glowButton`,
  },
  {
    id: 1,
    title: `BULB ANIMATION`,
    para: `A button animation when someone hover the pointer on the button it will give you a bulb animation look`,
    img: ``,
    link: `https://github.com/biplabskr/BulbAnimation`,
  },
  {
    id: 3,
    title: `KEYPAD PAGE`,
    para: `A phone keypad page made by HTML,CSS and some javaScript with a background animation into it.`,
    img: `https://github.com/biplabskr/keypadusingGrid/blob/master/sample/Screenshot%20from%202023-11-10%2013-41-44.png?raw=true`,
    link: `https://github.com/biplabskr/keypadusingGrid`,
  },
  {
    id: 4,
    title: `CODEHELP NAVBAR`,
    para: `A clone navbar of a coding website navbar with using Javascript HTML and CSS.`,
    img: `https://github.com/biplabskr/codehelp-clone-Navbar-using-flexbox/blob/master/sample/Sample1.png?raw=true`,
    link: `https://github.com/biplabskr/codehelp-clone-Navbar-using-flexbox`,
  },
  {
    id: 5,
    title: `TEXT ANIMATION`,
    para: `A clone navbar of a coding website navbar with using Javascript HTML and CSS.`,
    img: `https://github.com/biplabskr/TextAnimation/blob/master/sample/sample.png?raw=true`,
    link: `https://github.com/biplabskr/TextAnimation`,
  },
  {
    id: 6,
    title: `RESPONSIVE NAVBAR`,
    para: `A clone navbar of a coding website navbar with using Javascript HTML and CSS.`,
    img: `https://github.com/biplabskr/navbarusinggrid/blob/master/sample/sample1.png?raw=true`,
    link: `https://github.com/biplabskr/navbarusinggrid`,
  },
  {
    id: 7,
    title: `WEBSITE DESIGN`,
    para: `A clone navbar of a coding website navbar with using Javascript HTML and CSS.`,
    img: `https://github.com/biplabskr/website/blob/master/sample/sample.png?raw=true`,
    link: `https://github.com/biplabskr/website`,
  },
  {
    id: 8,
    title: `WEBSITE CLONE`,
    para: `A clone navbar of a coding website navbar with using Javascript HTML and CSS.`,
    img: ` `,
    link: `https://github.com/biplabskr/websiteClone`,
  },

]

// const LeftArrow = () => {
//   const visibility = React.useContext < publicApiType > VisibilityContext;
//   const isFirstItemVisible = visibility.useIsVisible('first', true);
//   return (
//     <Arrow
//       disabled={isFirstItemVisible}
//       onClick={visibility.scrollPrev}
//       className="left"
//     >
//       Left
//     </Arrow>
//   );
// };

// const RightArrow = () => {
//   const visibility = React.useContext < publicApiType > VisibilityContext;
//   const isLastItemVisible = visibility.useIsVisible('last', false);
//   return (
//     <Arrow
//       disabled={isLastItemVisible}
//       onClick={visibility.scrollNext}
//       className="right"
//     >
//       Right
//     </Arrow>
//   );
// };

// function Card({ title, para }) {


//   return (

//     <div className='project-box'>
//       <div className='project-info'>
//         <h4>{title}</h4>
//         <p>{para}</p>
//       </div>
//     </div>

//   );
// }
