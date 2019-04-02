import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../store/selectors';
import * as actions from '../../store/actions/listings';

import './ListingsPage.css'

class ListingsPage extends Component {

    componentDidMount() {
        this.props.fetchListings();
    }

    render() {
        let listings = this.props.listings.map((listing) => {
            return <h1 key={listing.id}>{listing.title}</h1> 
        });

        return (
            <div className="listings-page">
                <h1>ListingsPage</h1>
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