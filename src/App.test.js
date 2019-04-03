import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

describe('<App />', () => {
    let underTest;

    beforeEach(() => {

    });

    it('should render the header component', () => {
        underTest = shallow(<App />);
        expect(underTest.find(Header)).toHaveLength(1);
    });

    it('should render the footer component', () => {
        underTest = shallow(<App />);
        expect(underTest.find(Footer)).toHaveLength(1);
    });

    it('should render the main div', () => {
        underTest = shallow(<App />);
        expect(underTest.find('.main')).toHaveLength(1);
    });

    it('should render a route component in the main div', () => {
        underTest = shallow(<App />);
        expect(underTest.find('.main').find(Route)).toHaveLength(1);
    });

});
