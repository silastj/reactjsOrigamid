import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import UserConta from './components/User/Account/Users/UserConta';
import { UserStorage } from './UserContext';
import ProtectRoute from './ProtectRoute';
import Photo from './components/Photo';
import UserProfile from './components/User/Account/Users/UserProfile';
import NotFound from './components/404';
import Questions from './components/Questions/index';

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
            <Route path='/foto/:id' element={<Photo/>} />
            <Route path='/perfil/:user' element={<UserProfile/>} />
            <Route path='/perguntas' element={<Questions/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
