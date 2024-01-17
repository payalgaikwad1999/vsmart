import React, { useEffect, useState } from 'react'
import { Carousel, Nav } from 'react-bootstrap'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from '../Pages/Product';
import Items from '../Pages/Items';
import Authuser from '../Authentication/Authuser';

import Slikcircle from '../Pages/Slikcircle';
import Newm from '../Pages/Newm';
const Index = () => {
  const { http } = Authuser();
  const [Slider1, setSlider1] = useState([]);
  const [Slider2, setSlider2] = useState([]);

  const getSlider = () => {
    http.get(`/banners`).then((res) => {

      setSlider1(res.data.banners);
    }).catch((e) => {
      // console.log(e);
    });
  }
  const getSlider3 = () => {
    http.get(`/categories`).then((res) => {
      console.log(res);
      setSlider2(res.data.categories);
    }).catch((e) => {
      // console.log(e);
    })
  }

  useEffect(() => {
    getSlider()
    getSlider3()
  }, [])



  // slik carousel
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />

    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }]
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling
    });
  };

  // Show/hide scroll to top button based on scroll position
  const scrollFunction = () => {
    const scrollToTopButton = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  };

  // Handle scroll event
  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <div className='indexmain'>

    
      <div className="container-fluid" >
        <div className='container' >
          <Carousel>
            {
              Slider1.map((slider) => (
                <Carousel.Item>
                  <img className='caro' src={slider.slider_image}></img>
                </Carousel.Item>

              ))
            }
          </Carousel>
        </div>
      </div>

      {/* banner start*/}
      <div className='container'>
        <h1 className='best'>Best Deals</h1>
        <img className="b" src='https://vsmart.ajspire.com/uploads/slider/1667297122.jpg'></img>
      </div>
      {/* banner end*/}



      {/*slik carousel start*/}

      <div className='container mt-5 p-5'>
        <Slider {...settings}>
          {Slider2.map((imageUrl, index) => (
            <div className='card1' key={index}>
              <img className='simg' src={imageUrl.category_banner} />
            </div>
          ))}
        </Slider>
      </div>
      {/*slik carousel end*/}
      <div className='container'>
        <div className='row'>
          <Product></Product>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <Items></Items>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <Slikcircle></Slikcircle>
        </div>
      </div>
      {/*<div className='container'>
        <div className='row'>
          <Newm></Newm>
        </div>
          </div>*/}
          <button className='scroll-btn' onClick={scrollToTop} id="scrollToTopBtn" style={{ display: 'none' }} ><i class="fa-solid fa-arrow-up scroll-icon"></i></button>
    </div>
  )
}

export default Index                                