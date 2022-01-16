import { useState, useEffect } from 'react';
import Atmosfera from "./Atmosfera";
import Vientos from "./Viento";
import DiaNoche from "./DiaNoche";
import Terreno from './Terreno'
/* import Materialize from "materialize-css" */
/* import 'materialize-css/dist/css/materialize.min.css' */
/* import {Button, Icon} from 'react-materialize' */

function App() {



  
  const [ atmosfera, setAtmosfera] = useState(-1);
  const [ Viento, setViento] = useState(-1);
  const [visible, setVisible] = useState(true);  // visibility state
  
  
let nubosidad,
    viento;

if(atmosfera >= 0 && atmosfera <= 10){
  nubosidad="None 0-1.0 cm";
}
if(atmosfera >= 11 && atmosfera <= 20){
  nubosidad="Scant clouds 1.1 - 2.0 cm";
}
if(atmosfera >= 21 && atmosfera <= 30){
  nubosidad="Scattered clouds 2.1 - 3.0 cm";
}
if(atmosfera >= 31 && atmosfera <= 40){
  nubosidad="Slightly overcast 3.1 - 4.0 cm";
}
if(atmosfera >= 41 && atmosfera <= 50){
  nubosidad="Moderately overcast 4.1 - 5.0 cm";
}
if(atmosfera >= 51 && atmosfera <= 65){
  nubosidad="Mostly overcast 5.1 - 6.5 cm";
}
if(atmosfera >= 66 && atmosfera <= 80){
  nubosidad="Completely overcast 6.6 - 8.0 cm";
}
if(atmosfera >= 81 && atmosfera <= 100){
  nubosidad="Dense clouds, little light 8.1 - 10 cm";
}
if(atmosfera === -1){
  nubosidad="Ingrese Numero";
}
if(atmosfera > 100 || atmosfera < -1){
  nubosidad="Err";
}

if(Viento >= 0 && Viento <= 2){
  viento="Calm, no air movement";
}
if(Viento >= 3 && Viento <= 6){
  viento="Light air, little movement; gutters a candle, may not blow it out.";
}
if(Viento >= 7 && Viento <= 12){
  viento=" Breeze; easily blows out a candle.";
}
if(Viento >= 13 && Viento <= 18){
  viento="Light wind. Lower limit for good sailing in boats. Poison gas will dissipate.";
}
if(Viento >= 19 && Viento <= 24){
  viento="Moderate wind. Dangerous to flying creatures and may knock them down. Birds typically roost in such wind.";
}
if(Viento >= 25 && Viento <= 30){
  viento="Strong wind. Menacing to average humans, may knock them down. Upper limit sailing ships can endure.";
}
if(Viento >= 31 && Viento <= 36){
  viento="Fresh gale. Impossible for average humans to remain afoot.";
}
if(Viento >= 37 && Viento <= 45){
  viento="Fierce gale.";
}
if(Viento >= 46 && Viento <= 50){
  viento="Hurricane.";
}
if(Viento === -1){
  viento="Ingrese un Numero";
}
if(Viento >50 ||Viento < -1 ){
  viento="Err";
}
  return (
    <>
  <section>
    <div className="InputsContainer">
    <div className="Title"></div>

    <div className="DayNight">
    <DiaNoche/>
    </div>

    <Atmosfera
    atmosfera={atmosfera}
    setAtmosfera={setAtmosfera}
    />
    <h2>{nubosidad}</h2>

    <div>
      <Vientos
      Viento={Viento}
      setViento={setViento}
      />
      <h2>{viento}</h2>
    </div>

    <div>
      <Terreno
      visible={visible}
      setVisible={setVisible}
      />
    </div>
    </div>
  </section>  


</>
);
}

export default App;
