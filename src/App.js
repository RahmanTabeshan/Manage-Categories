
import AddCategory from "./Components/AddCategory/AddCategory";
import AddProduct from "./Components/AddProducts/AddProduct";
import "./App.css" ;
import { useEffect,useRef,useState } from "react";
import ModalButton from "./Components/Modal/ModalButton/ModalButton";
import Modal from "./Components/Modal/Modal";


const App = () => {

    const [categories , setCategories] = useState([]) ;
    
    const modalButton = useRef() ;
    const modalRef = useRef() ;
    const overly = useRef() ;

    useEffect(()=>{
        const categories = localStorage.getItem("categories") ? JSON.parse(localStorage.getItem("categories")) : [] ; 
        setCategories(categories) ;

        const modalBtn = modalButton.current ;
        const modal = modalRef.current ;
        modalBtn.addEventListener("click" , ()=>{
            if(modal.classList.contains("hide")){
                modal.style.display = "flex" ;
                setTimeout(() => {
                    modal.classList.remove("hide") ;
                    modal.style.top = "0" ;
                    overly.current.style.opacity=".3" ;
                    overly.current.style.visibility="visible" ;
                    modalBtn.firstElementChild.className = "fa-solid fa-xmark"
                });
            }else{
                modal.style.top ="-100%" ;
                modal.classList.add("hide") ;
                overly.current.style.opacity="0" ;
                overly.current.style.visibility="collapse" ;
                modalBtn.firstElementChild.className = "fa-solid fa-bars"
                setTimeout(() => {
                    modal.style.display = "none" ;
                } , 300 );
            }
        })

        overly.current.addEventListener( "click" , ()=>{
            modal.style.top ="-100%" ;
            modal.classList.add("hide") ;
            overly.current.style.opacity="0" ;
            overly.current.style.visibility="collapse" ;
            modalBtn.firstElementChild.className = "fa-solid fa-bars"
            setTimeout(() => {
                modal.style.display = "none" ;
            } , 300 );
        })

    },[])

    const [catVal , setCatVal] = useState('') ;

    const [form , setForm] = useState({
        input: "" ,
        select : 0 ,
    }) ;

    const inputHandler = (e)=>{
        setCatVal(e.target.value) ;
    }
    
    const inputChangeHandler = (e)=>{
        setForm({...form , input:e.target.value}) ;
    }
    const selectChangeHandler = (e)=>{
        setForm({...form, select:e.target.value})
    }

    const Error= (er , message) =>{

        er.style.display = "block" ;
        er.children[0].innerText = message ;
        er.children[1].style.background = "red" ; 

        setTimeout(() => {
            er.children[0].innerText = "" ;
            er.style.display = "none" ;
        },2000);

    }

    const Success = (element , message)=>{
        
        element.style.display = "block" ;
        element.children[0].textContent = message ;
        element.children[1].style.background = "green";

        setTimeout(() => {
            element.children[0].textContent = "" ;
            element.style.display = "none" ;
            if(element.dataset.el === "category"){
                setCatVal('');
            }else if(element.dataset.el === "product"){
                setForm({
                    input : "" ,
                    select : 0 ,
                })
            }
        },2000);

    }

    const catHandler = (e , errorRef , successRef )=>{

        e.preventDefault() ;

        const catSuccess = successRef.current ;
        const error = errorRef.current ;

        if(catVal){
            const index = categories.findIndex( item => item.name === catVal );
            
            if(index === -1 ){
                const category = {id: (categories.length + 1) , name:catVal , sub:[]}
                const updatedCategories = [...categories] ;
                updatedCategories.push(category) ;

                setCategories(updatedCategories) ;

                localStorage.setItem("categories" , JSON.stringify(updatedCategories) ) ; 

                Success(catSuccess , "دسته جدید با موفقیت اضافه شد.") ;

            }else{

                const message = "این دسته از قبل وجود دارد." ;
                Error(error , message ) ;
            }
        }else{

            const message = "لطفا نام دسته جدید را وارد کنید";
            Error(error , message) ;

        }
    }

    const productHandler = (e , errorRef , successRef)=>{

        e.preventDefault() ;

        const error = errorRef.current ;
        const productSuccess = successRef.current ;

        if(form.input && form.select && form.select !== "0"){

            const index = categories.findIndex(item => item.id === parseInt(form.select)) ;
            const category = {...categories[index]} ;

            const subValue = category.sub.find(p => p === form.input) ;

            if(!subValue){

                const updatedCategories = [...categories] ;
                category.sub.push(form.input) ;
                updatedCategories[index] = category ;
                
                setCategories(updatedCategories) ;

                localStorage.setItem("categories" , JSON.stringify(updatedCategories)) ;
                Success(productSuccess , "محصول با موفقیت به دسته مورد نظر اضافه شد") ;

            }else{
                Error(error , "این محصول از قبل در دسته مورد نظر وجود دارد.") ;
            }
        }else{
            
            if(!form.input){
                Error(error , "لطفا نام محصول را وارد کنید") ;
            }else{
                if(!form.select){
                    Error(error,"لطفا دسته محصول را انتخاب کنید") ;
                }else{
                    if(form.select === "0"){
                        Error(error,"لطفا دسته محصول را انتخاب کنید.") ;
                    }
                }
            }
        }
    }

    return (
        <>
            <AddCategory 
                catValue={catVal}
                onClick={catHandler}
                onChange={inputHandler}
            />
            <AddProduct 
                categories={categories} 
                form={form} 
                onClick={productHandler} 
                onChangeInput={inputChangeHandler} 
                onChangeSelect={selectChangeHandler} 
            />
            <ModalButton
            Ref={modalButton}
            />
            <Modal
                Ref={modalRef}
                categories={categories}
            />
            <div className="overly" ref={overly} ></div>
        </>
    );

}
 
export default App;