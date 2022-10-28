
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">

       <NavBar/>
       
       
      </header>
      
      
      <main className='App__main'>
       <div>
            <ItemListContainer/>
            
       </div> 


      </main>


    </div>
  );
};

export default App;
