
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Listing from './Listing';
import Tag from './Tag';
import MenuItem from '../Menu/MenuItem';
import testData from '../../test-data';

configure({ adapter: new Adapter() });

describe('<Listing />', () => {
    let underTest, props;

    beforeEach(() => {

        props = {
            ...testData[0],
            transitionDelay: 0
        };
    });

    it('should render the Tag component with the tag from props', () => {
        underTest = mount(<BrowserRouter><Listing {...props} /></BrowserRouter>);

        expect(underTest.find(Tag)).toHaveLength(1);
        expect(underTest.find(Tag).props().children).toEqual(props.tag);
    });

    it('should render the image thumbnail', () => {
        underTest = mount(<BrowserRouter><Listing {...props} /></BrowserRouter>);

        expect(underTest.find(".listing__thumbnail").props().src).toEqual(props.thumb);
    });

    it('should render the title', () => {
        underTest = mount(<BrowserRouter><Listing {...props} /></BrowserRouter>);

        expect(underTest.find(".listing__title").text()).toEqual(props.title_long);
    });

    it('should render a MenuItem component', () => {
        underTest = mount(<BrowserRouter><Listing {...props} /></BrowserRouter>);

        expect(underTest.find(MenuItem)).toHaveLength(1);
        expect(underTest.find(MenuItem).props().link).toEqual(`ListingDetail/${props.id}`);
    }); 
});