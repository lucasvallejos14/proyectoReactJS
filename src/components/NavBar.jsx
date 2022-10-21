import "../App.css"

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
                
            <div className="App__nav-cart">
                <img src="./imagenes/carticono.png" alt="cart" className="cart"/>
            </div>
        </div>
    );
};


export default NavBar;






















