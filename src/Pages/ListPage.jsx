import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchHeroesList } from 'Character/actions';
import List from 'List/List';
import CharacterCard from 'Character/Card';

class ListPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch, list } = this.props;
        // Avoid requesting again if we have already the list
        if (!list.length) {
            dispatch(fetchHeroesList());
        }
    }

    render() {
        const { list, isFetching } = this.props;
        
        if (!isFetching) {
            return <List mod='list--character'>
                {list.map(item => <CharacterCard key={item.id} {...item} />)}
            </List>
        }
        return <div>...loading</div>
    }
}

ListPage.propTypes = {
    list: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    list: state.list,
    isFetching: state.isFetching,
});

export default connect(mapStateToProps)(ListPage);