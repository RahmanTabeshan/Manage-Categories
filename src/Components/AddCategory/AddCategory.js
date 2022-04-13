
import "./AddCategory.css" ;
import { useRef } from "react";

const AddCategory = ({catValue , onClick , onChange }) => {

    const error = useRef() ;
    const success = useRef() ;

    return (
        <section className="new-category-section">
            <h1 className="add-title">افزودن دسته جدید : </h1>
            <div className="add-data">
                <form onSubmit={(event)=>{onClick(event , error , success)}}>
                    <div className="add-input">
                        <input 
                            type="text"
                            className="add" 
                            placeholder="نام دسته جدید را وارد کنید..." 
                            value={catValue}  
                            onChange={(e)=>onChange(e)}
                        />
                        <input className="submit" type="submit" value="+" />
                    </div>
                    <span className="message error" ref={error}>
                        <span></span>
                        <div className="prog" ></div>
                    </span>
                    <span data-el="category" className="message success" ref={success}>
                        <span></span>
                        <div className="prog"></div>
                    </span>
                </form>
            </div>
        </section>
    );

}
 
export default AddCategory;