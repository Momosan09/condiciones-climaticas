/* import { ReactComponent as Logo } from './moon-crescent.svg'; */
const DiaNoche = props => {

    const handleChange = e => {
        console.log("Tiempo = " + e.target.value);
        e.preventDefault();

};

    return(
        <div className="DiaNocheRadios">
            <h1>Tiempo</h1>
            <label>DiaNoche
        <select onChange={handleChange} name="DiaYNoche">
            <option disabled selected>--.--</option>
            <optgroup label="Dia">
                <option value="Dia">Dia</option>
            </optgroup>
            <optgroup label="Noche">
        <option disabled>Fases luna</option>
            <option value = " Luna Llena"> Llena</option>
            <option value = " Luna Nueva"> Nueva</option>
            <option value = " Luna Cuarto Mengunate"> Cuarto Mengunate</option>
            <option value = " Luna Cuarto Creciente"> Cuarto Creciente</option>
            </optgroup>
        </select>
            </label>
{/*         </label> */}

    </div>

);
}

export default DiaNoche;