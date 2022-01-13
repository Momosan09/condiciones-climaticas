import { useState, useEffect } from 'react';
import Atmosfera from "./Atmosfera";
import DiaNoche from "./DiaNoche";

function App() {

const [ Texto, setTexto] = useState("");

let nubosidad;

if(Texto >= 0 && Texto <= 10){
  nubosidad="None 0-1.0 cm";
}
if(Texto >= 11 && Texto <= 20){
  nubosidad="Scant clouds 1.1 - 2.0 cm";
}
if(Texto >= 21 && Texto <= 30){
  nubosidad="Scattered clouds 2.1 - 3.0 cm";
}
if(Texto >= 31 && Texto <= 40){
  nubosidad="Slightly overcast 3.1 - 4.0 cm";
}
if(Texto >= 41 && Texto <= 50){
  nubosidad="Moderately overcast 4.1 - 5.0 cm";
}
if(Texto >= 51 && Texto <= 65){
  nubosidad="Mostly overcast 5.1 - 6.5 cm";
}
if(Texto >= 66 && Texto <= 80){
  nubosidad="Completely overcast 6.6 - 8.0 cm";
}
if(Texto >= 81 && Texto <= 100){
  nubosidad="Dense clouds, little light 8.1 - 10 cm";
}
if(Texto > 100 || Texto < 0){
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
    Texto={Texto}
    setTexto={setTexto}
    />

    <h2>{nubosidad}</h2>
    </div>
  </section>  


    </>
  );
}

export default App;
