import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

require('./card.scss');

const CharacterCard = ({id, name, thumbnail}) => (
    <div className="character-card">
        <Link to={`/character/${id}`} className="character-card__link">
            <div className="character-card__image">
                <img src={thumbnail.path + '.' + thumbnail.extension} alt={name} className="img img--responsive" />
            </div>
            <div className="character-card__name">
                {name}
            </div>
        </Link>
    </div>
);

CharacterCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
        path: PropTypes.string.isRequired,
        extension: PropTypes.string.isRequired,
    }).isRequired,
}

export default CharacterCard;