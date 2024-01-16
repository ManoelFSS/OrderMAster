import React from 'react';
import { Login } from './pages/login/Login';
import {Home} from "./pages/home/Home"
import { useAuthContext } from "./contexts/AuthContext"




function App() {

  const {auths} = useAuthContext()


  

  return (
    <>
      { auths === true || auths === false ? (
       <Home/>
      ) : (
        <Login />
      )}

    </>
    
  );
}

export default App;