
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Copas from './components/Copas';

function App() {
  return (
    <div className="App">
      <header className="App-header">

       <NavBar/>
       
       
      </header>
      
      
      <main className='App__main'>
          <div className='infoVinos'>
            <p className='infoVinos_texto'>the best wine is not necessarily the most expensive, but the one that is shared</p>  
          </div>
          <div className='App__main-vinos'>
            <ItemListContainer/>
            
          </div>
          <div className='infoCopas'>

            <p className='infoCopas__texto'>
            sometimes a night of drinks with friends is what we need, I chose yours.
            </p>
          </div>
          <div className='App__Copas'>
            <Copas/>
          </div>
      </main>


    </div>
  );
};

export default App;
