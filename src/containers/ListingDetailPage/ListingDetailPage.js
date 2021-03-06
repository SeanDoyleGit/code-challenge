import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/listings';
import * as selectors from '../../store/selectors';

import './ListingDetailPage.css';
import ListingDetail from '../../components/ListingDetail/ListingDetail';

export class ListingDetailPage extends Component {

    componentDidMount() {
        this.props.fetchListings();
    }

    render() {
        let content;
        if(!this.props.listing) {
            content = ( <h3 className="error" style={{color: 'red', textAlign: 'center', fontWeight: 400 }}>Sorry listing {this.props.match.params.id} was not found.</h3> );
        } else {
            content = ( <ListingDetail {...this.props.listing}></ListingDetail> );
        }
         
        return (
            <div className={`listing-detail-page`}>
                {content}
            </div>
        );
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