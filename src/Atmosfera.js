const Atmosfera = props =>{

const { atmosfera, 
        setAtmosfera,

    } = props;



/* console.log("Atmosfera = " + atmosfera); */

return(
<>
<label>Atmosfera
{/*     <button onClick={Aleatorio()}></button> */}
<input type="number"
        min="0"
        max="100"
        minLength="1"
        maxLength="3"
        onChange={e => setAtmosfera(e.target.value)} value={atmosfera}
        />

</label>
</>


);

}

export default Atmosfera;