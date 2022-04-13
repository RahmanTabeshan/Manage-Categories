
import "./AddProduct.css" ;
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useRef } from "react";

const AddProduct = ({form , categories , onClick , onChangeInput , onChangeSelect }) => {
    
    const error = useRef() ;
    const success = useRef() ;

    return (
        <section className="add-product-section">
            <h1 className="add-title">افزودن محصول جدید : </h1>
            <div className="add-data">
                <form onSubmit={(event)=>{onClick(event , error , success)}}>
                <div className="category-data">
                        <FormControl className="form-select" >
                            <InputLabel id="select-label">دسته ها</InputLabel>
                            <Select
                                labelId="select-label"
                                className="select"
                                value={form.select}
                                label="دسته ها"
                                onChange={(e)=>onChangeSelect(e)}
                            >
                                {form.select ? null : <MenuItem value={0}>انتخاب دسته</MenuItem>}
                                {categories.map(item=>{
                                    return <MenuItem key={item.id} value={item.id} >{item.name}</MenuItem> ;
                                })}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="add-input">
                        <input 
                            type="text"
                            className="add" 
                            placeholder="نام محصول جدید را وارد کنید..." 
                            value={form.input}  
                            onChange={(e)=>onChangeInput(e)}
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
 
export default AddProduct;