import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';
import * as selectors from '../../store/selectors';
import * as actions from '../../store/actions/listings';

import './ListingsPage.css'
import Listing from '../../components/Listing/Listing';

class ListingsPage extends Component {

    componentDidMount() {
        this.props.fetchListings();
    }

    render() {
        let listings = this.props.listings.map((listing, index) => {
            return <Listing  transitionDelay={1000 + index * 500} key={listing.id} {...listing} /> 
        });

        return (
            <Transition in timeout={1000}>
                {state => (
                    <div className={`listings-page listing-page-${state}`}>
                        {listings}
                    </div>
                )}
            </Transition>
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