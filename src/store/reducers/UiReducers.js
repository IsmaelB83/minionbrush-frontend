// Imports
import * as TYPES from '../types/UiTypes';
import { initialState } from '../InitialState';

/**
 * Reducer para gestionar las acciones sobre la interface de usuario
 * @param {Array} state Anuncios
 * @param {Object} action Action
 */
export function ui (state = initialState.ui, action) {
    switch (action.type) {
        case TYPES.COLLAPSE_DRAWER:
            return {...state, drawerCollapsed: !state.drawerCollapsed};
        default:
            return state;
    }
}