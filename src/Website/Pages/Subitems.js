import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Authuser from '../Authentication/Authuser';
import { Link } from 'react-router-dom';

const Subitems = () => {
    const { http, user, token } = Authuser();
    const [Item, setItem] = useState([]);

    const getItem1 = () => {
        http.get(`/products`).then((res) => {

            setItem(res.data.products.data);
        }).catch((e) => {
            // console.log(e);
        });
    }

    useEffect(() => {
        getItem1()
    }, [])

    const addTocart = (product_id) => {
        // console.log(product_id);
        http.get(`/add-to-cart/${product_id}`).then((res) => {
            console.log("hii", res.data);
            toast.success('Product Added to cart Successfully', {
                className: 'larger-font'
            });
            alert(res.data.msg)
        }).catch((e) => { console.log(e); });
    }
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
        <div>
            <h1 className="Coll">All New Items</h1>
            <div className="container " style={{ overflowY: "scroll" }}>
                <div className='mb-5'>
                    <div className='row'>
                        {Item.map((data, index) => (
                            <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                                <div key={index}>
                                    <div className="card " style={{ width: '25rem' }}>
                                        <div className='mae d-flex'>
                                            <div className='ct'>
                                                <label className='icont1'>Rs{data.mrp_price - data.sale_price}%off</label>
                                            </div>
                                            <div className='mt1'>
                                                <Link to=''><i class="fa-solid fa-heart fs"></i></Link>
                                            </div>
                                        </div>
                                        <img src={data.product_image} alt="..." className='img-fluid1 mx-auto' />

                                        <div className='ci1 d-flex'>
                                            <button className='iconb1 ' ><i className="fa-solid fa-shuffle"></i></button>
                                            <button className='iconb1 '><i className="fa-solid fa-eye"></i></button>
                                        </div>
                                        <hr></hr>
                                        <div className="card-body">
                                            <h5 className="card-title mt-2" style={{ textAlign: "center" }}>{data.english_name}</h5>
                                            <h6 className='pv ' style={{ textAlign: "center" }}>PV:{data.products_basic_pv}</h6>
                                            <h6 className="card-text" style={{ textAlign: "center" }}>
                                                <b className='bmr' style={{ textAlign: "center" }}>MRP:<s className='mrp'> {data.mrp_price}</s> <span className='only'>{data.sale_price}</span></b>
                                            </h6>
                                            <button type="button" className="btn btn-success p-3 mb-3btn1">{token ? (<Link onClick={() => addTocart(data.product_id)} style={{ color: "white", textDecoration: "none" }}><i className="fa-solid fa-basket-shopping"></i>Add To Cart</Link>) : (
                                                <Link to={'/login'} style={{ color: "white", textDecoration: "none" }}> <i className="fa-solid fa-basket-shopping"></i> Add To Cart</Link>
                                            )} </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='just mt-5'>
                <button type="button" className="btn1"><i class="fa-regular fa-eye"></i> Show More</button>
            </div>
            <button className='scroll-btn' onClick={scrollToTop} id="scrollToTopBtn" style={{ display: 'none' }} ><i class="fa-solid fa-arrow-up scroll-icon"></i></button>
        </div>
    )
}

export default Subitems