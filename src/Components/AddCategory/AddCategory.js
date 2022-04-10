import { useEffect, useRef, useState } from "react";
import styles from "./AddCategory.module.css" ;
import "./AddCategory.css" ;
import Input from "../Input/Input";

const AddCategory = () => {

    const [categories , setCategories] = useState([]) ;
    
    useEffect(()=>{
        const categories = localStorage.getItem("categories") ? JSON.parse(localStorage.getItem("categories")) : [] ; 
        setCategories(categories) ;
    },[])
    
    const catHandler = (val , errorRef , successRef )=>{

        if(val){
            const index = categories.findIndex( item => item.name === val );
            const success = successRef.current ;
            
            if(index === -1 ){
                const category = {name:val , sub:[]}
                const updatedCategories = [...categories] ;
                updatedCategories.push(category) ;

                setCategories(updatedCategories) ;

                localStorage.setItem("categories" , JSON.stringify(updatedCategories) ) ; 

                success.textContent = "دسته جدید با موفقیت اضافه شد" ;
                success.style.display = "block" ;

                setTimeout(() => {
                    success.textContent = "" ;
                    success.style.display = "none" ;
                },2000);

            }else{
                const error = errorRef.current ;

                error.textContent = "این دسته از قبل وجود دارد" ;
                error.style.display = "block" ;

                setTimeout(() => {
                    error.textContent = "" ;
                    error.style.display = "none" ;
                },2000);
            }
        }else{

            const error = errorRef.current ;

            error.textContent = "لطفا نام دسته جدید را وارد کنید" ;
            error.style.display = "block" ;

            setTimeout(() => {
                error.textContent = "" ;
                error.style.display = "none" ;
            },2000);

        }
    }

    return (
        <section className="new-category-section">
            <Input 
                title="افزودن دسته جدید : "  
                placeholder="دسته جدید را وارد کنید..."
                onClick={catHandler} 
            />
        </section>
    );
}
 
export default AddCategory;