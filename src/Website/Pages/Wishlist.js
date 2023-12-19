import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Authuser from '../Authentication/Authuser';

const Wishlist = () => {
    const { http, user ,token} = Authuser();
    const[Wishlist,setWishlist]=useState([]);
    const[setwish,setWish]=useState([]);
  console.log(Wishlist);
  
  
      const getWishItem = () => {
          http.get(`/get-wishlist`)
          .then((res) => {
              // console.log(res.data);
              setWishlist(res.data.wishlist);
            // console.log(res.data.cart.length);
        }).catch((e) => {
            console.log(e);
        });
           
        }
  
        const addTocart=(product_id)=>{
          // console.log(product_id);
          http.get(`/add-to-cart/${product_id}`).then((res)=>{console.log(res.data);}).catch((e)=>{console.log(e);});
          }
          const removewishlist=(wish_id)=>{
              // console.log(wish_id);
              http.get(`/remove-from-wishlist/${wish_id}`).then((res)=>{
                  // console.log(res.data);
                  setWish(wish_id);
             console.log(setWishlist((prevWishlist) => prevWishlist.filter(item => item.wish_id !== wish_id)));
              }).catch((e)=>{console.log(e);});
              
          }
        useEffect(()=>{
          getWishItem();
        },[token , setwish ])
    return (
        <div className='index-about' >
            <div className='container-fluid'>
                <div className='row'>
                    <div className='shop-bg-main'>
                        <h1 className='package2'>WISHLIST</h1>
                        <Link className='pa1'><span style={{ color: "white" }}> <i class="fa-solid fa-house fa-beat me-2" ></i></span>Home /<span>Wishlist</span></Link>

                    </div>
                </div>
            </div>

            <div className='container' style={{ marginTop: "100px" }}>
                <table className='table-table-bordered p-5' style={{ width: "100%", border: "1px solid white", borderRadius: "8px" }} >
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", padding: "20px", border: "1px solid white" }} className='text-white'>Remove</th>
                            <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", }} className='text-white'>Product-Img</th>
                            <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", border: "1px solid white" }} className='text-white'>Product-Name</th>
                            <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", border: "1px solid white" }} className='text-white'>Unit-Price</th>
                            <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", border: "1px solid white" }} className='text-white'>Stock-status</th>
                     
                            <th style={{ backgroundColor: "#43A047", fontSize: "20px", textAlign: "center", border: "1px solid white" }} className='text-white'>Add To Card</th>

                        </tr>
                    </thead>
                    <tbody>
                    {Wishlist.map((item)=>(


                        <tr>
                          <td className="pt-4 border-end">
                          
                            <li type='none' onClick={()=>removewishlist(item.wishe_id)}><i className="fa fa-times" /></li>
                          </td>
                          <td className="pt-4 border-end">
                    <Link to="#"><img src={'https://vsmart.ajspire.com/uploads/product_image/'+item.product_image} width={90} height={90} alt /></Link>
                          </td>
                          <td className="pt-4 border-end">
                            <Link to="#">{item.english_name}</Link>
                          </td>
                          <td className="pt-4 border-end">
                            <span className="amount">${item.sale_price}</span>
                          </td>
                          <td className="pt-4 border-end">
                            <span className="in-stock">in stock</span>
                          </td>
                          <td className="pt-4 border-end">
      
                            <Link onClick={()=>addTocart(item.product_id)}>add to cart</Link>
                           
                          </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Wishlist