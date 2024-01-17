import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Header from './Website/Main Component/Header';
import Master from './Website/Master';
import Index from './Website/Main Component/Index';
import Shop from './Website/Pages/Shop';
import Shopcategory from './Website/Pages/Shopcategory';

import Loginpage from './Website/Authentication/Loginpage';
import Register from './Website/Authentication/Register';
import Subbrand from './Website/Pages/Subbrand';
import About from './Website/Pages/About';
import Bankingdetails from './Website/Pages/Bankingdetails';
import Download from './Website/Pages/Download';
import Wishlist from './Website/Pages/Wishlist';
import Cart from './Website/Pages/Cart';
import Search from './Website/Pages/Search';
import Legal from './Website/Pages/Legal';
import Subproduct from './Website/Pages/Subproduct';

import Subitems from './Website/Pages/Subitems';
import Checkout from './Website/Pages/Checkout';
import Order from './Website/Pages/Order';
import Bolg from './Website/Pages/Bolg';



function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>

<Route path='/' element={<Master Comp={Index}/>}/>
<Route path='/shop' element={<Master Comp={Shop}/>}/>
<Route path='/product-shop/:cat_id/:sub_id' element={<Master Comp={Shopcategory}/>}/>
<Route path='/product-shop/:brand_id' element={<Master Comp={Subbrand}></Master>}></Route>
<Route path='/login' element={<Master Comp={Loginpage}/>}/>
<Route path='/register' element={<Master Comp={Register}/>}/>
<Route path='/about' element={<Master Comp={About}/>}/>
<Route path='/bank' element={<Master Comp={Bankingdetails}/>}/>
<Route path='/download' element={<Master Comp={Download}/>}/>
<Route path='/legal' element={<Master Comp={Legal}/>}/>
<Route path='/wishlist' element={<Master Comp={Wishlist}/>}/>
<Route path='/cart' element={<Master Comp={Cart}/>}/>
<Route path='/search' element={<Master Comp={Search}/>}/>
<Route path='/subproduct' element={<Master Comp={Subproduct}/>}/>
<Route path='/subitem' element={<Master Comp={Subitems}/>}/>
<Route path='/chekout' element={<Master Comp={Checkout}/>}/>
<Route path='/order' element={<Master Comp={Order}/>}/>
<Route path='/blog' element={<Master Comp={Bolg}/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
