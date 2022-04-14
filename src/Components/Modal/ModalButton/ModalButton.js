import "./ModalButton.css"


const ModalButton = (props) => {
    return (
        <div ref={props.Ref} className="modal-button" title="مشاهده دسته بندی ها" >
            <i className="fa-solid fa-bars" ></i>
        </div>
    );
}
 
export default ModalButton;