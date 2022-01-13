/* import { ReactComponent as Logo } from './moon-crescent.svg'; */
const DiaNoche = props => {




    const handleChange = e => {
        console.log("Tiempo = " + e.target.value);

};

    return(
        <div className="DiaNocheRadios">
            <h1>Tiempo</h1>
        <select onChange={handleChange} name="DiaYNoche">
            <option disabled selected>--.--</option>
            <optgroup label="Dia">
                <option value="Dia">Dia</option>
            </optgroup>
            <optgroup label="Noche">
        <option disabled>Fases luna</option>
            <option value = "Llena"> Llena</option>
            <option value = "Nueva"> Nueva</option>
            <option value = "Cuarto Mengunate"> Cuarto Mengunate</option>
            <option value = "Cuarto Creciente"> Cuarto Creciente</option>
            </optgroup>
        </select>
{/*         </label> */}

    </div>

);
}

export default DiaNoche;