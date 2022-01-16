

const Terreno = props =>{
    
    const { visible, setVisible} = props;

    const handleChange = e => {
        console.log("Terreno = " + e.target.value);
        e.preventDefault();
        
    };
    let escondido = setVisible;


    return(

<>
    <div className="TerrenoDiv">
    <h1>Terreno</h1>
    <label>Terreno
<select onChange={handleChange} name="" hidden={escondido}>
    <option disabled selected>Terreno</option>
    <optgroup label="Light">
        <option value="Light Arbustos">Arbustos</option>
        <option value="Light Matorrales">Matorrales</option>
        <option value="Light Arboles">Arboles</option>
    </optgroup>
    <optgroup label="Medium">
        <option value="Medium Arbustos">Arbustos</option>
        <option value="Medium Matorrales">Matorrales</option>
        <option value="Medium Arboles">Arboles</option>
    </optgroup>
    <optgroup label="Heavy">
        <option value="Heavy Arbustos">Arbustos</option>
        <option value="Heavy Matorrales">Matorrales</option>
        <option value="Heavy Arboles">Arboles</option>
    </optgroup>
</select>
    </label>

<label>Plano
<input type="checkbox" onClick={setVisible(!escondido)} 
/>
</label>


    </div>
</>






);
};

export default Terreno;