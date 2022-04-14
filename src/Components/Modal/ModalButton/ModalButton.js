import "./ModalButton.css"
import { FaBars } from "react-icons/fa";


const ModalButton = (props) => {
    return (
        <div ref={props.Ref} className="modal-button" title="مشاهده دسته بندی ها" >
            <i className="fa-solid fa-bars" ></i>
        </div>
    );
}
 
export default ModalButton;