import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='container footer' >
      <div className='row'>
        <div className='col-lg-4 col-md-8 col-12'>
          <div>
            <a><img src='https://vsmart.ajspire.com/images/logo1.png'></img></a>
          </div>
          <div>
            <p className='mt-5 para'>Vishwakarma Super Mart Private Limited, is a direct selling company that deals with the distribution of a wide range of high quality, lifestyle products for day to day life.</p>
          </div>
          <div className='social-links'>
            <Link><i class="fa-brands fa-facebook-f  face "></i></Link>
            <Link><i class="fa-brands fa-twitter"></i></Link>
            <Link><i class="fa-brands fa-linkedin"></i></Link>
            <Link><i class="fa-brands fa-instagram"></i></Link>
            <Link><i class="fa-brands fa-pinterest-p"></i></Link>
          </div>
        </div>
        <div className='col-lg-4 col-md-8 col-12'>
          <h1 className='contact'>Contact Us</h1>
          <ul>
            <li><i class="fa-solid fa-at cicon"></i><Link className='tcon'>vsmart0932@gmail.com</Link></li>
            <li><i class="fa-solid fa-mobile-screen cicon"></i><Link className='tcon'>  +91 7262986567</Link></li>
            <li><i class="fa-solid fa-location-dot cicon"></i><Link className='tcon'>A/P  Someshwar, 2978 Nira Road, Tal - Baramati, Dist. Pune Pin 415501</Link></li>



          </ul>
          <div>
            <p> </p>
          </div>
        </div>
        <div className='col-lg-4 col-md-8 col-12'>
          <h1 className='contact'>Quick Link</h1>

          <div className='quic'>
            <p className='textp'><Link to='' className='textp'>Download</Link></p>
            <p className='textp'><Link to='' className='textp'>Legal</Link></p>
            <p className='textp'><Link to='' className='textp'>Login</Link></p>
            <p className='textp'><Link to='' className='textp'>Term And Conditions</Link></p>
            <p className='textp'><Link to='' className='textp'>Privacy Policy</Link></p>
          </div>

        </div>
      </div>
      <div className='Sub '>
        <div className='row '>
          <div className='col-lg-6 col-md-6 col-12'>
            <p className='ptex1 '> V S Mart | © Copyright 2022 by <Link className='lin'> V S Mart  </Link>   All Rights Reserved</p>
          </div>
          <div className='col-lg-6 col-md-6 col-12'>
            <p className='ptex'>Designed by <Link className='lin'> Ajspire Technologies Pvt.Ltd</Link> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer