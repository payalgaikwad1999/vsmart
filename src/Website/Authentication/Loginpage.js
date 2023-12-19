import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Authuser from './Authuser';
import { useEffect } from 'react';
const Loginpage = () => {
  const notify=(M)=>toast.error(M);


  const {http,setToken,setuser,token}=Authuser();
  const[btnDisable,setDisebale]=useState(0);
  const [Login,setLogin]=useState(
    {
      email:'',
      password:'',
    }
  );
  // console.log(Login);


  const navigate = useNavigate();
  useEffect(()=>{
    if(token!=null){
      navigate("/");
    }
    // else{
    //   navigate("/login");
    // }
    window.scrollTo({
      top:0,
      behavior:"smooth",
    },[navigate,token]);
  });
  const Onlogin=(e)=>{
    e.preventDefault();
  http.post(`/user/login`,Login).then((res)=>{
    console.log(res.data.user_data);

    if(res.data.token){
      setToken(res.data.user_data,res.data.token);
      navigate("/");
    }
    else{
      notify(res.data.message);
    }
    setDisebale(0);
  })
  .catch((error)=>{
  //  notify("The provided credentials are invlid");
    setDisebale(0);
  });
  e.preventDefault();
  toast.success("Login Successful!", {
    className: 'larger-font' 
  })
}
 
  const OninputChange=(e)=>{
    setLogin({...Login,[e.target.name]:e.target.value});
  }
  // const onSubmit=(e)=>{
  //   http.post('/user/login',Login)
  //   .then((res)=>{
  //     console.log(res.data)
  //      setDisebale(0)
  //   })
  //   .catch((error)=>{
  //     setDisebale(0);
  //   });
  //   e.preventDefault();
  // }

 
  return (
    <section className="vh-100" style={{ backgroundColor: '#F2F3F4 ' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">

                <h1 className="" style={{ color: "green" }}>Welcome To VS Mart</h1>
                <h4>Use Your Credentials To Access</h4>
                <div className="form-outline mb-4 mt-5">
                  <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                  <input type="email" id="typeEmailX-2" className="form-control form-control-lg" name='email' onChange={(e)=>OninputChange(e)}/>

                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                  <input type="password" id="typePasswordX-2" className="form-control form-control-lg" name='password' onChange={(e)=>OninputChange(e)} />

                </div>
                {/* Checkbox */}
                <div className="form-check d-flex justify-content-start mb-4">
                  <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" />
                  <label className="form-check-label" htmlFor="form1Example3" style={{ fontSize: "18px", fontWeight: "450", color: "black" }}> Remember password </label>
                </div>
                <button onClick={(e)=>Onlogin(e)} className="btn btn-success btn-lg btn-block p-3" type="submit" style={{ fontSize: "20px" }} >Login</button>
                <hr className="my-4" />
                <p style={{ fontSize: "18px" }}>Forgot your password <Link to="/register">Regester here</Link></p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Loginpage