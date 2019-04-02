import React from 'react';

import './Listing.css';
import MenuItem from '../Menu/MenuItem';
import Tag from './Tag';

const listing = ({ id, title_long, tag, thumb }) => (
    <div className="listing">   
        <div className="listing__image-wrapper">
            <Tag>{tag}</Tag>
            <img className="listing__thumbnail" alt={thumb} src={require(`../../assets/${thumb}`)}/>
        </div>
        <h2 className="listing__title">{title_long}</h2>
        <MenuItem classes="listing__link" link={`ListingDetail/${id}`}>VIEW CASE STUDY</MenuItem>
    </div>
);

export default listing;