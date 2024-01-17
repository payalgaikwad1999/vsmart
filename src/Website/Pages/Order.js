import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Authuser from '../Authentication/Authuser';
import { ProgressBar } from 'react-bootstrap';


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
            <div className='container' >
                <div className='container shadow' style={{ marginTop: "90px", border: "2", backgroundColor: "white" }}>
                    <div className='row'>
                        {Myorder.map((item, index) => (
                            <div className='col-lg-12' >
                                <div className='' onClick={() => togglePanel(index + 1)}>
                                    <h2 className='text-success pt-3 ms-4' >Order#{item.ordermaster_id}</h2>
                                </div>

                                <hr className='py-1 bold text-success'></hr>
                                <div style={{ display: activePanel === index + 1 ? 'block' : 'none' }}>
                                    <div className="orderlist-body ps-5" >
                                        <div className='row'>
                                            <div className='col-lg-12' style={{ marginTop: "90px" }}>
                                                <div className='d-flex'>
                                                    <ProgressBar
                                                        className='order-progress1'
                                                        bgcolor="#99ccff"
                                                        progress="25"
                                                        height={5}
                                                    />
                                                    <ProgressBar
                                                        className=''

                                                        progress="25"
                                                        height={5}
                                                    />
                                                    <ProgressBar
                                                        className='order-progress'
                                                        bgcolor="#99ccff"
                                                        progress="25"
                                                        height={5}
                                                    />
                                                    <ProgressBar
                                                        className='order-progress'
                                                        bgcolor="#99ccff"
                                                        progress="25"
                                                        height={5}
                                                    />
                                                    <ProgressBar
                                                        className='order-progress'
                                                        bgcolor="#99ccff"
                                                        progress="25"
                                                        height={5}
                                                    />
                                                    <ProgressBar
                                                        className='order-progress'
                                                        bgcolor="#99ccff"
                                                        progress="25"
                                                        height={5}
                                                    />
                                                </div>

                                                {item.ordermaster_order_status == 1 ? (
                                                    <ul>
                                                        <li ><div className='tracklist-circle1 active'> <i class="fa-solid fa-check order-icon"></i><span>order Pending</span></div></li>
                                                        <li><div className='tracklist-circle' style={{ marginLeft: "15%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Accepted</span></div></li>
                                                        <li><div className='tracklist-circle' style={{ marginLeft: "30%" }}><i class="fa-solid fa-xmark order-icon1"></i> <span>Order Shipped</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "45%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Transporting</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "60%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Delivered</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "75%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Rejected</span></div>
                                                        </li>

                                                    </ul>
                                                ) : item.ordermaster_order_status == 2 ? (

                                                    <ul>
                                                        <li ><div className='tracklist-circle1 active'> <i class="fa-solid fa-check order-icon"></i><span>order Pending</span></div></li>
                                                        <li><div className='tracklist-circle' style={{ marginLeft: "15%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Accepted</span></div></li>
                                                        <li><div className='tracklist-circle' style={{ marginLeft: "30%" }}><i class="fa-solid fa-xmark order-icon1"></i> <span>Order Shipped</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "45%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Transporting</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "60%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Delivered</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "75%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Rejected</span></div>
                                                        </li>

                                                    </ul>
                                                ) : item.ordermaster_order_status == 3 ? (
                                                    <ul>
                                                        <li ><div className='tracklist-circle1'> <i class="fa-solid fa-check order-icon"></i><span>order Pending</span></div></li>
                                                        <li><div className='tracklist-circle' style={{ marginLeft: "15%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Accepted</span></div></li>
                                                        <li><div className='tracklist-circle' style={{ marginLeft: "30%" }}><i class="fa-solid fa-xmark order-icon1"></i> <span>Order Shipped</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "45%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Transporting</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "60%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Delivered</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "75%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Rejected</span></div>
                                                        </li>

                                                    </ul>
                                                ) : item.ordermaster_order_status == 4 ? (
                                                    <ul>
                                                        <li ><div className='tracklist-circle1'> <i class="fa-solid fa-check order-icon"></i><span>order Pending</span></div></li>
                                                        <li><div className='tracklist-circle' style={{ marginLeft: "15%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Accepted</span></div></li>
                                                        <li><div className='tracklist-circle' style={{ marginLeft: "30%" }}><i class="fa-solid fa-xmark order-icon1"></i> <span>Order Shipped</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "45%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Transporting</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "60%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Delivered</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "75%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Rejected</span></div>
                                                        </li>

                                                    </ul>
                                                ) : item.ordermaster_order_status == 5 ? (
                                                    <ul>
                                                        <li ><div className='tracklist-circle1'> <i class="fa-solid fa-check order-icon"></i><span>order Pending</span></div></li>
                                                        <li><div className='tracklist-circle' style={{ marginLeft: "15%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Accepted</span></div></li>
                                                        <li><div className='tracklist-circle' style={{ marginLeft: "30%" }}><i class="fa-solid fa-xmark order-icon1"></i> <span>Order Shipped</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "45%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Transporting</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "60%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Delivered</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "75%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Rejected</span></div>
                                                        </li>

                                                    </ul>
                                                ) : item.ordermaster_order_status == 6 ? (
                                                    <ul>
                                                        <li ><div className='tracklist-circle1'> <i class="fa-solid fa-check order-icon"></i><span>order Pending</span></div></li>
                                                        <li><div className='tracklist-circle' style={{ marginLeft: "15%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Accepted</span></div></li>
                                                        <li><div className='tracklist-circle' style={{ marginLeft: "30%" }}><i class="fa-solid fa-xmark order-icon1"></i> <span>Order Shipped</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "45%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Transporting</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "60%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Delivered</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "75%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Rejected</span></div>
                                                        </li>

                                                    </ul>
                                                ) : item.ordermaster_order_status != 6 ? (
                                                    <ul>
                                                        <li ><div className='tracklist-circle1'> <i class="fa-solid fa-check order-icon"></i><span>order Pending</span></div></li>
                                                        <li><div className='tracklist-circle' style={{ marginLeft: "15%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Accepted</span></div></li>
                                                        <li><div className='tracklist-circle' style={{ marginLeft: "30%" }}><i class="fa-solid fa-xmark order-icon1"></i> <span>Order Shipped</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "45%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Transporting</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "60%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Delivered</span></div>
                                                        </li>
                                                        <li>
                                                            <div className='tracklist-circle' style={{ marginLeft: "75%" }}><i class="fa-solid fa-xmark order-icon1"></i><span>Order Rejected</span></div>
                                                        </li>

                                                    </ul>
                                                ) :
                                                    null
                                                }


                                            </div>
                                        </div>

                                    </div>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className="col-lg-5 " >
                                                <ul className='order-ul'>
                                                    <li className='flex-container'>
                                                        <h2>Order Id</h2>
                                                        <p>{item.ordermaster_id}</p>
                                                    </li>
                                                    <li className='flex-container'>
                                                        <h2>Total Item</h2>
                                                        <p>{item.ordermaster_total_product}</p>
                                                    </li>
                                                    <li className='flex-container'>
                                                        <h2>Order Time</h2>
                                                        <p>{item.created_at}</p>
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
                                                        <h2>Cash Transaction Mode</h2>
                                                        {item.ordermaster_paymentmode == 1 ? (
                                                        <p>Cash on Delivery</p>
                                                        ) : item.ordermaster_paymentmode == 2 ? (
                                                            <p>

                                                                Online payment Transfer

                                                            </p>
                                                        ) : null
                                                    }
                                                    </li>
                                                    <li className='flex-container'>
                                                        <h2>Delivery Fee</h2>
                                                        <p>Free Of Cost Delivery</p>
                                                    </li>
                                                    <li className='flex-container'>
                                                        <h2>Total<small style={{ fontWeight: "bold" }}>(Incl.TAX)</small></h2>
                                                        <p>₹{item.ordermaster_total_amount}</p>
                                                    </li>




                                                </ul>
                                            </div>
                                            <div className="col-lg-3">
                                                <ul className='order-ull' style={{ paddingBottom: "100px" }}>
                                                    <li>
                                                        <h2>Delivery Location</h2>
                                                        <p style={{ textAlign: 'left', marginTop: "30px" }}>{item.address}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='container'>
                                            <div>
                                                <div>
                                                    <div className='table-content table-responsive my-2 table-bordered success' style={{ marginBottom: "50px" }}>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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
</div>


<div className='orderlist'>
                                    <ul className="order-track-list">

                                        <li className="order-track-item"><i className="icofont-check" /><span>order Pending</span></li>
                                        <li className="order-track-item "><i className="icofont-close" /><span>order
                                            Accepted</span></li>
                                        <li className="order-track-item"><i className="icofont-close" /><span>order
                                            Shipped</span></li>
                                        <li className="order-track-item"><i className="icofont-close" /><span>order
                                            Transporting</span></li>
                                        <li className="order-track-item"><i className="icofont-close" /><span>order
                                            delivered</span></li>
                                        <li className="order-track-item "><i className="icofont-close" /><span>order
                                            Rejected</span></li>

                                    </ul>
                                </div>*/}