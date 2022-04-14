import "./modal.css" ;


const Modal = ({categories , Ref}) => {
    return (
        <div className="modal hide" ref={Ref}>
            <h1 className="modal-title">دسته بندی ها : </h1>
            <div className="modal-body">
                {categories.length ? categories.map(item =>{
                    return(
                        <div className="item" key={item.id}>
                            <h1>{item.id} - {item.name} : </h1>
                            <ul>
                                {item.sub && item.sub.map((p,index)=>{
                                    return(
                                        <li key={item.id * index }>{p}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                }) : <h1>هنوز دسته ای وجود ندارد</h1>}
            </div>
        </div>
    );
}
 
export default Modal;