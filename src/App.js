import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
import Aboutus from './components/Aboutus';

function App() {
  return (
    <BrowserRouter>
    <div>
<nav>

<ul className="navbar navbar-light text-danger bg-light"  id="Nav">
<h3>Shop</h3>

<li><Link to = "/home">Home</Link></li>
<li><Link to = "/Aboutus">About us</Link></li>
<li><i class="fa fa-shopping-cart" aria-hidden="true"><Link to = "/Cart">Cart</Link></i></li>
</ul>

</nav>
<Switch>
  <Route path="/home" exact> <Home></Home></Route>
  
  <Route path="/Aboutus"> <Aboutus></Aboutus></Route>
  <Route path="/Cart"><Cart></Cart> </Route>
</Switch>
</div>
    </BrowserRouter>
  );
}

export default App;
