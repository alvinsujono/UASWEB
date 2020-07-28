import React, { useReducer, createContext } from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import LoginComp from './commponent/LoginComp';
import HomeComp from './commponent/HomeComp';
import RegisterComp from './commponent/RegisterComp';
import MenuCompo from './commponent/MenuCompo';
import NavbarComp from './commponent/NavbarComp';
import PelangganComp from './commponent/PelangganComp';
import Produk from './commponent/Produk';
import About from './commponent/About';
import TambahPel from './commponent/TambahPel';
import EditPel from './commponent/EditPel';

//Context
export const AuthContext = createContext()

//Inisiasi State
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      }

    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }

    default:
      return state
  }
}



function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <BrowserRouter>
      <Switch>
        <AuthContext.Provider value={{
          state,
          dispatch
        }}>
          <MenuCompo />
          {!state.isAuthenticated ?
            <Redirect
              to={{
                pathname: "/"
              }}
            /> :
            <Redirect
              to={{
                pathname: "/pelanggan"
              }}
            />
          }
          <NavbarComp/>
{/*           
          <Route exact path="/" component={NavbarComp} /> */}
          <Route exact path="/login" component={LoginComp} />
          <Route exact path="/" component={HomeComp} />
          <Route exact path="/produk" component={Produk} />
          <Route exact path="/About" component={About} />
          <Route exact path="/pelanggan" component={PelangganComp} />
          <Route exact path="/tambah" component={TambahPel} />
          <Route exact path="/Register" component={RegisterComp} />
          <Route exact path="/EditPel" component={EditPel} />
        </AuthContext.Provider>

      </Switch>
    </BrowserRouter>
  );
}

export default App;