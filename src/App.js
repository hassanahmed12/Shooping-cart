import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
import Aboutus from './components/Aboutus';
import {connect} from 'react-redux';
import  {addbasket} from '../src/Actions/Addaction';

function App(props) {
  console.log(props)
  return (
    
    <BrowserRouter>
    <div>
<nav>

<ul className="navbar navbar-light text-danger bg-light"  id="Nav">
<h3>Shop</h3>

<li><Link to = "/home">Home</Link></li>
<li><Link to = "/Aboutus">About us</Link></li>
  <li><i className="fa fa-shopping-cart" aria-hidden="true"><Link to = "/Cart">Cart</Link></i></li>
</ul>

</nav>
<Switch>
  <Route path="/home" > <Home></Home></Route>
  
  <Route path="/Aboutus"> <Aboutus></Aboutus></Route>
  <Route path="/Cart"><Cart></Cart> </Route>
</Switch>
</div>
    </BrowserRouter>
  );
}
const MapStateToProps=(state)=>{
return {
  basketProps:state.basketState
}
}

export default connect(MapStateToProps,{addbasket})(App);
