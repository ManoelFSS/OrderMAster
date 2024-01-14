import React from 'react';
import { Login } from './pages/login/Login';
import {Painel} from "./pages/painel/Painel"
import { useAuthContext } from "./contexts/AuthContext"




function App() {

  const {auths} = useAuthContext()


  

  return (
    <>
      { auths === true || auths === false ? (
       <Painel/>
      ) : (
        <Login />
      )}

    </>
    
  );
}

export default App;