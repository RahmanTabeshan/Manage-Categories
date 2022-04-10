import Input from "../Input/Input";
import "./AddProduct.css" ;

const AddProduct = () => {
    return (
        <section className="add-product-section">
            <Input title="افزودن محصول جدید : " placeholder="نام محصول را وارد کنید..." />
            <div className="category-data">
                <select className="category-select">
                    <option value="">cat 1</option>
                    <option value="">cat 2</option>
                    <option value="">cat 3</option>
                    <option value="">cat 4</option>
                </select>
            </div>
        </section>
    );
}
 
export default AddProduct;