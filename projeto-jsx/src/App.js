import './App.css';
import { GlobalStorage } from './GlobalContext';
import Product from './components/Product/index';

function App() {

  return (
   <GlobalStorage>
      <div className="App">
        <Product/>
      </div>
    </GlobalStorage>
  );
}

export default App;
