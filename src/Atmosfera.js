const Atmosfera = props =>{

const { Texto, setTexto } = props;


console.log(Texto);


if(Texto === "2"){

}
    return(
        <>
{/* <button onClick={Aleatorio}>a</button> */}

<input type="number"
        min="0"
        max="100"
        minLength="1"
        maxLength="3"
        onChange={e => setTexto(e.target.value)} value={Texto}
        />

    <div>
        <h5>{}</h5>
    </div>
</>
    );
    
}
export default Atmosfera;