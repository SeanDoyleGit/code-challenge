
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem';
configure({ adapter: new Adapter() });

describe('<Header />', () => {
    let underTest, props;

    beforeEach(() => {

        props = {};
    
    });

    it('should render the Logo component', () => {
        underTest = shallow(<Header {...props} />);

        expect(underTest.find(Logo)).toHaveLength(1);
    });

    it('should render the Menu component', () => {
        underTest = shallow(<Header {...props} />);

        expect(underTest.find(Menu)).toHaveLength(1);
    });

    it('should render the MenuItem components', () => {
        underTest = shallow(<Header {...props} />);

        expect(underTest.find(MenuItem)).toHaveLength(6);
    }); 
});