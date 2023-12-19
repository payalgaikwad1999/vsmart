import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Authuser from '../Authentication/Authuser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const Items = () => {
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

        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
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

    // const mydata = [
    //     {
    //         img: "https://vsmart.ajspire.com/uploads/product_image/1697033385.png",
    //         title: "Diwali Special Package",
    //         Rs: "₹200 Off",
    //         mr: "PV :5000.00",
    //         MRP: "MRP ",
    //         rs: "5500.00",
    //         mp: "5000.00/ only",
    //         icon: "fa-solid fa-basket-shopping",
    //         btn: "Add",
    //     },
    //     {
    //         img: "https://vsmart.ajspire.com/uploads/product_image/1690011802.png",
    //         title: "Tata Tea Premium Tea, 1. 5 Kg",
    //         mr: "PV :0.00",
    //         Rs: "₹100 Off",
    //         MRP: "MRP ",
    //         rs: "705.00",
    //         mp: "649.00/ only",
    //         icon: "fa-solid fa-basket-shopping",
    //         btn: "Add",
    //     }, {
    //         img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
    //         title: "Anjali Coconut Scraper Sleeck...",
    //         mr: "PV :149.00",
    //         Rs: "₹10 Off",
    //         MRP: "MRP ",
    //         rs: "190.00",
    //         mp: "145.00/ only",
    //         icon: "fa-solid fa-basket-shopping",
    //         btn: "Add"
    //     },

    //     {
    //         img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
    //         title: "Anjali Lemon Sqwueezer",
    //         mr: "PV :249.00",
    //         Rs: "₹30 Off",
    //         MRP: "MRP ",
    //         rs: "295.00",
    //         mp: "254.00/ only",
    //         icon: "fa-solid fa-basket-shopping",
    //         btn: "Add"
    //     },
    //     {
    //         img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
    //         title: "Anjali Lemon Squeezer Large",
    //         mr: "PV :75.00",
    //         Rs: "₹15 Off",
    //         MRP: "MRP ",
    //         rs: "100.00",
    //         mp: "80.00/ only",
    //         icon: "fa-solid fa-basket-shopping",
    //         btn: "Add"
    //     },
    //     {
    //         img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
    //         title: "Anjali Boby Fork Spoon 6N",
    //         mr: "PV :159.00",
    //         Rs: "₹25 Off",
    //         MRP: "MRP ",
    //         rs: "190.00",
    //         mp: "164.00/ only",
    //         icon: "fa-solid fa-basket-shopping",
    //         btn: "Add"
    //     },
    //     {
    //         img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
    //         title: "Excel Ultra Presure Cooker 5.0...",
    //         mr: "PV :298.00",
    //         Rs: "₹40 Off",
    //         MRP: "MRP ",
    //         rs: "225.00",
    //         mp: "205.00/ only",
    //         icon: "fa-solid fa-basket-shopping",
    //         btn: "Add"
    //     },

    //     {
    //         img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
    //         title: "Excel Ultra Presure Cooker 3.0...e",
    //         mr: "PV :2997.50",
    //         Rs: "₹100 Off",
    //         MRP: "MRP ",
    //         rs: "1810.00",
    //         mp: "1205.00/ only",
    //         icon: "fa-solid fa-basket-shopping",
    //         btn: "Add"
    //     },
    //     {
    //         img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
    //         title: "Excel Ultra Hard Anodized Pres...",
    //         mr: "PV :2372.50",
    //         Rs: "₹130 Off",
    //         MRP: "MRP ",
    //         rs: "1470.00",
    //         mp: "955.00/ only",
    //         icon: "fa-solid fa-basket-shopping",
    //         btn: "Add"
    //     },

    //     {
    //         img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
    //         title: "Excel Ultra Hard Anodized Pres...",
    //         mr: "PV :1649.00",
    //         Rs: "₹200 Off",
    //         MRP: "MRP ",
    //         rs: "2655.00",
    //         mp: "1655.00/ only",
    //         icon: "fa-solid fa-basket-shopping",
    //         btn: "Add"
    //     },
    //     {
    //         img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
    //         title: "Diwali Special Package",
    //         mr: "PV :1380.00",
    //         Rs: "₹125 Off",
    //         MRP: "MRP ",
    //         rs: "2445.00",
    //         mp: "1385.00/ only",
    //         icon: "fa-solid fa-basket-shopping",
    //         btn: "Add"
    //     },
    //     {
    //         img: "https://vsmart.ajspire.com/uploads/product_image/default.png",
    //         title: "Diwali Special Package",
    //         mr: "PV :2122.50",
    //         Rs: "₹220 Off",
    //         MRP: "MRP ",
    //         rs: "1350.00",
    //         mp: "855.00/ only",
    //         icon: "fa-solid fa-basket-shopping",
    //         btn: "Add"
    //     },

    // ];


    const { http ,user, token} = Authuser();
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
    return (
        <div>
            <h1 className="Coll">Collected New Items</h1>
            <div className="container ">
                <div className='mb-5'>
                    <Slider {...settings}>
                        {Item.map((data, index) => (
                            <div key={index}>
                                <div className="card " style={{ width: '25rem'}}>
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
                        ))}
                    </Slider>
                </div>
            </div>
            <div className='just mt-5'>
            <Link to='/subitem' style={{ color: "white", textDecoration: "none" }}>
                <button type="button" className="btn1"><i class="fa-regular fa-eye"></i> Show More</button>
                </Link>
            </div>
        </div>
    );
};

export default Items;
