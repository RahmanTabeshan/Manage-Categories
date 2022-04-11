
import Input from "../Input/Input";
import "./AddProduct.css" ;

const AddProduct = ({form , categories , onClick , onChangeInput , onChangeSelect }) => {
    
    return (
        <section className="add-product-section">
            <Input 
                title="افزودن محصول جدید : "
                placeholder="نام محصول را وارد کنید..."
                onClick={onClick}
                onChange={onChangeInput}
                value={form.input}
                el="product"
            />
            <div className="category-data">
                <select className="category-select" value={form.select} onChange={(e)=>onChangeSelect(e)}>
                    <option value={0} > انتخاب دسته </option>
                    {categories.map(item =>{
                        return(
                            <option key={item.id} value={item.id}>{item.name}</option>
                        )
                    })}
                </select>
            </div>
        </section>
    );
}
 
export default AddProduct;