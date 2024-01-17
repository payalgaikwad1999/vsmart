import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Download = () => {
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
        <div className='index-about' >
            <div className='container-fluid'>
                <div className='row'>
                    <div className='shop-bg-main'>
                        <h1 className='package2'>DOWNLOAD</h1>
                        <Link className='pa1'><span style={{ color: "white" }}> <i class="fa-solid fa-house fa-beat me-2" ></i></span>Home /<span>Download Page</span></Link>

                    </div>
                </div>
            </div>


            <div className='container' style={{ marginTop: "150px"}}>
                <div className="centeredText" style={{ marginBottom: "40px" }}>
                    <h1 className='' style={{ fontSize: "60px", color: "blue" }}>Download</h1>
                </div>
                <table className='table-table-bordered p-5' style={{ width: "100%", border: "1px solid #000", borderRadius: "8px"  }} >
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", padding: "20px" }} className='text-white'>Sr.No:</th>
                            <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", padding: "20px" }} className='text-white'>File Name</th>
                            <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center" }} className='text-white'>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ border: "1px solid #000" }}>
                            <td>1</td>
                            <td>Business Plan</td>
                            <td>
                                <div className='' style={{ textAlign: "center", marginTop: "20px", marginBottom:"10px" }}>
                                    <Link style={{
                                        backgroundColor: "#fd361c", padding: "12px 24px", // Increase padding here as needed
                                        textDecoration: "none", // To remove underline by default
                                        display: "inline-block"
                                    }} to="https://vsmart.ajspire.com/docs/business_plan.pdf" className='btn-outline btn-outline'>
                                        <span className='text-white'>Download PDF Here</span>

                                    </Link>
                                </div>
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>
            <button className='scroll-btn' onClick={scrollToTop} id="scrollToTopBtn" style={{ display: 'none' }} ><i class="fa-solid fa-arrow-up scroll-icon"></i></button>

        </div>
    )
}

export default Download