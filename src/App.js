import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacto from "./components/Contacto/Contacto";
import UserContextProvider from "./components/Context/UserContext";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Pages/Home";
import Sign from "./components/Singn-up/Sign";
import Viaje from "./components/Viaje/Viaje";
import Bariloche from "./components/Bariloche/Bariloche";

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
          <Route exact path="/bariloche">
              <Bariloche 
              titulo1="Rio Negro" 
              titulo2="Bariloche"
              imagenarg="/imagenes/Brc/mapaarg2.png" 
              imgprov1="/imagenes/Brc/mapabrc0.png"
              imgprov2="/imagenes/Brc/mapabrc2.png"
              intro="Descubrí lo que Bariloche tiene para dar. Conocé la variedad de propuestas de la ciudad y planificá tu viaje para que todo salga como lo soñaste."          
              imgact1="/imagenes/Brc/laguna-negra.jpg"
              imgact2="/imagenes/Brc/lago-brc.jpg"
              imgact3="/imagenes/Brc/bariloche-familia.jpg"
              refugio1="/imagenes/Brc/laguna-negra2.jpg"
              refugio2="/imagenes/Brc/jakob.jpg"
              refugio3="/imagenes/Brc/rocca.jpg"
              />
          </Route>
          <Route exact path="/elbolson">
              <Bariloche 
              titulo1="Rio Negro" 
              titulo2="El Bolson"
              imagenarg="/imagenes/Brc/mapaarg2.png" 
              imgprov1="/imagenes/Brc/mapabrc1.png"
              imgprov2="/imagenes/Brc/mapabrc2.png"
              intro="El Bolsón lleva la magia en el aire y esa magia es contagiosa: late en quienes aquí viven y también en los que están de paso."          
              imgact1="/imagenes/ElBolson/refugioB.jpg"
              imgact2="/imagenes/ElBolson/lagoB.jpg"
              imgact3="/imagenes/ElBolson/familiaB.jpg"
              />
          </Route>
          <Route exact path="/laslenas">
          <Bariloche 
              titulo1="Mendoza" 
              titulo2="Las Leñas"
              imagenarg="/imagenes/LasLeñas/mapaarg2M.png" 
              imgprov1="/imagenes/LasLeñas/mapamendoza1.png"
              imgprov2="/imagenes/LasLeñas/mapamendoza2.png"
              intro="Descubrí lo que Bariloche tiene para dar. Conocé la variedad de propuestas de la ciudad y planificá tu viaje para que todo salga como lo soñaste."          
              imgact1="/imagenes/LasLeñas/RefugioLL.jpg"
              imgact2="/imagenes/LasLeñas/el-lagoLL.jpg"
              imgact3="/imagenes/LasLeñas/familiaLL.jpg"
              />
          </Route>
        </Switch>
      </Router>
    </UserContextProvider>
    </>
  );
}

export default App;
