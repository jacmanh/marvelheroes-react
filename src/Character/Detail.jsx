/**
 * We don't need to use redux here
 * Datas need to be local only and 
 * if we call this page directly (with server rendering), only this fetch will be launch
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

import { apiUrl, apiPublicKey, apiPrivateKey, apiRoutes } from 'App/config';
import { Link } from 'react-router-dom';

require('./character.scss');

class CharacterDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isFetching: false,
        };
    }

    componentDidMount() {
        const { id } = this.props;
        this.getHeroDetail(id).then(detail => {
            const { results } = detail;
            if (results && results[0]) {
                this.setState({
                    isFetching: false,
                    ...results[0]
                });
            }
        })
    }

    getHeroDetail(id) {
        const timeStamp = Date.now();
        const hash = md5(timeStamp + apiPrivateKey + apiPublicKey);
    
        const parameters = new URLSearchParams({
            apikey: apiPublicKey,
            ts: timeStamp,
            hash: hash,
        });
        const url = apiUrl + apiRoutes.charactersList + '/' + id + '?' + parameters.toString();
    
        return fetch(url)
            .then(response => response.json())
            .then(json => json.data)
            .catch(error => error);
    }

    render() {
        const { name, thumbnail, comics, series } = this.state;

        if (name) {
            return (
                <div className="character">
                    <h1>Fiche identité : </h1>
                    <div className="character__page">
                    
                        <div className="character__image">
                            <img src={thumbnail.path + '.' + thumbnail.extension} alt={name} className="img img--responsive" />
                        </div>

                        <div className="character__content">
                            <h2>{name}</h2>
                            {comics.available > 0 && (
                                <div>
                                    <h3>Comics</h3>
                                    <ul className="list">
                                    {comics.items.map(item => (
                                        <li key={item.name} className="list__item">
                                            <a href={item.resourceURI} target="_blank" className="link">{item.name}</a>
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                                )
                            }
                            {series.available > 0 && (
                                <div>
                                    <h3>Series</h3>
                                    <ul className="list">
                                    {series.items.map(item => (
                                        <li key={item.name} className="list__item">
                                            <a href={item.resourceURI} target="_blank" className="link">{item.name}</a>
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                                )
                            }
                        </div>

                    </div>
                </div>
            )
        }
        return <div>...loading</div>
    }
}

CharacterDetail.propTypes = {
    id: PropTypes.number.isRequired,
}

export default CharacterDetail;