import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Authuser from './Authuser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const { http } = Authuser();

    const [formData, setFormData] = useState({
        name: '',
        mob_no: '',
        address: '',
        email: '',
        password: '',
        cpassword: ''
    });


    const OninputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // console.log("form", formData);
    }

    const onSubmit = (e) => {
        http.post(`/userregister`, formData).then((res) => {
            console.log(res.data);
            toast.success('Registration Successfully', {
                className: 'larger-font' 
              });
            // SetDisable(0);
        }).catch((e) => {
           
            toast.error("registration Failed..Please Try again", {
                className: 'larger-font' 
              });
            
            // SetDisable(0);
        });
    };




    return (
        <div className='container-fluid' style={{ height: "100%", width: "100%" }}>

            <section className="px-5 py-5 bg-image" style={{ backgroundColor: '#F2F3F4 ' }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: 15 }}>
                                    <div className="card-body p-5">
                                        {/*<img src='https://vsmart.ajspire.com/images/logo1.png' ></img>*/}
                                        <h2 className="text-uppercase text-center " style={{ color: "green" }}>Join Now!</h2>
                                        <h4 className="text-uppercase text-center mb-5" >Setup A New Account In A Minute</h4>
                                        {/*<form>*/}
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                            <input type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder='Enter Your Name' name='name' onChange={(e) => OninputChange(e)} />

                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                            <input type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder='Enter Your E-mail' name='email' onChange={(e) => OninputChange(e)}
                                            />

                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4cg">Mobile No</label>
                                            <input type="text" id="form3Example4cg" className="form-control form-control-lg" name='mob_no' placeholder='Enter Your Number' onChange={(e) => OninputChange(e)} />

                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4cg">Address</label>
                                            <input type="text" id="form3Example4cg" className="form-control form-control-lg" name='address' placeholder='Enter Your Address' onChange={(e) => OninputChange(e)} />

                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                            <input type="password" id="form3Example4cg" className="form-control form-control-lg" name='password' placeholder='Enter Your Password' onChange={(e) => OninputChange(e)} />

                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4cdg">Confirm password</label>
                                            <input type="password" id="form3Example4cdg" className="form-control form-control-lg" name='cpassword' placeholder='Enter repeat Password' onChange={(e) => OninputChange(e)} />

                                        </div>
                                        <div classname="form-check d-flex justify-content-center mb-5">
                                            <input classname="form-check-input me-2" type="checkbox" defaultvalue id="form2Example3cg" />

                                            <label classname="form-check-label" htmlfor="form2Example3g" style={{ fontSize: "17px", marginLeft: "5px" }}>
                                                I agree all statements in <a href="#!" classname="text-body"><u>Terms of service</u></a>
                                            </label>
                                        </div>


                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className="btn btn-success p-3" onClick={(e) => onSubmit(e)} style={{ color: "white" }}>Register</button>
                                        </div>
                                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>
                                        {/* </form>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default Register