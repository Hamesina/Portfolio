import React from 'react'
import Slider from "react-slick"
import Project from "./Project"
import image1 from "../img/Home page.png"
import image2 from "../img/about.png"
import image3 from "../img/review.png"
import image4 from "../img/resource.png"
import image5 from "../img/login-.png"
import image6 from "../img/admin-page.png"
import image7 from "../img/admin-page2.png"
import image8 from "../img/teacher-page.png"


let data = [
  {
    img: image1,
    desc: "This is the landing page of the school website."
  },
  {
    img: image2,
    desc: "The about page gives us the necessary information of the school: history, mission, vision and values"
  },
  {
    img:image3,
    desc: "It has an interactive and responsive footer that includes links and also a newsletter."
  },
  {
    img: image4,
    desc: "The coursees page enables the students as well as teachers to access the necessary resources with just a click."
  },
  {
    img:image5,
    desc: "Here is the login page that allows multi users to sign in; namely, students, teachers and the admin, It has its own proper validation controls with encrypted passwords"
  },
  {
    img:image6,
    desc: "This is the dashboard of the admin after signing in,, developed using bootstrap"
  },
  {
    img:image7,
    desc: "This showcases the roles of the admin, which is adding, deleting as well as updating the informations of students, teachers and classes"
  },
  {
    img:image8,
    desc: "This is the teacher's page after logging in, where a teacher can assign grades, view profile and update it"
  },

];

var settings = {
  //className: "center",
  //centerMode: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};




const SliderComp = () => {
  let sliderProject = "";
  sliderProject = data.map((item,i) => (
    <Project item = {item} key={i}/>
  ))
  return (
    <div>
      <Slider {...settings}>
        {sliderProject}
      </Slider>
    </div>
)
  }
export default SliderComp