import React, { Component } from 'react';
import { connect } from 'react-redux';

import './items.css';

class Items extends Component {
    render() {
        return (
            <ul className='items-list'>
                {this.renderList()}
            </ul>
        )
    }

    renderList = () => {
        const { items } = this.props;
        return items.map((item) => (
            <li 
                key={item.id}
                className='items-list-item'
                onClick={() => console.log('added to store')}
            >
                <img alt='itemimg' src={item.link} />
                <span>{item.title}</span>
            </li>
        ));
    }
}

const mapStateToProps = (reduxState) => ({
    items: reduxState.items
});

export default connect(mapStateToProps)(Items);