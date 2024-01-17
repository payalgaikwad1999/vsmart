import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Bankingdetails = () => {
      // arrowup
      const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling
        });
    };
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
        <div className='index-about'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='shop-bg-main'>
                        <h1 className='package2'>BANKING DETAILS</h1>
                        <Link className='pa1'><span style={{ color: "white" }}> <i class="fa-solid fa-house fa-beat me-2" ></i></span>Home /<span>Banking Details</span></Link>

                    </div>
                </div>
            </div>
            <div className='container' style={{ marginTop: "100px" }}>
                <div className="centeredText" style={{ marginBottom: "40px" }}>
                    <h1 className='' style={{ fontSize: "60px" }}>Banking Details</h1>
                </div>
                <div className="centeredText-img" style={{ marginBottom: "50px" }}>
                    <img src='https://vsmart.ajspire.com/images/icici.png' className='centeredImage'></img>
                </div>
            </div>

            <div className='container'>
                <table className='table-table-bordered p-5' style={{ width: "100%",border: "1px solid #000", borderRadius: "8px"}} >
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: "#43A047",fontSize:"20px", textAlign: "center", padding:"20px" ,border: "1px solid #000"}} className='text-white'>Bank Name</th>

                            <th style={{ backgroundColor: "#43A047" ,fontSize:"20px", textAlign: "center" ,border: "1px solid #000"  }} className='text-white'>ICICI Bank</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ border: "1px solid #000" }}>
                            <td>Name:</td>
                            <td>Vishwakarma Super Mart Private Limited</td>

                        </tr>
                        <tr style={{ border: "1px solid #000" }}>
                            <td>A/c No :</td>
                            <td>646005004085</td>

                        </tr>
                        <tr style={{ border: "1px solid #000" }}>
                            <td>Branch :</td>
                            <td>Raviwar Peth Satara</td>

                        </tr>
                        <tr style={{ border: "1px solid #000" }}>
                            <td>IFSC Code :</td>
                            <td>ICIC0006460</td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <button className='scroll-btn' onClick={scrollToTop} id="scrollToTopBtn" style={{ display: 'none' }} ><i class="fa-solid fa-arrow-up scroll-icon"></i></button>
        </div>
    )
}

export default Bankingdetails