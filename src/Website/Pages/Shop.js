import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import Authuser from '../Authentication/Authuser';
import { toast } from 'react-toastify';

const Shop = () => {

  const { http, user, token } = Authuser();
  let { shop } = useParams();
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  // product
  const [Product, setProduct] = useState([]);
  //  console.log("hello",Category);

  // console.log(category_)


  // scroll menu
  const [Cat, setCate] = useState([]);
  // console.log("cat", Cat);
  const [brand, setBrand] = useState([]);
  //  console.log("brand",brand)



  // count for brand and categorywise
  const [Count, setCount] = useState([]);
  // console.log(Count);
  const [Count1, setCount1] = useState([]);
  // console.log(Count1[0]);

  const getCategoryData = () => {
    try {
      http.get(`/shop`).then((res) => {
        // console.log("hel", res.data);
        setProduct(res.data.product.data);
        setBrand(res.data.brand);
        // setSub(res.data.sub)
        setCate(res.data.cat);
        setCount(res.data.count['']);
        setCount1(res.data.count1['']);

      }).catch((e) => {
        // console.log(e)
      });
    } catch (error) {

    }
  }



  useEffect(() => {
    getCategoryData()

  }, [shop]);

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
    http.get(`/add-to-wishlist/${product_id}`).then((res) => {
      console.log(res.data);
      alert(res.data.msg)
    }).catch((e) => { console.log(e); });
  }
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Product.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Product.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function perPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  function changeCPage(id) {
    setCurrentPage(id)

  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
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
    <div className='indexmain'>
      <div className='container-fluid '>
        <div className='row'>
          <div className='shop-bg-main'>
            <h1 className='package2'>VIEW ALL PRODUCT</h1>
            <Link className='pa1'><span style={{ color: "white" }}> <i class="fa-solid fa-house fa-beat me-2" ></i></span>Home /<span>VIEW ALL PRODUCT</span></Link>

          </div>
        </div>
      </div>
      {/*Slik slider start */}

      {/*Slik slider end */}
      {/*card start */}
      <div className='container' style={{ marginTop: "80px" }}>
        <div className='row'>
          <div className='col-lg-3 col-md-4 col-sm-12'  >
            <div className="card mb-5" style={{ width: '28rem' }}>
              <div className="card-body">
                <h6 className="card-title">FILTER BY PRICE</h6>
                <hr></hr>
                <div className='d-flex'>
                  <input className='shop-input1' placeholder='Min-00'></input>
                  <input className='shop-input2' placeholder='Max-5k'></input>
                </div>
                <button className='shop-search-btn '><i className="fa-solid fa-search shop-search-icon"></i>Search</button>
              </div>
            </div>

            <div className="card " style={{ width: '28rem', height: "360px", overflow: "scroll" }}>
              <h4 style={{ fontSize: "20px", marginTop: "10px" }}>FILTER BY CATEGORY </h4>
              <hr></hr>
              <div className="card-body " >
                <form>
                  <ul type='none' className='ulcategory' >
                    {Cat.map((cat, index) => (

                      <li key={index} className={activeIndex === index ? 'open' : ''} style={{ textDecorationLine: "none" }}   >
                        <Link onClick={() => handleItemClick(index)} to='#' style={{ textDecoration: 'none', color: "black" }}>
                          <input type="checkbox" className='' /> &nbsp;&nbsp;
                          {cat.category_name}
                          &nbsp;&nbsp;(
                          {Count.filter((count) => count.product_category_id == cat.category_id).map((count) => (
                            (count.cat_count)
                          ))})
                        </Link>
                        {/*
                        <ul type="none" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                    {
                            Sub.filter((sub) => sub.subcategory_category_id === cat.category_id).map((sub) => (
                              <li className='text-dark'>
                                <Link to={`/product-shop/${cat.category_id}/${sub.subcategory_id}`}>{sub.subcategory_name}</Link>
                              </li>
                            ))
                          } </ul>*/}

                      </li>
                    ))}
                  </ul>
                </form>
              </div>
            </div>
            <div className="card mt-4" style={{ width: '28rem', height: "400px", overflow: "scroll" }}>
              <h4>FILTER BY BRAND</h4>
              <hr></hr>
              <div className="card-body">
                <ul type='none' className='' style={{ fontSize: "16px" }}>
                  {brand.map((brand, index) => (
                    <li key={index} className={activeIndex === index ? 'open' : ''} style={{ textDecorationLine: "none" }} >
                      <Link onClick={() => handleItemClick(index)} to='#' style={{ textDecoration: 'none', color: "black" }}>

                        <input type="checkbox" style={{ marginRight: "5px" }} />
                        {brand.brand_name}
                        &nbsp;&nbsp;(
                        {Count1.filter((count1) => count1.brand_id == brand.brand_id).map((count1) => (
                          (count1.brand_count)
                        ))})

                        {/*  <ul type="none" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                          {
                            Sub.filter((sub) => sub.brand_id === brand.brand_id).map((sub) => (
                              <li className='' >
                                <Link to={`/product-shop/${brand.brand_id}/${sub.subcategory_id}`}>{sub.subcategory_name}</Link>
                              </li>
                            ))
                          } </ul>*/}

                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
          <div className='col-lg-9 col-md-8 col-sm-12'>
            <div className='container'>
              <div className='row'>
                {
                  records.map((data) => (
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                      <div className="card mb-5 p-2" style={{ width: '28rem' }}>

                        <div className='text-end' style={{ fontSize: "17px" }}>
                          {token ? (<Link to='/' onClick={() => addTowish(data.product_id)} style={{ color: "white", textDecoration: "none" }}><i class="fa-solid fa-heart fs"></i></Link>) : (
                            <Link to='/login' style={{ color: "white", textDecoration: "none" }}><i class="fa-solid fa-heart fs"></i></Link>)}
                        </div>
                        <img src={data.product_image} className="cardimgtop" alt="..." />
                        <div className='cii d-flex'>
                          <button className='iconbb'><i className="fa-solid fa-shuffle"></i></button> {/* Changed class to className */}
                          <button className='iconbb'><i className="fa-solid fa-eye"></i></button> {/* Changed class to className */}

                        </div>
                        <hr></hr>
                        <div className="card-body">
                          <h5 className="card-title" style={{ textAlign: "center" }}>{data.english_name}</h5>
                          <p className="pv2 mt-2" style={{ textAlign: "center" }}>PV:{data.products_basic_pv}</p>
                          <h6>
                            <b className='bmr1' style={{ textAlign: "center" }}>MRP:<s className='mrp'>{data.mrp_price} </s><span className='only'>{data.sale_price} /only</span></b>
                          </h6>
                          <button type="button" className=" btn p-3 mt-3 btn-success">{token ? (<Link onClick={() => addTocart(data.product_id)} style={{ color: "white", textDecoration: "none" }}><i className="fa-solid fa-basket-shopping"></i> Add To Cart</Link>) :
                            (<Link to={'/login'} style={{ color: "white", textDecoration: "none" }}> <i className="fa-solid fa-basket-shopping"></i> Add To Cart</Link>)}</button>
                        </div>
                      </div>

                    </div>
                  ))
                }
              </div>
            </div>


            <p className='text-center my-3'>Showing to 32 of 2788 results</p>
            <ul class="pagination justify-content-center my-3" style={{fontSize:"20px"}}>
              <li className="page-item"><a className="page-link" href="" onClick={perPage}><i className="fa-solid fa-arrow-left" ></i></a></li>
              {
                numbers.map((n, i) => (
                  <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}><a className="page-link" href="#" onClick={() => changeCPage(n)} >{n}</a></li>
                ))
              }

              <li class="page-item"><a class="page-link" href="#" onClick={nextPage}><i className="fa-solid fa-arrow-right"></i></a></li>
            </ul>
          </div>

        </div>
      </div>

      <button className='scroll-btn' onClick={scrollToTop} id="scrollToTopBtn" style={{ display: 'none' }} ><i class="fa-solid fa-arrow-up scroll-icon"></i></button>

    </div>

  )
}

export default Shop