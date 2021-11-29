import "./css/style.css";
import "./App.css";

import { Route, Switch } from "react-router";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { current } from "./JS/actions/user";
import enu from "./Components/Menu";

import PrivateRoute from "./Components/router/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Profile from "./Components/Profile";
import NavBar from "./Components/NavBar";
import Acceuil from "./Components/Acceuil";
import Tables from "./Components/Tables";
import ItemAdd from "./Components/ItemAdd";
import Footer from "./Components/Footer";
import Carrousel from "./Components/Carrousel";
import Sliders from "./Components/Sliders";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />

        <Route exact path="/">
          <NavBar />
          <Carrousel />
          <Acceuil />
          <Footer />
        </Route>
        <Route path="/Menu">
          <NavBar />
          <Menu />
          <Footer />
        </Route>

        <Route path="/Contact">
          <NavBar />
          <Contact />
          <Footer />
        </Route>

        <Route path="/Cart">
          <NavBar />
          <Cart />
          <Footer />
        </Route>
        <Route path="/profile" component={Profile} />
        <PrivateRoute path="/Admin" component={Dashboard} />
        {/* <Tables/>
          <ItemAdd/> */}
      </Switch>
    </div>
  );
}

export default App;
