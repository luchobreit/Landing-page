import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacto from "./components/Contacto/Contacto";
import UserContextProvider from "./components/Context/UserContext";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Pages/Home";
import Sign from "./components/Singn-up/Sign";
import Viaje from "./components/Viaje/Viaje";

function App() {
  return (
    <>
    <UserContextProvider>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/viaje" component={Viaje}/>
          <Route exact path ="/contacto" component={Contacto}/>
          <Route exact path ="/signin" component={Sign}/>
        </Switch>
      </Router>
    </UserContextProvider>
    </>
  );
}

export default App;
