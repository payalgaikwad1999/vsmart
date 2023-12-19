import React from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Newm = () => {
    return (
        <Container fluid >
            <Container className="bg-success">
                <Row>

                    <Navbar sticky="top" data-bs-theme="dark" >
                        <Col sm={12} md={6} lg={6}>
                            <Navbar.Brand href="#home" style={{ fontSize: "15px" }}>Welcome to VS Mart in Your Dream Online Store !</Navbar.Brand>


                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    <Link to="#login" style={{ textDecoration: "none", fontSize: "15px" }}>Contact Us</Link>
                                </Navbar.Text>
                            </Navbar.Collapse>

                        </Col>
                    </Navbar>

                </Row>
            </Container>
            <Row>

                <Col>
                    <Navbar expand="lg" bg="white">
                        <Container>


                            <div className=''>

                                <Link className="navbar-brand" href="#">
                                    <img src="https://vsmart.ajspire.com/images/logo1.png" alt width={150} height={110} className="d-inline-block align-text-top" />

                                </Link>
                            </div>
                            <div class="d-flex border2 ">
                                <input className="form-control mt-1 ms-1 mb-0 border-0 border-white" type="search" placeholder="Search Anything" aria-label="Search" style={{ width: "300px", height: "40px" ,fontSize:"17px"}} />
                                <button className="btn mt-1 ms-1 mb-1 border-0" type="submit" style={{ width: "40px", height: "40px" }}><i className="fa fa-search" /></button>
                            </div>

                            <div className='social-links mt-1 '>
                                <Link href=''><i class="fa-solid fa-wallet fa-beat"></i>  </Link>
                                <Link href=''><i class="fa-solid fa-shuffle fa-beat"></i>  </Link>
                                <Link href=''><i class="fa-solid fa-heart fa-beat"></i>  </Link>
                                <Link href=''><i class="fa-solid fa-basket-shopping fa-beat"></i>  </Link>

                            </div>
                            <div>
                                <Row><label className='textgreen'>TOTAL PRICE</label></Row>
                                <Row><label className='textgreen'>0</label></Row>



                            </div>
                            <div>
                                <Link className="navbar-brand" href="#">
                                    <img src="https://vsmart.ajspire.com/images/ee.png" alt width={40} height={34} className="d-inline-block align-text-top" />
                                    <span className='textgreen'>Login</span>
                                </Link>


                            </div>


                        </Container >

                    </Navbar>
                </Col>
            </Row>
            <hr></hr>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-light nav3" style={{ backgroundColor: "white" }}>
                    <div className="container-fluid">
                        <div className='container'>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto  mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link " aria-current="page" to="/">Home</Link>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Category
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/action">Action</Link></li>
                                            <li><Link className="dropdown-item" to="/action1">Another action</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link className="dropdown-item" to="/action2">Something else here</Link></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Brands
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/action">Action</Link></li>
                                            <li><Link className="dropdown-item" to="/action1">Another action</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link className="dropdown-item" to="/action2">Something else here</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Shop</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="">Banking Details</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="">Download</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="">Legal</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="">Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="">
                                            <div className='d-flex' >
                                                <Col style={{ marginRight: 20 }}><i class="fa-solid fa-mobile-screen fa-beat"></i></Col>
                                                <Col> <Row>Call Us</Row>
                                                    <Row>(+91)8446092500</Row></Col>
                                            </div>


                                        </Link>

                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="">
                                            <div className='d-flex' >
                                                <Col style={{ marginRight: 20 }}><i class="fa-solid fa-at fa-beat"></i></Col>
                                                <Col>
                                                    <Row>Email Us</Row>
                                                    <Row>vsmart0932@gmail.com</Row>
                                                </Col>
                                            </div>
                                        </Link>

                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>


        </Container>
    )
}

export default Newm