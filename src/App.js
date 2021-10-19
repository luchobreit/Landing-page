import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Cards/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
