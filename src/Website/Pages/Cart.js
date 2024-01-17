import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Authuser from '../Authentication/Authuser';

const Cart = () => {
  const { http, user, token } = Authuser();
  const [Cart, setCart] = useState([]);

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
      }).catch((e) => {
        // console.log(e);
      });
  }

  useEffect(() => {
    getCartItem();
  }, [token]);
  useEffect(() => {
    // Calculate the subtotal 

    //   const newSubtotal = Cart.reduce(
    //     (accumulator, item) => accumulator + item.online_price * item.cart_product_qty,
    //     0
    //   );
    //   setSubtotal(newSubtotal);

    //   const gst = Cart.reduce(
    //     (accumulator, item) => accumulator + (item.online_price * item.cart_product_qty * item.tax_per) / (100 + item.tax_per),
    //     0
    //   );
    //   setGst(gst);
    //   const pv = Cart.reduce(
    //     (accumulator, item) => accumulator + item.point_value,
    //     0
    //   );
    //   setPv(pv);

    //   const disc = Cart.reduce(
    //     (accumulator, item) => {
    //       console.log('Total Discount:', item.total_discount);
    //       const totalDiscount = parseFloat(item.total_discount);
    //       return accumulator + totalDiscount;
    //     }
    //     ,
    //     0
    //   );
    //   setDisc(disc);
    //   // console.log(disc);
    // }, [Cart]);


    const newSubtotal = Cart.reduce(
      (accumulator, item) => accumulator + item.sale_price * item.cart_product_qty,
      0
    );
    setSubtotal(newSubtotal);

    // Calculate the Gst whenever the cart items change
    // $gst = ($subto * $task->tax_per) / (100 + $task->tax_per);
    const gst = Cart.reduce(
      (accumulator, item) => accumulator + (item.sale_price * item.cart_product_qty * item.tax_per) / (100 + item.tax_per),
      0
    );
    setGst(gst);
    // Calculate the P v whenever the cart items change

    const pv = Cart.reduce(
      (accumulator, item) => accumulator + item.point_value,
      0
    );
    setPv(pv);
    // Calculate the Discount whenever the cart items change

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
    console.log(disc);
  }, [Cart]);
  return (
    <div className='index-about' >
      <div className='container-fluid'>
        <div className='row'>
          <div className='shop-bg-main'>
            <h1 className='package2'>YOUR CART</h1>

          </div>
        </div>
      </div>

      <div className='container shadow' style={{ marginTop: "100px", border: "2" }}>
        <h3 className='text-success pt-3 ms-4'>YOUR CART</h3>
        <hr className='py-1 bold text-success'></hr>
        <div className='container'>
          <div className='row'>
            <div className="col-12">


              <div className='table-content table-responsive my-2 table-bordered success'>
                <table className='table text-center' style={{ width: "100%", border: "1px solid white", borderRadius: "8px" }} >
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", padding: "20px", border: "1px solid white" }} className='text-white'>Remove</th>
                      <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", padding: "20px", border: "1px solid white" }} className='text-white'>Product</th>
                      <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", padding: "20px", border: "1px solid white" }} className='text-white'>Product Name</th>
                      <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", padding: "20px", border: "1px solid white" }} className='text-white'>Price</th>
                      <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", padding: "20px", border: "1px solid white" }} className='text-white'>Brand</th>
                      <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", padding: "20px", border: "1px solid white" }} className='text-white'>Quantity</th>
                      <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", padding: "20px", border: "1px solid white" }} className='text-white'>Tax</th>
                      <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", padding: "20px", border: "1px solid white" }} className='text-white'>P V</th>
                      <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", padding: "20px", border: "1px solid white" }} className='text-white'>TOTAL</th>

                    </tr>
                  </thead>
                  <tbody >
                    {Cart.map((item, index) => (
                      <tr className='border-bottom' style={{ fontSize: "16px", fontWeight: "bold" }}>
                        <td className="pt-4 border-end"><Link href="#"><i className="fa fa-times" /></Link></td>
                        <td className=" border-end"><img src={'https://vsmart.ajspire.com/uploads/product_image/' + item.product_image} alt="..." style={{ height: "120px", width: "120px" }} /></td>
                        <td className="pt-4 border-end">{item.english_name}</td>
                        <td className="pt-4 border-end">&#8377; {item.sale_price}</td>
                        <td className="pt-4 border-end">{item.brand_name}</td>
                        <td className="pt-4 border-end">{item.cart_product_qty}</td>
                        <td className="pt-4 border-end">&#8377; {((item.sale_price * item.cart_product_qty * item.tax_per) / (100 + item.tax_per)).toFixed(2)}</td>
                        <td className="pt-4 border-end">&#8377; {item.point_value}</td>
                        <td className="pt-4 border-end">&#8377; {item.sale_price * item.cart_product_qty}</td>

                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>


              <div className="row justify-content-center" style={{ marginTop: "70px" }}>
                <div className="col-md-6" >
                  <div className="cart-page-total">
                    <h1 className='justify-content-center' style={{ marginLeft: "32%", marginBottom: "30px", fontSize: "35px" }}>CART DETAILS</h1>
                    <hr className='hr1' style={{ color: "green" }}></hr>
                    <div typeof='none' className='d-flex' style={{ fontSize: "20px", color: "black", fontWeight: "bold" }}>
                      <div className='col-lg-6 col-md-6 col-sm-12'>
                        <ul type='none' style={{ marginLeft: "30%" }}>
                          <li>Subtotal </li>
                          <li>Tax </li>
                          <li>P V Value</li>
                          <li>Discount </li>

                          <li className='text-success'>Total(incl.TAX) </li>
                        </ul>
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-12'>
                        <ul type='none' style={{ marginLeft: "30%" }}>
                          <li><span>&#8377;{subtotal.toFixed(2)}</span></li>
                          <li> <span>&#8377;{gst.toFixed(2)}</span></li>
                          <li> <span>&#8377;{pv.toFixed(2)}</span></li>
                          <li><span>&#8377;{disc.toFixed(2)}</span></li>

                          <li className='text-success'><span>&#8377;{subtotal.toFixed(2)}</span></li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
      { /*<div class="d-grid gap-2">
        <div className='btncheck' style={{ display: "flex", justifyContent: "center" }}>
          <button type="button" class="btn-process btn-success p-3" ><Link to={'/checkout'}></Link>Proceed to checkout <span >&#8377;{subtotal.toFixed(2)}</span></button>
          
        </div>

                    </div>*/}

      <div className='Sub container '>
        <div className='row '>
          <div className='col-lg-9 col-md-6 col-12'>
            <p className='ptex2 ' > <Link className='lin' to={'/chekout'}>Proceed to checkout:  </Link> </p>
          </div>

          <div className='col-lg-3 col-md-6 col-12'>

            <p className='ptex text-end'> <Link className='lin'>&#8377;{subtotal.toFixed(2)}</Link> </p>
          </div>
        </div>
      </div>
    </div>




  )
}

export default Cart