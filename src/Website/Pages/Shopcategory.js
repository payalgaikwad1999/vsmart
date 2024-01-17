import React from 'react'
import Slider from 'react-slick';
import Authuser from '../Authentication/Authuser';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Shopcategory = () => {

  let { cat_id, sub_id } = useParams();
  const { http,user,token} = Authuser();
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  // product
  const [Category, setCategory] = useState([]);
  //  console.log("hello",Category);

  // categoryname for banner
  const [category_, setCategory_] = useState([]);
  // console.log(category_);

  // subcategoryname for banner
  const [subcategory_, subCategory_] = useState([]);
  // console.log(subcategory_);


  // scroll menu
  const [Cat, setCate] = useState([]);
  // console.log("cat", Cat);
  const [brand, setBrand] = useState([]);
  //  console.log("brand",brand)


  // slider after banner
  const [Sub, setSub] = useState([]);

  // count for brand and categorywise
  const [Count, setCount] = useState([]);
  // console.log(Count);
  const [Count1, setCount1] = useState([]);
  // console.log(Count1[0]);

  const getCategoryData = () => {
    try {
      http.get(`/product-shop/${cat_id}/${sub_id}`).
        then((res) => {
          console.log("hel", res.data);


          setCategory(res.data.category.data);
          setCategory_(res.data.category_);
          subCategory_(res.data.subcategory_);
          setCate(res.data.cat);
          setBrand(res.data.brand);
          setSub(res.data.sub)
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

  }, [cat_id, sub_id])

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
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
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

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }]
  };
    // const mydata = [
    //   { label: 'Packaged Food (572)' },
    //   { label: 'Grocery (680)' },
    //   { label: 'Beverage (68)' },
    //   { label: 'Personal Care (808)' },
    //   { label: 'Home Care (506)' },
    //   { label: 'Stationary (1)' },
    //   { label: 'Grains (80)' },
    //   { label: 'Baby Care (78)' },
    //   { label: 'Health Care (40)' },
    //   { label: 'Electronics (5)' },
    // ];
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
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records =Category.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Category.length / recordsPerPage);
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
    <div className='container-fluid mt-5'>
      <div className='row'>
        <div className='shop-bg'>
          <h1 className='package1'>{category_.category_name}</h1>
          <Link className='pa'><span style={{ color: "white" }}> <i class="fa-solid fa-house fa-beat me-2" ></i></span>Home /<span>{subcategory_.subcategory_name}</span></Link>

        </div>
      </div>
    </div>
    {/*Slik slider start */}
    <div className='container  p-5' style={{ marginTop: "60px" }}>
      <Slider {...settings}>
        {Sub.map((subslider, index) => (
          <div className='card1' key={index}>
            <img className='simg' src={subslider.subcategory_image} />
            <div className='cont text-center' >
              <h4 className='nameslider text-center'>{subslider.subcategory_name} <br></br></h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    {/*Slik slider end */}
    {/*card start */}
    <div className='container' style={{ marginTop: "80px" }}>
      <div className='row'>
        <div className='col-lg-3 col-md-4 col-sm-12'  >
        <div className="card mb-5" style={{ width: '28rem' }}>
              <div className="card-body">
                <h6 className="card-title">FILTER BY PRICE</h6>
                <hr></hr>
                <div className='d-flex mt-3'>
                <input className='shop-input1' placeholder='Min-00'></input>
                <input className='shop-input2' placeholder='Max-5k'></input>
                </div>
                <button className='shop-search-btn '><i className="fa-solid fa-search shop-search-icon"></i>Search</button>
              </div>
            </div>
          <div className="card " style={{ width: '28rem', height: "380px", overflow: "scroll" }}>
            <h4 style={{ textAlign: "center" }}>FILTER BY CATEGORY </h4>
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

                      <ul type="none" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                        {/*submenu */}{
                          Sub.filter((sub) => sub.subcategory_category_id === cat.category_id).map((sub) => (
                            <li className='text-dark'>
                              <Link to={`/product-shop/${cat.category_id}/${sub.subcategory_id}`}>{sub.subcategory_name}</Link>
                            </li>
                          ))
                        } </ul>

                    </li>
                  ))}
                </ul>
              </form>
            </div>
          </div>
          <div className="card mt-4" style={{ width: '28rem', height: "450px", overflow: "scroll" }}>
            <h4>FILTER BY BRAND</h4>
            <hr></hr>
            <div className="card-body">
              <ul type='none' className=''  style={{fontSize:"16px"}}>
                {brand.map((brand, index) => (
                  <li key={index} className={activeIndex === index ? 'open' : ''} style={{ textDecorationLine: "none" }} >
                    <Link onClick={() => handleItemClick(index)} to='#' style={{ textDecoration: 'none', color: "black" }}>

                      <input type="checkbox" style={{ marginRight: "5px" }} />
                      {brand.brand_name}
                      &nbsp;&nbsp;(
                      {Count1.filter((count1) => count1.brand_id == brand.brand_id).map((count1) => (
                        (count1.brand_count)
                      ))})

                      <ul type="none" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                        {/*submenu */}{
                          Sub.filter((sub) => sub.brand_id === brand.brand_id).map((sub) => (
                            <li className='' >
                              <Link to={`/product-shop/${brand.brand_id}/${sub.subcategory_id}`}>{sub.subcategory_name}</Link>
                            </li>
                          ))
                        } </ul>

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
                  <div className='col-lg-4 col-md-8 col-sm-12'>
                    <div className="card mb-5 p-2" style={{ width: '28rem' }}>
                      <div className='text-end' style={{ fontSize: "17px" }}>{token?(<Link onClick={() => addTowish(data.product_id)} style={{ color: "white", textDecoration: "none" }}><i class="fa-solid fa-heart fs"></i></Link>):( <Link to="/login" style={{ color: "white", textDecoration: "none" }}><i class="fa-solid fa-heart fs" ></i></Link>)}</div>
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
                          <b className='bmr1' style={{ textAlign: "center" }}>MRP:<s className='mrp'>{data.mrp_price}</s><span className='only'>{data.sale_price}/only</span></b>
                        </h6>
                        <button type="button" className="b-card  p-3 mt-3 bg-success">{token?(<Link onClick={() => addTocart(data.product_id)} style={{ color: "white", textDecoration: "none" }}><i className="fa-solid fa-basket-shopping"></i> Add To Cart</Link>):(<Link to={'/login'} style={{ color: "white", textDecoration: "none" }}><i className="fa-solid fa-basket-shopping"></i> Add To Cart</Link>)}</button>
                      </div>
                    </div>

                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <p className='text-center my-3'>Showing to 32 of 2788 results</p>
        <ul class="pagination justify-content-center my-3">
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

    <button className='scroll-btn' onClick={scrollToTop} id="scrollToTopBtn" style={{ display: 'none' }} ><i class="fa-solid fa-arrow-up scroll-icon"></i></button>

  </div>
  )
}

export default Shopcategory

    // const [Slider2, setSlider2] = useState([]);
    // const [Product2, setProduct2] = useState([]);
    // const getSlider3 = () => {
    //   http.get(`/categories`).then((res) => {
    //     console.log(res);
    //     setSlider2(res.data.categories);
    //   }).catch((e) => {
    //     console.log(e);
    //   })
    // }
  
    // const getProduct1 = () => {
    //   http.get(`/products`).then((res) => {
  
    //     setProduct2(res.data.products.data);
    //   }).catch((e) => {
    //     console.log(e);
    //   });
    // }