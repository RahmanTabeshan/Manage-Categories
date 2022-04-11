
import "./AddCategory.css" ;
import Input from "../Input/Input";

const AddCategory = ({catValue , onClick , onChange }) => {

    return (
        <section className="new-category-section">
            <Input 
                title="افزودن دسته جدید : "  
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