import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';
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
        const { items, addToCartAction } = this.props;
        return items.map((item) => (
            <li 
                key={item.id}
                className='items-list-item'
                onClick={() => addToCartAction(item)}
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

const mapDispatchToProps = (dispatch) => ({
    addToCartAction: (item) => dispatch(addToCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);