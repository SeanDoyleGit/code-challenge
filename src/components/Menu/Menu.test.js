
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from './Menu';
import MenuItem from './MenuItem';

configure({ adapter: new Adapter() });

describe('<Menu />', () => {
    let underTest, props;

    beforeEach(() => {

        props = {
            classes: 'test-class'
        };
    });

    it('should render the Menu component with the custom classes in props', () => {
        underTest = shallow(<Menu {...props} />);

        expect(underTest.hasClass('test-class')).toBeTruthy();
    });

    it('should render children', () => {
        underTest = shallow(<Menu {...props} ><MenuItem></MenuItem></Menu>);

        expect(underTest.find(MenuItem)).toHaveLength(1);
    });
});