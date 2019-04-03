
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Link from './Link';

configure({ adapter: new Adapter() });

describe('<Link />', () => {
    let underTest, props;

    beforeEach(() => {

        props = {
            classes: 'test-class',
            href: 'test-href'
        };
    });

    it('should render the link component with the custom classes in props', () => {
        underTest = shallow(<Link {...props} />);

        expect(underTest.hasClass('test-class')).toBeTruthy();
    });

    it('should render the link component with the href from props', () => {
        underTest = shallow(<Link {...props} />);

        expect(underTest.find('.menu__link').prop('href')).toEqual(props.href);
    });
});