import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/about/About';
import Blog from './component/blog/Blog';
import Chaekout from './component/chaekout/checkout';

import Header from './component/header/Header';
import Home from './component/home/Home';
import Not from './component/notfound/Not';
import Login from './sign-out-up-auth/logIn/Login';
import LogOut from './sign-out-up-auth/logOut/LogOut';
import SignUp from './sign-out-up-auth/signUp/SignUp';


function App() {

  return (
    <div>
      <Header></Header>
      {/* <Login></Login> */}
      {/* <SignUp></SignUp>
      <Chaekout></Chaekout> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/chackout' element={<Chaekout></Chaekout>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/logout' element={<LogOut></LogOut>}></Route>
        <Route path='*' element={<Not></Not>}></Route>
      </Routes>
    </div>
  );
}

export default App;
