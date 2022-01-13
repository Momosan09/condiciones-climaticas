import { useState, useEffect } from 'react';
import Atmosfera from "./Atmosfera";
import Vientos from "./Viento";
import DiaNoche from "./DiaNoche";

function App() {

const [ atmosfera, setAtmosfera] = useState(-1);
const [ Viento, setViento] = useState(-1);


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
if(atmosfera == -1){
  nubosidad="Ingrese Numero"
}
if(atmosfera > 100 || atmosfera < -1){
  nubosidad="Err"
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

    </div>
  </section>  


</>
);
}

export default App;
