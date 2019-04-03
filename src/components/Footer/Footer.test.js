
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Link from '../Menu/Link';
configure({ adapter: new Adapter() });

describe('<Header />', () => {
    let underTest, props;

    beforeEach(() => {

        props = {};
    
    });

    it('should render the Logo component', () => {
        underTest = shallow(<Footer {...props} />);

        expect(underTest.find(Logo)).toHaveLength(1);
    });

    it('should render the Menu component', () => {
        underTest = shallow(<Footer {...props} />);

        expect(underTest.find(Menu)).toHaveLength(1);
    });

    it('should render the Link components', () => {
        underTest = shallow(<Footer {...props} />);

        expect(underTest.find(Link)).toHaveLength(6);
    }); 
});