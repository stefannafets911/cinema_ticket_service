import * as constants from '../../constants';

const initialState = {
    isModalOpen: false,
    ActiveComponent: 'AllSessions',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.TOGGLE_MODAL:
            const isModalOpen = !state.isModalOpen;
            return {
                ...state,
                isModalOpen: isModalOpen
            };
        case constants.CHANGE_ACTIVE_COMPONENT:
            return {
                ...state,
                ActiveComponent: `${action.payload}`,
            };
        default:
            return { ...state };
    }
}