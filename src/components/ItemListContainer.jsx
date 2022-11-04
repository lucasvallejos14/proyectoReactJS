
import "../App.css";

const ItemListContainer = () => {
  return (
    <div className='Products'>
      <div className='Products__vinos'>
        <div className='Products_muestra'>

          <img src="./imagenes/vinoblanco.png" alt="vino blanco"  width={160} height={200}/>

        </div>
        <div className='Products_muestra'>

          <img src="./imagenes/vinotintoo.png" alt="vino tinto" width={160} height={200}/>

        </div>
        <div className='Products_muestra'>

          <img src="./imagenes/espumante.png" alt="vino espumante" width={160} height={200}/>

        </div>
      
      </div>
        
        
        <button className='App__main-boton' >More Wines</button>

      
    </div>
  );
};


export default ItemListContainer;