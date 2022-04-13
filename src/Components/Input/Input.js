import { useRef, useState } from "react";
import "./Input.css" ;

const Input = ({value , placeholder , onClick , onChange , el}) => {

    const error = useRef() ;
    const success = useRef() ;
    
    return (
        <>
            <div className="add-data">
                <form onSubmit={(event)=>{onClick(event , error , success)}}>
                    <div className="add-input">
                        <input 
                            type="text"
                            className="add" 
                            placeholder={placeholder} 
                            value={value}  
                            onChange={(e)=>onChange(e)}
                        />
                        {/* <button onClick={()=>onClick(error , success)}>+</button> */}
                        <input className="submit" type="submit" value="+" />
                    </div>
                    <span className="error" ref={error}>
                        <span></span>
                        <div className="prog" ></div>
                    </span>
                    <span data-el={el} className="success" ref={success}>
                        <span></span>
                        <div className="prog"></div>
                    </span>
                </form>
            </div>
        </>
    );

}
 
export default Input;