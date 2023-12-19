import React from 'react'
import Header from './Main Component/Header'
import Footer from './Main Component/Footer'

const Master = ({Comp}) => {
  return (
    <div >
      <Header></Header>
      <Comp></Comp>
      <Footer></Footer>
    </div>
  )
}

export default Master;