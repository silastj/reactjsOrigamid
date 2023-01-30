import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import UserConta from './components/User/Account/UserConta';
import { UserStorage } from './UserContext';
import ProtectRoute from './ProtectRoute';

function App() {
  return (
    <div className='homeCenter'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login/*' element={<Login />} />
            <Route path='/conta/*' element={<ProtectRoute><UserConta /></ProtectRoute>} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
