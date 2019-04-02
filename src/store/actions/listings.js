import * as actionTypes from './actionTypes';
import axios from '../../axios-listings';

export const fetchListingsSuccess = ( listings ) => {
    return {
        type: actionTypes.FETCH_LISTINGS,
        listings
    };
};

export const fetchListings = () => {
    return dispatch => {
        axios.get('/listings.json').then(result => {
            dispatch(fetchListingsSuccess(result.data));
        });
    };
};