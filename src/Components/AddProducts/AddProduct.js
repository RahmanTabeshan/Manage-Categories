
import Input from "../Input/Input";
import "./AddProduct.css" ;
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AddProduct = ({form , categories , onClick , onChangeInput , onChangeSelect , onKey }) => {

    return (
        <section className="add-product-section">
            <h1 className="add-title">افزودن محصول جدید : </h1>
            <div className="category-data">
                {/* <select className="category-select" value={form.select} onChange={(e)=>onChangeSelect(e)}>
                    {form.select ? null : <option value={0} > انتخاب دسته </option>}
                    {categories.map(item =>{
                        return(
                            <option key={item.id} value={item.id}>{item.name}</option>
                        )
                    })}
                </select> */}
                <FormControl className="form-select" onKeyUp={(e)=>{onKey(e)}} >
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
            <Input 
                placeholder="نام محصول را وارد کنید..."
                onClick={onClick}
                onChange={onChangeInput}
                value={form.input}
                el="product"
            />
        </section>
    );
}
 
export default AddProduct;