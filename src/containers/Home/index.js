// HOCs
import { withSnackbar } from "notistack";
// Components
import Home from "./Home";

// Retorno el componente envuelto
export default withSnackbar(Home);
