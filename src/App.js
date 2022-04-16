import './App.css';
import Chaekout from './component/chaekout/Chaekout';
import Not from './component/notfound/Not';
import Form from './sign-out-up-auth/Form/Form';
import Login from './sign-out-up-auth/logIn/Login';
import SignUp from './sign-out-up-auth/signUp/SignUp';


function App() {
  return (
    <div>
      <Login></Login>
      <SignUp></SignUp>
      <Chaekout></Chaekout>
    </div>
  );
}

export default App;
