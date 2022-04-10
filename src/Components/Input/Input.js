import { useRef, useState } from "react";
import "./Input.css" ;

const Input = ({title , placeholder , onClick , refrence}) => {
    const [val , setVal] = useState('') ;
    const error = useRef() ;
    const success = useRef() ;

    const changeHandler = (e)=>{
        setVal(e.target.value) ;
    }

    return (
        <>
            <h1 className="add-title">{title}</h1>
            <div className="add-data">
                <div className="add-input">
                    <input type="text" placeholder={placeholder} value={val}  onChange={(e)=>changeHandler(e)} />
                    <button onClick={()=>onClick(val , error , success)}>+</button>
                </div>
                <span className="error" ref={error}></span>
                <span className="success" ref={success}></span>
            </div>
        </>
    );
}
 
export default Input;