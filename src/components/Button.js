import { useState } from "react";

const myfonc = () =>{
    alert("AVE MARIA, DOMINE MESERE NOSTRI, SANCTUS DOMINUS")
}


const Button = () =>{
    let [count, setCount] = useState(0);
    return(
        <button onClick={ ()=>{setCount(count+1)} }>Click me !({count})</button>
        )
}

export default Button