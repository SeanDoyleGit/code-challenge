import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ListingsPage } from './ListingsPage';
import testData from '../../test-data';

configure({ adapter: new Adapter() });

import Listing from '../../components/Listing/Listing';

describe('<ListingsPage />', () => {
    let underTest, props;

    beforeEach(() => {

        props = {
            listings: testData,
            fetchListings: jest.fn()
        };
    });

    it('should dispatch fetchListings on componentDidMount', () => {
        underTest = shallow(<ListingsPage {...props} />);

        expect(props.fetchListings.mock.calls.length).toEqual(1);
    });

    it('should render listing component for each listing in props', () => {
        underTest = shallow(<ListingsPage {...props} />);
        expect(underTest.dive().find(Listing)).toHaveLength(4);
    });

    it('should give a transition delay prop based on the index of the listing', () => {
        underTest = shallow(<ListingsPage {...props} />);
        expect(underTest.dive().find(Listing).get(0).props.transitionDelay).toEqual(1000);
        expect(underTest.dive().find(Listing).get(1).props.transitionDelay).toEqual(1300);
        expect(underTest.dive().find(Listing).get(2).props.transitionDelay).toEqual(1600);
        expect(underTest.dive().find(Listing).get(3).props.transitionDelay).toEqual(1900);
    });
});