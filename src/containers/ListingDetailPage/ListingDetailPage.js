import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/listings';
import * as selectors from '../../store/selectors';

import './ListingDetailPage.css';
import ListingDetail from '../../components/ListingDetail/ListingDetail';

class ListingDetailPage extends Component {

    componentDidMount() {
        this.props.fetchListings();
    }

    render() {
        if(!this.props.listing) {
            return ( 
                <div className="listing-detail">
                    <h3 style={{color: 'red', textAlign: 'center', fontWeight: 400 }}>Sorry listing {this.props.match.params.id} was not found.</h3>
                </div>
            );
        } else {
            return (
                <ListingDetail {...this.props.listing}></ListingDetail>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        listing: selectors.getListingWithId(state, ownProps.match.params.id)
    };    
};

const mapDispatchToProps = dispatch => {
    return {
        fetchListings: () => dispatch(actions.fetchListings())
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(ListingDetailPage);