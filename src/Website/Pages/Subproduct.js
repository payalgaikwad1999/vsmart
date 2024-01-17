import React, { useEffect, useState } from 'react'
import Authuser from '../Authentication/Authuser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const Subproduct = () => {
    const { http, user, token } = Authuser();
    const [Product2, setProduct2] = useState([]);
    const getProductt = () => {
        http.get(`/products`).then((res) => {
            setProduct2(res.data.products.data);
        }).catch((e) => {
            console.log(e);
        })
    }


    useEffect(() => {
        getProductt()

    }, [])

    const addTocart = (product_id) => {
        // console.log(product_id);
        http.get(`/add-to-cart/${product_id}`).then((res) => {
            console.log("hii", res.data);
            toast.success('Product Added Successfully', {
                className: 'larger-font'
            });
            alert(res.data.msg)
        }).catch((e) => {
            // console.log(e);
        });
    }
    const addTowish = (product_id) => {
        console.log(product_id);
        http.get(`/add-to-wishlist/${product_id}`).then((res) => { console.log(res.data); 
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
    <h1 className="best">All Featured Items</h1>
    <div className="container">
        <div className="row">
            {Product2.map((data, index) => ( // Added index parameter for map
                <div key={index} className="col-lg-6 col-md-6 col-sm-12"> {/* Added key prop to the outermost div */}
                    <div className="card mb-3" style={{ maxWidth: 600 }}>
                        <div className="row g-0">
                            <div className="col-md-4 col-4">
                                <div className='mae d-flex'>
                                    <div className='ct'>
                                        <label className='icont'>Feature</label><br></br>
                                        <label className='icont1'>Rs {data.mrp_price - data.sale_price} %off</label>
                                    </div>
                                    <div className='mt'>
                                        {token ? (<Link to='/' onClick={() => addTowish(data.product_id)} style={{ color: "white", textDecoration: "none" }}><i class="fa-solid fa-heart fs"></i></Link>) : (
                                            <Link to="/login" style={{ color: "white", textDecoration: "none" }}><i class="fa-solid fa-heart fs" ></i></Link>
                                        )}
                                    </div>
                                </div>
                                <img src={data.product_image} alt="..." className='img-fluid ' />
                                <div className='ci d-flex'>
                                    <button className='iconb'><i className="fa-solid fa-shuffle"></i></button> {/* Changed class to className */}
                                    <button className='iconb'><i className="fa-solid fa-eye"></i></button> {/* Changed class to className */}
                                </div>

                            </div>
                            <div className="col-md-8 col-8">
                                <div className="card-body">
                                    <h5 className="card-title mt-2">{data.english_name}</h5>
                                    <h6 className='pv '>PV:{data.products_basic_pv}</h6>
                                    <h6 className="card-text"><b className='bmr'>MRP<s className='mrp'> {data.mrp_price}</s> <span className='only'>{data.sale_price}</span> /only</b></h6>
                                    <button type="button" className="btn btn-success p-3">{token ? (<Link onClick={() => addTocart(data.product_id)} style={{ color: "white", textDecoration: "none" }}><i className="fa-solid fa-basket-shopping"></i>Add To Cart</Link>) : (
                                        <Link to={'/login'} style={{ color: "white", textDecoration: "none" }}> <i className="fa-solid fa-basket-shopping"></i> Add To Cart</Link>
                                    )}  </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    <div className='just mt-5'>
        <button type="button" className="btn1"><i class="fa-regular fa-eye"></i> Show More</button>
    </div>
 
    <ToastContainer></ToastContainer>
    <button className='scroll-btn' onClick={scrollToTop} id="scrollToTopBtn" style={{ display: 'none' }} ><i class="fa-solid fa-arrow-up scroll-icon"></i></button>

</div>
  )
}

export default Subproduct