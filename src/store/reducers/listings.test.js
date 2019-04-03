import * as actionTypes from '../actions/actionTypes';
import listingsReducer from './listings';

describe('Listings reducer', () => {
    let defaultState;

    beforeEach(() => {
        defaultState = [];
    });

    it('should return the default state when state is undefined', () => {
        const result = listingsReducer(undefined, { type: 'not an action' });
        expect(result).toEqual(defaultState);
    });

    it('should return the current state when the action type does not match', () => {
        const result = listingsReducer(defaultState, { type: 'not an action' });
        expect(result).toEqual(defaultState);
    });

    it('should return the updated listings when action type is FETCH_LISTINGS', () => {
        const result = listingsReducer(defaultState, { type: actionTypes.FETCH_LISTINGS, listings: [ {id: 1, title: 'test'} ] });
        expect(result).toEqual([ {id: 1, title: 'test'} ]);
    });
});