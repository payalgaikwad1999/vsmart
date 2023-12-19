import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {

  let mydata = [{
    icon: "fa-solid fa-apple-whole",
    h5: "Free Shipping",
    p: "VS Mart, gives product delivery for all customers free that is plus point of order."
  },
  {
    icon: "fa-solid fa-truck",
    h5: "Gift Cards",
    p: "VS Mart, Gives every customer reward points or saving as theire customer type. It's make to happy customer and continue to joined together as like Mart and Card. Gifts gives to customers reward points"
  },
  {
    icon: "fa-solid fa-code-compare",
    h5: "Reward Points",
    p: "VS Mart, Gives every customer reward points or saving as theire customer type. It's make to happy customer and continue to joined together as like Mart and Card."
  },
  {
    icon: "fa-solid fa-user",
    h5: "Easy Return",
    p: "One major factor that dictates where online shoppers make purchases is whether you have a clear and generous eCommerce returns policy. Studies have shown that solid return policies increase sales without increasing the volume of return."
  },
  ]

  return (
    <div className='index-about'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='shop-bg-main'>
            <h1 className='package2'>ABOUT OUR COMPANY</h1>
            <Link className='pa1'><span style={{ color: "white" }}> <i class="fa-solid fa-house fa-beat me-2" ></i></span>Home /<span>About</span></Link>

          </div>
        </div>
      </div>
      <div className='container' style={{ marginTop: "100px", marginBottom: "100px" }}>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-6 col-12'>
            <h1 style={{ fontSize: "45px" }}>Vishwakarma Super Mart Private Limited</h1>
            <p style={{ fontSize: "15px", color: "black" }}>is a direct selling company that deals with the distribution of a wide range of high quality, lifestyle products for day to day life. Our aim is to deliver the best products directly to our consumers, who form the core of the company. Our networks of registered distributors are trained leaders and representatives who ensure that consumers get the best products, with additional free business opportunity benefits. The profitable opportunities offered have influenced many customers to purchase products from non-retail environments, owing to the expansion of direct selling across the country.</p>
          </div>
          <div className='col-lg-3 col-md-3 col-12'>
            <div>
              <img src='https://vsmart.ajspire.com/images/about1.png' style={{ width: "250px" }}></img>
            </div>
          </div>
          <div className='col-lg-3 col-md-3 col-12'>
            <div>
              <img src='https://vsmart.ajspire.com/images/about2.png' style={{}}></img>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>


      <div className='container' style={{ marginTop: "80px", marginBottom: "100px" }}>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-6 col-12'>
            <h1 style={{ fontSize: "45px", color: "orangered", marginBottom: "40px" }}>
              Our Vision</h1>
            <p style={{ fontSize: "15px", color: "black" }}>Vishwakarma Super Mart Private Limited to strive hard continuously and constantly to make every individual customer financially self-reliant, economically and socially strong through the self - help team concept.</p>
          </div>
          <div className='col-lg-6 col-md-6 col-12'>
            <h1 style={{ fontSize: "45px", color: "orangered", marginBottom: "40px" }}>
              Our Mission</h1>
            <p style={{ fontSize: "15px", color: "black" }}>Vishwakarma Super Mart Private Limited has vision to create wealth that provides personal, professional, social, financial and spiritual growth to everyone. We aim to provide the highest level of quality and service possible with respect to the products and services that we offer and strive to create an environment and culture that lends itself to our distributor’s success.</p></div>

        </div>
      </div>
      <hr></hr>
      <div className='container'>
        <div className="centeredText" style={{ marginBottom: "50px" }}>
          <h1 className='' style={{ fontSize: "43px" }}>Why People Choose Their Daily <br></br> Organic Life With Us</h1>
        </div>
        <div className='row'>
          {
            mydata.map((data) => (
              <div className='col-lg-6 col-md-6 col-12'>
                <div className="" style={{ maxWidth: 600, marginBottom: "50px" }}>
                  <div className="row g-0">
                    <div className="col-md-4 align-items-center justify-content-center  d-flex">
                      <div className='about-circle'>
                        <i class={data.icon}></i>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title mb-3" style={{ fontSize: "25px" }}>
                          {data.h5}</h5>
                        <p className="card-text" style={{ fontSize: "14px", color: "black" }}>{data.p}</p>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default About