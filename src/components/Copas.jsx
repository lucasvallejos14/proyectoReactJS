import "../App.css"
const Copas  = () => {
  return (
    
        <div className='Copas__main'>
            <div className='Copas__copas'>
                <div className='Copas__copas-muestra'>

                    <img src="../imagenes/copablanco.png" alt="copa para vino blanco"  width={160} height={200}/>

                </div>

                <div className='Copas__copas-muestra'>

                    <img src="../imagenes/copatinto.png" alt="copa para vino tinto" width={160} height={200}/>

                </div>

                <div className='Copas__copas-muestra'>

                    <img src="../imagenes/copaespumante.png" alt="copa para vino espumante" width={160} height={200}/>

                </div>
      
            </div>
        
        
            <button className='Copas__boton' >More Wines</button>

      
        </div>
    
  )
}

export default Copas;

