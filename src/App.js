import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacto from "./components/Contacto/Contacto";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Pages/Home";
import Sign from "./components/Singn-up/Sign";
import Viaje from "./components/Viaje/Viaje";

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/viaje" component={Viaje}/>
        <Route exact path ="/contacto" component={Contacto}/>
        <Route exact path ="/signup" component={Sign}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
