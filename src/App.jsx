import React from 'react';
import { Login } from './pages/login/Login';
import {Painel} from "./pages/painel/Painel"
import { useAuthContext } from "./AuthContext"
function App() {

  const {auth} = useAuthContext()

  return (
    <>
      { auth === true || auth === false ? (
       <Painel/>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;