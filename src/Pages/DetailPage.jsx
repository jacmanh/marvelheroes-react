import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharacterDetail from 'Character/Detail';

const DetailPage = ({ match }) => (
    <div className="page">
        <Link to='/' className="link">Retour à la liste</Link>
        <CharacterDetail id={parseInt(match.params.id)} />
    </div>
)

export default DetailPage;