
import "./AddCategory.css" ;
import Input from "../Input/Input";

const AddCategory = ({catValue , onClick , onChange }) => {

    return (
        <section className="new-category-section">
            <h1 className="add-title">افزودن دسته جدید : </h1>
            <Input  
                placeholder="دسته جدید را وارد کنید..."
                value={catValue}
                onClick={onClick} 
                onChange={onChange} 
                el="category"
            />
        </section>

    );

}
 
export default AddCategory;