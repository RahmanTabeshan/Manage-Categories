import {createRoot} from "react-dom/client" ;
import App from "./App";

const container = document.querySelector("div.container") ;
const ReactDoM = createRoot(container) ;

ReactDoM.render(<App />);