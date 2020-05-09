// HOCs
import { connect } from 'react-redux';
import { withSnackbar } from "notistack";
// Components
import NavBar from "./NavBar";
// Action Creators
import { UiActions } from '../../store/GlobalActions';

/**
 * Inyecta props en mi componente para acceder al state del store
 * @param {Object} state Estado de mi store
 */
const mapStateToProps = (state) => {
    return {
        drawerCollapsed: state.ui.drawerCollapsed,
    }
}

/**
 * Inyecta props en mi componente para acceder a los reducers del store
 * @param {Function} dispatch Dispatch del store
 */
const mapDispatchToProps = (dispatch) => {
    return {
        collapseDrawer: () => dispatch(UiActions.collapseDrawer()),
    }
}

// Retorno el componente envuelto
export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(NavBar));