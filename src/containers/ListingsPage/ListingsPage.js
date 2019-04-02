import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../store/selectors';
import * as actions from '../../store/actions/listings';

import './ListingsPage.css'
import Listing from '../../components/Listing/Listing';

class ListingsPage extends Component {

    componentDidMount() {
        this.props.fetchListings();
    }

    render() {
        let listings = this.props.listings.map((listing) => {
            return <Listing key={listing.id} {...listing} /> 
        });

        return (
            <div className="listings-page">
                {listings}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        listings: selectors.getListings(state)
    };    
};

const mapDispatchToProps = dispatch => {
    return {
        fetchListings: () => dispatch(actions.fetchListings())
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(ListingsPage);