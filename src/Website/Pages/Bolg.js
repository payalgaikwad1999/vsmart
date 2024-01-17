import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Bolg = () => {
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
                        <h1 className='package2'>BLOGS</h1>
                        <Link className='pa1'><span style={{ color: "white" }}> <i class="fa-solid fa-house fa-beat me-2" ></i></span>Home /<span>View Blog</span></Link>

                    </div>
                </div>
            </div>

            <div style={{marginTop:"100px", textAlign:"center"}}>
                <h1 style={{fontSize:"50px"}}>Blogs No Added In VS Mart</h1>
            </div>

            <button className='scroll-btn' onClick={scrollToTop} id="scrollToTopBtn" style={{ display: 'none' }} ><i class="fa-solid fa-arrow-up scroll-icon"></i></button>

        </div>
    )
}

export default Bolg