// Components
import Home from "./Home";
// HOCs
import { withSnackbar } from "notistack";

// Retorno el componente envuelto
export default withSnackbar(Home);
