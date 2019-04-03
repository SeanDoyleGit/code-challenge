
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Logo from './Logo';

configure({ adapter: new Adapter() });

describe('<Logo />', () => {
    let underTest, props;

    beforeEach(() => {

        props = {
            classes: 'test-class',
            src: 'test-src',
            alt: 'test-alt'
        };
    });

    it('should render the Logo component with the custom classes in props', () => {
        underTest = shallow(<Logo {...props} />);

        expect(underTest.hasClass('test-class')).toBeTruthy();
    });

    it('should render an img', () => {
        underTest = shallow(<Logo {...props} />);

        expect(underTest.find('img')).toHaveLength(1);
    });

    it('should render an img with the src and alt props', () => {
        underTest = shallow(<Logo {...props} />);

        expect(underTest.find('img').props().src).toEqual(props.src);
        expect(underTest.find('img').props().alt).toEqual(props.alt);
    });
});