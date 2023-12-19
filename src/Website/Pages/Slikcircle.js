import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useEffect } from 'react';
import { useState } from 'react';
import Authuser from '../Authentication/Authuser';
const Slikcircle = () => {
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

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,

    // speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // let mydata = [{
  //   img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
  //   icon: "fa-solid fa-link fsolid",
  //   h2: "Single Item"
  // }, {
  //   img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
  //   icon: "fa-solid fa-link fsolid",
  //   h2: "Secons Item"
  // },
  // {
  //   img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
  //   icon: "fa-solid fa-link fsolid",
  //   h2: "Third Item"
  // },
  // {
  //   img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
  //   icon: "fa-solid fa-link fsolid",
  //   h2: "Four Item"
  // },
  // {
  //   img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
  //   icon: "fa-solid fa-link fsolid",
  //   h2: "Five Item"
  // },
  // {
  //   img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
  //   icon: "fa-solid fa-link fsolid",
  //   h2: "Six Item"
  // },
  // {
  //   img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
  //   icon: "fa-solid fa-link fsolid",
  //   h2: "Six Item"
  // },
  // ]



  const { http } = Authuser();
  const [Brand2, setBrand2] = useState([]);

  const getBrand1 = () => {
    http.get(`/brands`).then((res) => {

      setBrand2(res.data.brands);
    }).catch((e) => {
      // console.log(e);
    });
  }

  useEffect(() => {
    getBrand1()
  }, [])

  return (
    <div className="mt-5">
      <h1 className="Coll">Shop By Brands</h1>
      <Slider {...settings}>
        {
          Brand2.map((data) => (
            <div>

              <div id="content">
                <div id="outer-circle">

                </div>
                <div id="inner-circle">
                  <img src={data.brand_banner} className='inimg'></img>
                  <div className="inside">
                    <i class="fa-solid fa-link fsolid"></i>
                  </div>
                </div>


                <h2 className='mtext '>{data.brand_name}</h2>
              </div>

            </div>
          ))
        }

      </Slider>
      <div className='just mt-5 mb-5'>
        <button type="button" className="btn2"><i class="fa-regular fa-eye"></i> Show All Brands</button>
      </div>
    </div>
  )
}

export default Slikcircle