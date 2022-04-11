import { useRef, useState } from "react";
import "./Input.css" ;

const Input = ({value , title , placeholder , onClick , onChange , el}) => {

    const error = useRef() ;
    const success = useRef() ;
    
    return (
        <>
            <h1 className="add-title">{title}</h1>
            <div className="add-data">
                <div className="add-input">
                    <input 
                        type="text" 
                        placeholder={placeholder} 
                        value={value}  
                        onChange={(e)=>onChange(e)}
                    />
                    <button onClick={()=>onClick(error , success)}>+</button>
                </div>
                <span className="error" ref={error}>
                    <span></span>
                    <div className="prog" ></div>
                </span>
                <span data-el={el} className="success" ref={success}>
                    <span></span>
                    <div className="prog"></div>
                </span>
            </div>
        </>
    );

}
 
export default Input;