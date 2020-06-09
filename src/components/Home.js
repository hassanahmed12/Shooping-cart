import React from 'react'
import BlackShirt from '../Images/black.jpeg'
import yellowShirt from '../Images/yellow.jpg'
import WhiteShirt from '../Images/WhiteShirt.jpg';
import {connect} from 'react-redux'
import  {addbasket} from '../Actions/Addaction';

 function Home(props) {
     console.log(props)
    return (
        <div>
            <div className="container" >
                <div className="Image">
                <img  src={BlackShirt} className="img-fluid" alt="Responsive image"></img>
                <h3>Price=100$</h3>
                <a  onClick={props.addbasket} href="#" className="AddToCart"> add to cart</a>
                    </div>
                    <div className="Image">
                <img  src={yellowShirt} className="img-fluid " alt="Responsive image" ></img>
                <h3>Price=100$</h3>
                <a onClick={props.addbasket} href="#" className="AddToCart"> add to cart</a>
                    </div>
                    <div className="Image">
                <img  src={WhiteShirt} className="img-fluid" alt="Responsive image"></img>
                <h3>Price=100$</h3>
                <a onClick={props.addbasket} href="#"  className="AddToCart"> add to cart</a>
                    </div>
            </div>
        </div>
    )
}
export default connect(null,{addbasket})(Home);