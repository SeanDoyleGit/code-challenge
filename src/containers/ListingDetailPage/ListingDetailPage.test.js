
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ListingDetailPage } from './ListingDetailPage';
import testData from '../../test-data';

configure({ adapter: new Adapter() });

import ListingDetail from '../../components/ListingDetail/ListingDetail';

describe('<ListingDetailPage />', () => {
    let underTest, props;

    beforeEach(() => {

        props = {
            listing: testData[0],
            fetchListings: jest.fn(),
            match: { params: { id: '0'}}
        };
    });

    it('should dispatch fetchListings on componentDidMount', () => {
        underTest = shallow(<ListingDetailPage {...props} />);

        expect(props.fetchListings.mock.calls.length).toEqual(1);
    });

    it('should render an error if listing is undefined', () => {
        props.listing = undefined;
        underTest = shallow(<ListingDetailPage {...props} />);

        expect(underTest.find(".error")).toHaveLength(1);
    });

    it('should render an ListingDetail if listing is defined', () => {
        underTest = shallow(<ListingDetailPage {...props} />);

        expect(underTest.find(ListingDetail)).toHaveLength(1);
    });

    it('should pass the listing props to the listingDetail component', () => {
        underTest = shallow(<ListingDetailPage {...props} />);

        expect(underTest.find(ListingDetail).props()).toEqual(props.listing);
    });
});