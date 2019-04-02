export const getListings = (state) => state.listings;

export const getListingWithId = (state, id) => state.listings.find(listing => listing.id === parseInt(id));
