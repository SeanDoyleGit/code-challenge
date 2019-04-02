import React from 'react';

import './ListingDetail.css';
import Tag from '../Listing/Tag';

const listingDetail = ({ tag, title, image, thumb, title_long, id, questions }) => {
    
    let questionsSection = questions.map((question, index) => (
        <div className="listing-detail__question" key={index}>
            <h2 className="listing-detail__question__number">Question {index + 1}</h2>
            <p className="listing-detail__question__text">{question}</p>
        </div>
    ));

    return (
        <div className="listing-detail">
            <div className="listing-detail__image-wrapper">
                <Tag>{tag}</Tag>
                <img className="listing-detail__thumbnail" alt={thumb} src={require(`../../assets/${thumb}`)}/>
                <img className="listing-detail__image" alt={thumb} src={require(`../../assets/${image}`)}/>
            </div>
            <div className="listing-detail__wrapper">
                <h1 className="listing-detail__title">{title}</h1>
                {questionsSection}
            </div>
        </div>
    );
};

export default listingDetail;