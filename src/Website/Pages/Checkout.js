import React, { useEffect, useState } from 'react'
import Authuser from '../Authentication/Authuser';
import { Link } from 'react-router-dom';

const Checkout = () => {

  const { http, user, token } = Authuser();
  const [Cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [gst, setGst] = useState(0);
  const [pv, setPv] = useState(0);
  const [disc, setDisc] = useState(0);
  const [Order, setOrder] = useState({
    product_id: [], // An array of product IDs
    product_qty: [], // An array of product quantities
    sale_price: [], // An array of product prices
    discount: [], // An array of discounts
    pv_value: [], // An array of point values
    prototal: [], // An array of subtotals
    gst: [], // An array of GST values

    order_address: user.address, // Address for the order
    paymentmode: '', // Payment mode (adjust as needed)
    totalgst: '', // Total GST

    total: '', // Total order amount
    total_discount: '', // Total order discount
    totalpv: '', // Total point value
  })


  const getCartItem = () => {
    http.get(`/get-cart-list`)
      .then((res) => {
        const cartdata = res.data.cart;
        // console.log(cartdata);
        const productIds = [];
        const productQtys = [];
        const productPrices = [];
        const productDiscounts = [];
        const productPvValues = [];
        const productTotals = [];
        const productGsts = [];

        cartdata.forEach((item) => {
          productIds.push(item.product_id);
          productQtys.push(item.cart_product_qty);
          productPrices.push(item.sale_price);
          productDiscounts.push(item.discount);
          productPvValues.push(item.point_value);
          productTotals.push(item.cart_price);
          productGsts.push(item.tax_per);


        })

        // Assuming the response contains the list of cart items

        setOrder((prevOrder) => ({
          ...prevOrder,
          product_id: productIds, // An array of product IDs
          product_qty: productQtys, // An array of product quantities
          sale_price: productPrices, // An array of product prices
          discount: productDiscounts, // An array of discounts
          pv_value: productPvValues, // An array of point values
          prototal: productTotals, // An array of subtotals
          gst: productGsts,

        }))

        setCart(cartdata);
      })
  };
  useEffect(() => {
    getCartItem();
  }, [token]);
  useEffect(() => {
    // Calculate the subtotal whenever the cart items change

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
    // console.log(disc);



    setOrder((prevOrder) => ({
      ...prevOrder,
      total: newSubtotal,
      totalgst: gst,
      total_discount: disc,
      totalpv: pv,
    }));

  }, [Cart]);

  const OninputChange = (e) => {
    console.log(e);
    // Set({ ...Order, [e.target.name]: e.target.value });
    setOrder((prevOrder) => ({
      ...prevOrder,
      [e.target.name]: e.target.value
    }));
  }

  const placeOrder = (e) => {
    console.log(Order);

    e.preventDefault();
    // console.log(Order.product_id);
    http.post(`/order_now`, Order)
      .then((res) => {
        console.log(res.data + "hello payal");
        alert(res.data.msg + "Are you sure?")
      }).catch(function (er) {
        console.log(er);
      });

  };
 

  // let mydata = [{
  //   name: "Cash On Delivery",
  //   rs: "5000"
  // },
  // {
  //   name: "  Transfer",
  //   rs: "5000"
  // }, {
  //   name: "Use Wallet-bal-Current-Month",
  //   rs: "0.00"
  // }, {
  //   name: "Repurchase Amount",
  //   rs: "",

  // }
  // ]
  return (

    <div className='indexmain' >
      <div className='container-fluid '>
        <div className='row'>
          <div className='shop-bg-main'>
            <h1 className='package2'>CHECKOUT</h1>


          </div>
        </div>
      </div>
      <div className='container  shadow ' style={{ marginTop: "100px", border: "2", backgroundColor: "white" }}>
        <h3 className='text-success pt-3 ms-4'>YOUR CART</h3>
        <hr className='py-1 bold text-success'></hr>
        <div className='container'>
          <div className='row'>
            <div className="col-12">


              <div className='table-content table-responsive my-2 table-bordered success'>
                <table className='table text-center' style={{ width: "100%", border: "1px solid white", borderRadius: "8px" }} >
                  <thead>
                    <tr>
                      <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", padding: "20px", border: "1px solid white" }} className='text-white'>SR.No</th>
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
                    {Cart.map((item) => (
                      <tr className='border-bottom' style={{ fontSize: "16px", fontWeight: "bold" }}>
                        <td className="pt-4 border-end">1</td>
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



      <div className='container shadow px-5 py-5' style={{ marginTop: "100px", border: "2", backgroundColor: "white" }}>
        <h3 className='text-success'>DELIEVERY  ADDRESS</h3>
        <hr className='py-3 px-3 bold text-success'></hr>
        <div className='container'>
          <div className='row'>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card card-home" style={{ borderRadius: "10px" }}>
                <div className="card-body">
                  <h1 className="card-title mb-3">Home</h1>
                  <p className="card-text  mb-3" style={{color:"black",fontSize:"15px"}}>{user.address}</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card card-home" style={{ borderRadius: "10px" }}>
                <div className="card-body">
                  <h1 className="card-title mb-3">Contact Number</h1>
                  <p className="card-text mb-3" style={{color:"black",fontSize:"15px"}}>{user.mob_no}</p>

                </div>
              </div>
             
            </div>
           
          </div>
      
        </div>
      </div>
      <div className='container-fluid  shadow px-5 py-5' style={{ marginTop: "100px", border: "2", backgroundColor: "white" }}>
        <h3 className='text-success'>PAYMENT OPTION</h3>
        <hr className='py-3 px-3 bold text-success'></hr>

        <div className='row'>

          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className="card card-payment" style={{ borderRadius: "10px" }}>
              <div className="card-body">
                <label>
                  <input type='radio' name="paymentmode" value={'cash on delivery'} onClick={(e) => OninputChange(e)} style={{ width: "17px", height: "17px", }} />
                  <b style={{ color: "black", fontSize: "15px" }}>Cash On Delivery</b>
                </label>
                <h3 className="card-title mb-2" style={{ fontSize: "25px" }}>&#8377; {subtotal.toFixed(2)}</h3>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className="card card-payment" style={{ borderRadius: "10px" }}>
              <div className="card-body">
                <label>
                  <input type='radio' name='' value='CashOnDelivery' style={{ width: "17px", height: "17px", }} />
                  <b style={{ color: "black", fontSize: "15px" }}>Online Transfer</b>
                </label>
                <h3 className="card-title mb-2" style={{ fontSize: "25px" }}>&#8377; {subtotal.toFixed(2)}</h3>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className="card card-payment" style={{ borderRadius: "10px" }}>
              <div className="card-body">
                <label>
                  <input type='radio' name='' value='CashOnDelivery' style={{ width: "17px", height: "17px", }} />
                  <b style={{ color: "black", fontSize: "15px" }}>Use Wallet balance Current Month
                  </b>
                </label>
                <h3 className="card-title mb-2" style={{ fontSize: "25px" }}>&#8377;0.00 </h3>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className="card card-payment" style={{ borderRadius: "10px" }}>
              <div className="card-body" style={{ marginBottom: "40px" }}>
                <label>
                  <input type='radio' name='' value='CashOnDelivery' style={{ width: "17px", height: "17px", }} />
                  <b style={{ color: "black", fontSize: "15px" }}>Repurchase Amount

                  </b>
                </label>
                <h3 className="card-title mb-2" style={{ fontSize: "25px" }}>    ₹</h3>
              </div>
            </div>
          </div>

        </div>

        <div style={{ marginTop: "90px" }}>
          <label style={{ fontSize: "18px", color: "black", }}>  <input type='checkbox' style={{ marginRight: "8px", width: "17px", height: "17px", }} />
            By making this purchase you agree to our Terms and Conditions
          </label>
        </div>
        <div class="d-grid gap-2">
          <div className='btncheck' style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit" class="btn-process btn-success p-3" onClick={(e) => placeOrder(e)}><Link to='' style={{ textDecoration: "none", color: "white" }}>CONFIRM ORDER</Link> </button>

          </div>

        </div>
      </div>
    </div>
    // type="submit" onClick={(e)=>placeOrder(e)}

  )
}

export default Checkout