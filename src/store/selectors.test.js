import * as selectors from './selectors';

describe('selectors', () => {
    let state;
    
    beforeEach(() => {
        
        state = {
            listings: [
                { id: 1001, title: 'test' },
                { id: 1002, title: 'test2' }
            ]
        };
    });

    describe('getListings', () => {
        it('should return the listings array', () => {
            expect(selectors.getListings(state)).toEqual(state.listings);
        });
    });

    describe('getListingWithId', () => {
        it('should return the listing with the matching id', () => {
            expect(selectors.getListingWithId(state, 1001)).toEqual(state.listings[0]);
        });
    });
});