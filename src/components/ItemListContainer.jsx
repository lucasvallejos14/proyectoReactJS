
import "../App.css";

const ItemListContainer = () => {
  return (
    <div className='Products'>
      <div className='Products__vinos'>

        <img src="./imagenes/vino1.jpg" alt="vino blanco" className='Products_muestra' width={160} height={200}/>

        <img src="./imagenes/vino2.jpg" alt="vino tinto" className='Products_muestra'width={160} height={200}/>
      
        <img src="./imagenes/vino3.jpeg" alt="vino espumante" className='Products_muestra'width={160} height={200}/>
      
      </div>
        
        
        <button className='App__main-boton' >MORE</button>

      
    </div>
  );
};


export default ItemListContainer;