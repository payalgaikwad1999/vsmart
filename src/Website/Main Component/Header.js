import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom'
import Authuser from '../Authentication/Authuser';
import { Dropdown } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
const Header = () => {
  const { http, user, token, logout } = Authuser();

  // search product start

  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams(); // Use useSearchParams

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };
  // search product end

  // category api start
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const handleMouseEnter = () => {
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMegaMenu(false);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // category api end
  // brand api end
  const [Showbrand, setShowbrand] = useState(false);
  const handleMouseEnter1 = () => {
    setShowbrand(true);
  };

  const handleMouseLeave1 = () => {
    setShowbrand(false);
  };

  // barnd api end

  const [Category, setcatg] = useState([]);
  const [SubCategory, setSubCategory] = useState([]);
  const getCategory1 = () => {
    http.get(`/categories`).then((res) => {
      console.log(res.data);
      setcatg(res.data.categories);
      res.data.categories.forEach((categories) => {
        getsubcata(categories.category_id);
      });
    })
  }

  const getsubcata = (categoryid) => {
    console.log(categoryid);
    http.get(`/subcategories/${categoryid}`)
      .then((res) => {
        const newsubcategory = res.data.subcategories;
        // console.log(res.data.subcategories);
        setSubCategory((previssubcat) => {
          const filtersubcategory = newsubcategory.filter(
            (newsubcat) => !previssubcat.some((previs) => previs.subcategory_id === newsubcat.subcategory_id));
          return [...previssubcat, ...filtersubcategory];
        })
      })
  }

  const [Brands, setBrands] = useState([]);

  const getBrand1 = () => {
    http.get(`/brands`)
      .then((res) => {
        setBrands(res.data.brands);
      })
      .catch((e) => {
        // console.log(e);
      });
  };
  // Add to cart
  const [Cart, setCart] = useState([]);
  const [Cartcount, setcartcount] = useState([]);
  useEffect(() => {
    getCartItem();
  }, [token]);

  const [Product2, setProduct2] = useState([]);
  const getProductt = () => {
    http.get(`/products`).then((res) => {
      setProduct2(res.data.products.data);
    }).catch((e) => {
      // console.log(e);
    })
  }



  useEffect(() => {
    getCategory1()
    getBrand1()
    getProductt()
  }, [])

  // calculate 
  const [rate, setrate] = useState(10);
  const [qty, setqty] = useState(0);
  const [total, settotal] = useState(0);

  function Ratee(e) {
    setrate(Number(e.target.value));
  }
  function Qt(e) {
    setqty(Number(e.target.value));
    gettotal();
  }
  function gettotal() {
    settotal(rate * qty);
    // console.log(total);
  }
  // map function


  const [subtotal, setSubtotal] = useState(0);
  const [subto, setSubto] = useState(0);
  const [gst, setGst] = useState(0);
  const [pv, setPv] = useState(0);
  const [disc, setDisc] = useState(0);
  const getCartItem = () => {
    http.get(`/get-cart-list`)
      .then((res) => {
        setCart(res.data.cart);
        console.log(res.data.cart);
        setcartcount(res.data.cart.length);
      }).catch((e) => {
        // console.log(e);
      });



  }
  useEffect(() => {
    getCartItem();
  }, [token]);
  useEffect(() => {
    // Calculate the subtotal 

    const newSubtotal = Cart.reduce(
      (accumulator, item) => accumulator + item.online_price * item.cart_product_qty,
      0
    );
    setSubtotal(newSubtotal);

    const gst = Cart.reduce(
      (accumulator, item) => accumulator + (item.online_price * item.cart_product_qty * item.tax_per) / (100 + item.tax_per),
      0
    );
    setGst(gst);
    const pv = Cart.reduce(
      (accumulator, item) => accumulator + item.point_value,
      0
    );
    setPv(pv);

    const disc = Cart.reduce(
      (accumulator, item) => {
        console.log('Total Discount:', item.total_discount);
        const totalDiscount = parseFloat(item.total_discount);
        return accumulator + totalDiscount;
      }
      ,
      0
    );
    setDisc(disc);
    // console.log(disc);
  }, [Cart]);


  const [Wishlist, setWishlist] = useState([]);
  const [setwish, setWish] = useState([]);
  console.log(Wishlist);


  const getWishItem = () => {
    http.get(`/get-wishlist`)
      .then((res) => {
        // console.log(res.data);
        setWishlist(res.data.wishlist);
        // console.log(res.data.cart.length);
        setWish(res.data.wishlist.length)
      }).catch((e) => {
        console.log(e);
      });

  }


  useEffect(() => {
    getWishItem();
  }, [setwish])
  return (
    <div>
      <div className="container-fluid bg-success">
        <div className='row'>
          <nav className="navbar  navbar-first">
            <div className='col-lg-6'>
              <a className="navbar-brand text-light ms-5 navbar-first-title">Welcome to VS Mart in Your Dream Online Store!</a>
            </div>
            <div className="text-end col-lg-5">
              <a className='text-light' style={{ fontSize: "17px" }}>Contact Us</a>
            </div>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2">
            <img className="nav-second-img" src="https://vsmart.ajspire.com/images/logo1.png" alt="Logo" />
          </div>
          <div className="col-lg-4 col-md-3 col-sm-3 mt-5 ">
            <div class="d-flex border2 ">
              <input className="form-control mt-1 ms-1 mb-0 border-0 border-white"
                type="text" value={searchQuery} onChange={handleInputChange} placeholder="Search Anything" aria-label="Search" style={{ width: "300px", height: "40px", fontSize: "17px" }} />
              <button className="btn mt-1 ms-1 mb-1 border-0" style={{ width: "50px", height: "40px" }}>
                <Link

                  to={`/search?query=${encodeURIComponent(searchQuery)}`}
                  onChange={() => setSearchParams({ query: searchQuery })}>

                  <i className="fa fa-search" />
                </Link>
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-4 text-end d-flex mt-5" >

            <div className='nav-sec-icon-div1'><i className="fa-solid fa-wallet nav-sec-icon1 fa-beat"></i></div>
            <Link to="/login" className='position-relative'>
              <div className='nav-sec-icon-div1 ms-5'><i className="fa-solid fa-random nav-sec-icon1 fa-beat"></i></div>
              <span className="position-absolute end-0 top-0 translate-middle badge rounded-pill bg-success p-2" style={{ fontSize: "13px" }}>
                0
              </span>
            </Link>
            {token ? (
              <Link to="/wishlist" className='position-relative'>
                <div className='nav-sec-icon-div1 ms-5'><i className="fa-solid fa-heart nav-sec-icon1 fa-beat"></i>
                </div>
                <span className="position-absolute end-0 top-0 translate-middle badge rounded-pill bg-success p-2.5" style={{ fontSize: "13px" }}>
                  {setwish}
                </span>
              </Link>
            ) : (<Link to="/login" className='position-relative'>
              <div className='nav-sec-icon-div1 ms-5'><i className="fa-solid fa-heart nav-sec-icon1 fa-beat"></i>
              </div>
              <span className="position-absolute end-0 top-0 translate-middle badge rounded-pill bg-success p-2.5" style={{ fontSize: "13px" }}>
                0
              </span>
            </Link>)}
            {token ? (
              <Link to="/login" className='position-relative'>
                <div className='nav-sec-icon-div1 ms-5'>
                  <i className="fa-solid fa-basket-shopping nav-sec-icon1 fa-beat" onClick={handleShow} onHide={handleClose}></i>
                </div>
                <span className="position-absolute end-0 top-0 translate-middle badge rounded-pill bg-success p-2" style={{ fontSize: "13px" }}>
                  {Cartcount}
                </span>
              </Link>
            ) : (<Link className='position-relative' to="/login">
              <div className='nav-sec-icon-div1 ms-5'>
                <i className="fa-solid fa-basket-shopping nav-sec-icon1 fa-beat" onClick={handleShow} onHide={handleClose}></i>
              </div>
              <span className="position-absolute end-0 top-0 translate-middle badge rounded-pill bg-success p-2" style={{ fontSize: "13px" }}>
                0
              </span>
            </Link>)}


            <p className='' style={{ color: "black",fontSize:"13px"}}><b>TOTAL PRICE<br /><b>&#8377; {subtotal.toFixed(2)}</b></b></p>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-2 text-end d-flex">
            <div className='login-img-div ' ><img className='login-img' src="https://vsmart.ajspire.com/images/ee.png" alt="Login Image" /></div>
            {/*<button type="button " class="nav-sec-btnlogin btn-primary"><Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link></button>
<button type="button" class="btn-success nav-btn-logout" onClick={logout}>Logout</button>*/}

            <ul className='navbar-nav ms-5'>
              {
                token ? (<li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {user && user.name}
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/profile" style={{ fontSize: "15px" }}>My Account </Link></li>
                    <li><Link className="dropdown-item" to="/order" style={{ fontSize: "15px" }}>My Order</Link></li>
                    <li><Link className="dropdown-item" onClick={logout} to="/" style={{ fontSize: "15px" }}>Logout</Link></li>
                  </ul>
                </li>) :
                  (
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Login
                      </a>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/login" style={{ fontSize: "15px" }}>My Account</Link></li>
                        <li><Link className="dropdown-item" to="/login" style={{ fontSize: "15px" }}>My Order</Link></li>
                        <li><Link className="dropdown-item" to="/login" style={{ fontSize: "15px" }}>Sign in</Link></li>
                      </ul>
                    </li>
                  )
              }


            </ul>
            {/*<nav class="navbar"  style={{ backgroundColor: "#eee" }}>
                  {token ? (
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <Link class="nav-link dropdown-toggle text-center" to='/login' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   {user && user.name}
                      </Link>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">My Account</a>
                        <a class="dropdown-item" href="#">My order</a>
                        <a class="dropdown-item" href="#">Logout</a>
                      </div>
                    </li>
                  </ul>
                  ):(

                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <Link class="nav-link dropdown-toggle text-center" to='/login' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    login
                      </Link>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">My Account</a>
                        <a class="dropdown-item" href="#">My Order</a>
                        <a class="dropdown-item" href="#">Sign In</a>
                      </div>
                    </li>
                  </ul>)
                  }
                </nav>*/}
          </div>
        </div>
      </div>
      {/*navbar third */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light " style={{ height: "80px" }}>
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{ marginLeft: "40px" }}>Home</Link>
              </li>
              <li className="navbar-item dropdown-megamenu" >
                <Link to="/shopping" className="nav-item nav-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                  Categories
                  <i class="fa fa-caret-down" style={{ fontSize: "20px", marginLeft: "5px" }} ></i>
                </Link>

                <Dropdown show={showMegaMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <Dropdown.Menu className="mega-menu" style={{ height: '400px', width: '1000px', marginLeft: '40px', overflowY: 'scroll' }}>
                    <div className="row">
                      {Category.slice(0, 8).map((category) => (
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <Link to=" " className=''>
                            <h5 className='' style={{ fontSize: "20px" }}>{category.category_name}</h5>
                          </Link>
                          <Link to="" key={category.category_id} className=''>
                            <ul>
                              {SubCategory.filter((subcategory) => subcategory.subcategory_category_id === category.category_id).slice(0, 5).
                                map(subcategory => (
                                  <li>

                                    <Link className='' to={`/product-shop/${category.category_id}/${subcategory.subcategory_id}`}>
                                      {subcategory.subcategory_name}
                                    </Link>

                                  </li>
                                ))
                              }
                            </ul>
                          </Link>

                        </div>
                      ))}
                      <div className='just mt-5 mb-5'>
                        <button type="button" className="btn2"><b><i class="fa-regular fa-eye"></i> Show All Categories</b></button>
                      </div>
                    </div>
                  </Dropdown.Menu>

                </Dropdown>


              </li>
              <li className="navbar-item dropdown-megamenu">
                <Link to="/shopping" className="nav-item nav-link" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                  Brands
                  <i class="fa fa-caret-down" style={{ fontSize: "20px", marginLeft: "5px" }} ></i>
                </Link>

                <Dropdown show={Showbrand} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                  <Dropdown.Menu className="mega-menu " style={{ height: 'auto', width: '1000px', marginLeft: '40px', }} >
                    <div className="row">
                      {Brands.slice(0, 16).map((brand) => (
                        <div className="col-lg-3 col-md-6 col-12" key={brand.brand_id}>
                          <Link to={`/product-shop/${brand.brand_id}`} style={{ textDecoration: "none", fontSize: "20px", marginBottom: "8px" }}>
                            {brand.brand_name}
                          </Link>
                        </div>
                      ))}
                      <div className='just mt-5 mb-5'>
                        <button type="button" className="btn2">
                          <b><i className="fa-regular fa-eye"></i> Show All Brands</b>
                        </button>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bank">Banking Details</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/download">Download</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/legal">Legal</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#"><span style={{ color: "green", fontSize: "25px" }}><i class="fa-solid fa-mobile-screen"></i></span> Call Us <br></br>   +91 7262989579</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#"><span style={{ color: "green", fontSize: "25px" }}><i class="fa-solid fa-at"></i></span> Email Us <br></br>   vsmart123@gmail.com</Link>
              </li>
            </ul>
            <form className="d-flex">

            </form>
          </div>
        </div>
      </nav>







      <Offcanvas placement='end' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ fontSize: "25px", color: "green" }}><i className="fa-solid fa-basket-shopping nav-sec-icon1" style={{ fontSize: "25px", textAlign: "center" }}></i>Total Item </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='container'>
            <div className='row'>
              {
                Cart.slice(0, 8).map((item) => (
                  <div className="card mb-3" style={{ maxWidth: 520 }}>
                    <div className="row g-0">
                      <div className="col-md-4 col-4">
                        <div className='mainbtn'>
                          <button type='button' className='buttn'><i class="fa-solid fa-trash-can" style={{ fontSize: "20px" }}></i></button>
                        </div>
                        <img src={'https://vsmart.ajspire.com/uploads/product_image/' + item.product_image} className='img-fluidd' alt="..." />
                      </div>
                      <div className="col-md-8 col-8">
                        <div className="card-body">
                          <h5 className="card-title">{item.english_name}</h5>
                          <p className='pv1' >PV:{item.point_value}</p>
                          <p className='unit1' onChange={Ratee}>MRP:<span className='mrp'>{item.sale_price}</span>/only</p>
                          <div className='d-flex mdiv'>
                            <input type='number' style={{ height: "30px", width: "80px", fontSize: "18px", backgroundColor: "#e7e4e4", borderRadius: "5px", border: "none", color: "green" }} onChange={Qt} />
                            <button type="button" className="inbtn1 " style={{ width: "40px", fontSize: "20px", fontWeight: "bold" }} onClick={gettotal}> + </button>
                            <button type="button" className="inbtn2" placeholder='total' style={{ width: "60px", fontSize: "20px", fontWeight: "bold", color: "green" }}> {total}</button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                ))
              }
            </div>

          </div>
          {/*<div className='container' style={{ marginTop: "100px" }}>
            <div className='row'>
              <div className="col-12">
                <form>
                  <div className='table-content table-responsive'>
                    <table className='table-table-bordered p-5' style={{ width: "100%", border: "1px solid #000", borderRadius: "8px" }} >
                      <thead>
                        <tr>
                          <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", padding: "20px", border: "1px solid #000" }} className='text-white'>SR.No</th>
                          <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", border: "1px solid #000" }} className='text-white'>Product</th>
                          <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", border: "1px solid #000" }} className='text-white'>Product Name</th>
                          <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", border: "1px solid #000" }} className='text-white'>Price</th>
                          <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", border: "1px solid #000" }} className='text-white'>Brand</th>
                          <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", border: "1px solid #000" }} className='text-white'>Quality</th>
                          <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", border: "1px solid #000" }} className='text-white'>Tax</th>
                          <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", border: "1px solid #000" }} className='text-white'>P V</th>
                          <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", border: "1px solid #000" }} className='text-white'>TOTAL</th>
    
                        </tr>
                      </thead>
                      <tbody>
                        {
    
                          Cart.map((item) => (
    
    
                            <tr>
    
                              <td className="li-product-remove"><a href="#"><i className="fa fa-times" /></a></td>
                              <td className="li-product-thumbnail"><a href="#"><img width={150} height={150} src={'https://vsmart.ajspire.com/uploads/product_image/' + item.product_image} alt="Li's Product Image" /></a></td>
                              <td className="li-product-name"><a href="#">{item.english_name}</a></td>
                              <td className="li-product-price"><span className="amount">&#8377;{item.online_price}</span></td>
                              <td className="quantity">
                                <label>Quantity</label>
                                <div className="cart-plus-minus">
                                  <input className="cart-plus-minus-box" value={item.cart_product_qty} type="text" />
                                  <div className="dec qtybutton"><i className="fa fa-angle-down" /></div>
                                  <div className="inc qtybutton"><i className="fa fa-angle-up" /></div>
                                </div>
                              </td>
                              <td className="product-subtotal"><span className="amount">&#8377;{((item.online_price * item.cart_product_qty * item.tax_per) / (100 + item.tax_per)).toFixed(2)}</span></td>
                              <td className="product-subtotal"><span className="amount">{item.point_value}</span></td>
    
                              <td className="product-subtotal"><span className="amount">&#8377;{item.online_price * item.cart_product_qty}</span></td>
                            </tr>
                          ))}
    
    
    
                      </tbody>
    
                    </table>
                  </div>
                  
                  <hr className='hr1' style={{color:"green"}}></hr>
                  <div className="row">
                    <div className="col-md-5" >
                      <div className="cart-page-total">
                        <h1 className='' >Cart Details</h1>
                        <ul>
                          <li>Subtotal <span>&#8377;{subtotal.toFixed(2)}</span></li>
                          <li>Gst <span>&#8377;{gst.toFixed(2)}</span></li>
                          <li>P V Value <span>&#8377;{pv.toFixed(2)}</span></li>
                          <li>Discount <span>&#8377;{disc.toFixed(2)}</span></li>
                          <li>Total <span>&#8377;{subtotal.toFixed(2)}</span></li>
                          </ul>
                          <div className='btncheck'>
                         
                          <button type="button" class="btn-process btn-success p-3 " ><Link to={'/checkout'}></Link>Proceed to checkout</button>
                          </div>
                          </div>
                    </div>
                  </div>
                </form>
              </div>
    
            </div>
                          </div>*/}
        </Offcanvas.Body>



        <div>
          <Link to="/cart">
            <button type="button" class="btn btn-success mb-5 p-3 " style={{ margin: "40px", width: "80%", fontSize: "20px" }}>View To Cart</button>
          </Link>
        </div>
      </Offcanvas>




    </div>

  )
}

export default Header



