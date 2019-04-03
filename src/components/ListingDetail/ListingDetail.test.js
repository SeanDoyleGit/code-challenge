
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListingDetail from './ListingDetail';
import Tag from '../Listing/Tag';
import testData from '../../test-data';

configure({ adapter: new Adapter() });

describe('<ListingDetail />', () => {
    let underTest, props;

    beforeEach(() => {

        props = {
            ...testData[0]
        };
    });

    it('should render the Tag component with the tag from props', () => {
        underTest = mount(<ListingDetail {...props} />);

        expect(underTest.find(Tag)).toHaveLength(1);
        expect(underTest.find(Tag).props().children).toEqual(props.tag);
    });

    it('should render the image thumbnail', () => {
        underTest = mount(<ListingDetail {...props} />);

        expect(underTest.find(".listing-detail__thumbnail").props().src).toEqual(props.thumb);
    });

    it('should render the image', () => {
        underTest = mount(<ListingDetail {...props} />);

        expect(underTest.find(".listing-detail__image").props().src).toEqual(props.image);
    });

    it('should render the title', () => {
        underTest = mount(<ListingDetail {...props} />);

        expect(underTest.find(".listing-detail__title").text()).toEqual(props.title);
    });

    it('should render the questions', () => {
        underTest = mount(<ListingDetail {...props} />);

        expect(underTest.find(".listing-detail__question")).toHaveLength(props.questions.length);
    });

    it('should render the questions with a transition delay based on index', () => {
        underTest = mount(<ListingDetail {...props} />);

        expect(underTest.find(".listing-detail__question").get(0).props.style).toHaveProperty('transitionDelay', '0.2s');
        expect(underTest.find(".listing-detail__question").get(1).props.style).toHaveProperty('transitionDelay', '0.30000000000000004s');
        expect(underTest.find(".listing-detail__question").get(2).props.style).toHaveProperty('transitionDelay', '0.4s');
        expect(underTest.find(".listing-detail__question").get(3).props.style).toHaveProperty('transitionDelay', '0.5s');
        expect(underTest.find(".listing-detail__question").get(4).props.style).toHaveProperty('transitionDelay', '0.6000000000000001s');
    });

    it('should render eah question with the question title and number', () => {
        underTest = mount(<ListingDetail {...props} />);

        expect(underTest.find(".listing-detail__question__number")).toHaveLength(5);
        expect(underTest.find(".listing-detail__question__number").get(0).props.children).toEqual(['Question ', 1]);
        expect(underTest.find(".listing-detail__question__number").get(1).props.children).toEqual(['Question ', 2]);
        expect(underTest.find(".listing-detail__question__number").get(2).props.children).toEqual(['Question ', 3]);
        expect(underTest.find(".listing-detail__question__number").get(3).props.children).toEqual(['Question ', 4]);
        expect(underTest.find(".listing-detail__question__number").get(4).props.children).toEqual(['Question ', 5]);
    });

    it('should render eah question with the question text', () => {
        underTest = mount(<ListingDetail {...props} />);

        expect(underTest.find(".listing-detail__question__text")).toHaveLength(5);
        expect(underTest.find(".listing-detail__question__text").get(0).props.children).toEqual(props.questions[0]);
        expect(underTest.find(".listing-detail__question__text").get(1).props.children).toEqual(props.questions[1]);
        expect(underTest.find(".listing-detail__question__text").get(2).props.children).toEqual(props.questions[2]);
        expect(underTest.find(".listing-detail__question__text").get(3).props.children).toEqual(props.questions[3]);
        expect(underTest.find(".listing-detail__question__text").get(4).props.children).toEqual(props.questions[4]);
    });
});