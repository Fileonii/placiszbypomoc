import React, { Fragment } from "react";

import "./styles/App.css";



import Navigation from './components/Navigation';
import LoginPage from "./components/pages/login";
import MainView from"./components/pages/mainView";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import { auth, user } from './firebase/firebase'

function App() {

  React.useEffect( () => {
    const unsubscribe = auth.onAuthStateChanged(data => console.log(data))
  
    return () => unsubscribe()
  },[]);
  //use effect wykonuje sie raz, bo sa puste nawiasy kwadratowe
  //jak chcemy zeby się pokazywal przy zmianie danej zmiennej trzeba ja 
  //umiescic w kwadratowe
 
  return (
  

<Router>
<Navigation />
  <Switch>

    <Route exact path="/">
      <MainView></MainView>
    </Route>

    <Route exact path="/login">
    <LoginPage></LoginPage>
    </Route>

  </Switch>
</Router>
  );
}

export default App;
