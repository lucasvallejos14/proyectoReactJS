
import './App.css';
import NavBar from './components/NavBar';
import ListProducts from './components/ListProducts';
function App() {
  return (
    <div className="App">
      <header className="App-header">

       <NavBar/>
       
       
      </header>
      
      
      <main className='App__main'>
       <div>
            <ListProducts/>
            <button>MORE</button>
       </div> 


      </main>


    </div>
  );
};

export default App;
