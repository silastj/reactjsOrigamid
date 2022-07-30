import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { UserStorage } from './UserContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login/*' element={<Login/>}/>
          </Routes> 
          <Footer/>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
