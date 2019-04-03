
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuItem from './MenuItem';
import { NavLink } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('<MenuItem />', () => {
    let underTest, props;

    beforeEach(() => {

        props = {
            classes: 'test-class',
            link: '/test',
            exact: false
        };
    });

    it('should render the MenuItem component with the custom classes in props', () => {
        underTest = shallow(<MenuItem {...props} />);

        expect(underTest.hasClass('test-class')).toBeTruthy();
    });

    it('should render a NavLink', () => {
        underTest = shallow(<MenuItem {...props} />);

        expect(underTest.find(NavLink)).toHaveLength(1);
    });

    it('should render NavLink with link and exact props', () => {
        underTest = shallow(<MenuItem {...props} />);

        expect(underTest.find(NavLink).props().to).toEqual(props.link);
        expect(underTest.find(NavLink).props().exact).toEqual(props.exact);
    });
});