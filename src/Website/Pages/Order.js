import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Authuser from '../Authentication/Authuser';

const Order = () => {

    const { http, user, token } = Authuser();
    const [Myorder, setMyorder] = useState([]);

    const [Order, setOrder] = useState([]);

    const [activePanel, setActivePanel] = useState(0);

    const togglePanel = (index) => {
        setActivePanel(index === activePanel ? -1 : index);
    };
    console.log(Order);

    const getMyOrder = () => {
        http.get(`/get_all_orders`)
            .then((res) => {
                setMyorder(res.data.myOrder.data);
                setOrder(res.data.myOrderproduct);
                // console.log(res.data);
            }).catch((e) => {
                console.log(e);
            });



    }
    useEffect(() => {
        getMyOrder();
    }, [token]);

    return (
        <div className='indexmain'>
            <div className='container-fluid '>
                <div className='row'>
                    <div className='shop-bg-main'>
                        <h1 className='package2'>ORDER HISTORY</h1>
                        <Link className='pa1'><span style={{ color: "white" }}> <i class="fa-solid fa-house fa-beat me-2" ></i></span>Home /<span>View Orders</span></Link>
                    </div>
                </div>
            </div>
            <div className='' style={{ marginTop: "60px", marginBottom: "60px" }}>
                <div className='main-btn' style={{ height: "120px", width: "100%", backgroundColor: "white", display: "flex", justifyContent: "flex-end" }}>
                    <button type="button" class="btn-outline-success" style={{ height: "60px", width: "300px", fontSize: "20px", color: "black", marginTop: "25px", marginRight: "20px", borderRadius: "8px" }}>Offline Order History</button>
                </div>
            </div>

            <div className='container shadow' style={{ marginTop: "100px", border: "2", backgroundColor: "white" }}>
                <h3 className='text-success pt-3 ms-4'>Order#5258</h3>
                <hr className='py-1 bold text-success'></hr>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='main-order'>
                        <div className='orderlist'>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-5 " >
                            <ul className='order-ul'>
                                <li className='flex-container'>
                                    <h3>Order Id</h3>
                                    <p>5258</p>
                                </li>
                                <li className='flex-container'>
                                    <h3>Total Item</h3>
                                    <p>2Items</p>
                                </li>
                                <li className='flex-container'>
                                    <h3>Order Time</h3>
                                    <p>2023-12-18 11:18:08</p>
                                </li>
                                <li className='flex-container'>
                                    <h2>Delivery Time</h2>
                                    <p>After Accepted Order Required Minimum 2 Days To Place Order</p>
                                </li>

                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <ul className='order-ull'>
                                <li className='flex-container'>
                                    <h3>Cash Transaction Mode</h3>
                                    <p>Cash on Delivery</p>
                                </li>
                                <li className='flex-container'>
                                    <h3>Delivery Fee</h3>
                                    <p>Free Of Cost Delivery</p>
                                </li>



                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <ul className='order-ull' style={{ paddingBottom: "100px" }}>
                                <li>
                                    <h3>Delivery Location</h3>
                                    <p style={{ textAlign: 'left', marginTop: "30px" }}>Molestiae Maiores Re</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='container'>
                        <div>
                            <div>
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
                                                <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", padding: "20px", border: "1px solid white" }} className='text-white'>Return Order</th>


                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Order.map((item, index) => (
                                                <tr className='border-bottom' style={{ fontSize: "30px", fontWeight: "bold" }}>
                                                    <td>
                                                        <h6 style={{ fontSize: "20px" }}>{index + 1}</h6>
                                                    </td>
                                                    <td>
                                                        <img src={'https://vsmart.ajspire.com/uploads/product_image/' + item.product_image} alt="" style={{ width: 100, height: 100 }} />
                                                    </td>
                                                    <td>
                                                        <h6 style={{ fontSize: "20px" }}>{item.english_name}</h6>
                                                    </td>
                                                    <td>
                                                        <h6 style={{ fontSize: "20px" }}>₹{item.sales_product_price}<small>/{item.unit_name}</small></h6>
                                                    </td>
                                                    <td>
                                                        <h6 style={{ fontSize: "20px" }}>{item.brand_name}</h6>
                                                    </td>
                                                    <td>
                                                        <h6 style={{ fontSize: "20px" }}>{item.sales_product_qty}</h6>
                                                    </td>
                                                    <td>
                                                        {/* <div className='bg-danger' style={{ height: "50px", width: "70px",borderRadius:"8px" }}>*/}
                                                        <button type="button" class=" btn-danger" style={{ height: "50px", width: "70px", borderRadius: "8px" }}>
                                                            <i class="fa-solid fa-reply" style={{ color: "white", fontSize: "30px" }}></i>
                                                        </button>

                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>

                                    </table>
                                </div></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Order

{/*<div className='container' style={{backgroundColor:"white"}}>
<div className='row'>
<div className='col-lg-5'>
    <ul>
        <li className='flex-container'>
            <h2>Order Id</h2>
            <p>5258</p>
        </li>

    </ul>
</div>
<div className='col-lg-4'>
</div>
<div className='col-lg-3'>
</div>
</div>
</div>*/}