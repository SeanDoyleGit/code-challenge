import React from 'react';
import { Transition } from 'react-transition-group';

import './Listing.css';
import MenuItem from '../Menu/MenuItem';
import Tag from './Tag';

const listing = ({ transitionDelay, id, title_long, tag, thumb }) => (
    <Transition in appear timeout={transitionDelay}>
        {state => (      
            <div className={`listing listing-${state}`}>   
                <div className="listing__image-wrapper">
                    <Tag>{tag}</Tag>
                    <img className="listing__thumbnail" alt={thumb} src={require(`../../assets/${thumb}`)}/>
                </div>
                <h2 className="listing__title">{title_long}</h2>
                <MenuItem classes="listing__link" link={`/ListingDetail/${id}`} exact>VIEW CASE STUDY</MenuItem>
            </div>
        )}
    </Transition>
);

export default listing;