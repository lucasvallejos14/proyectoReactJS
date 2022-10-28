import "../App.css"
import CartWidget from "./CartWidget"
const NavBar = () =>{

    

    return ( 
        <div className="App__nav">
            <div className="App__nav-logo">
                <img src="./imagenes/logo.jpeg" alt="logo" className="logo"/>
            </div>

            <div className="App__nav-nav">
                <h1> Wines </h1> 
                <h1> Home </h1>
                <h1> Products</h1>
            </div> 

            <CartWidget/>
        </div>
    );
};


export default NavBar;






















