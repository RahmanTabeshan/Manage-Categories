import {createRoot} from "react-dom/client" ;
import App from "./App";
import "./index.css" ;

const container = document.querySelector("div.container") ;
const ReactDoM = createRoot(container) ;

ReactDoM.render(<App />);