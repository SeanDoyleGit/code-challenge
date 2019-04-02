import * as actionTypes from '../actions/actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {

    if(action.type === actionTypes.FETCH_LISTINGS) {
        let newState = action.listings;

        return newState;
    }

    return state;
}

export default reducer;