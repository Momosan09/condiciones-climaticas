const Vientos = props =>{

    const { Viento,
            setViento,
        } = props;
    
    
        const handleChange = e => {
            console.log("Viento = " + e.target.value);
            e.preventDefault();}
return(
<>
{/* <label>Vientos
    <input type="number"
    min="0"
    max="100"
    minLength="1"
    maxLength="3"
    onChange={e => setViento(e.target.value)} value={Viento}
    />
</label> */}

            <label>Vientos
        <select onChange={handleChange}>
            <option disabled selected>Direccion del Viento</option>
            <option value = "N"> N(Norte)</option>
            <option value = "S"> S(Sur)</option>
            <option value = "E"> E(Este)</option>
            <option value = "O"> O(Oeste)</option>
        </select>
            </label>


</>
);
}
export default Vientos;
