import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions';

import './shoppingCart.css';

export class ShoppingCart extends Component {

    renderShoppingCart = () => {
        const { shoppingCart, removeFromCartDispatch } = this.props;
        return shoppingCart.map((item) => {
            return (
                <li
                    key={item.id}
                    className="shoppingcart-list-item"
                    onClick={ () => removeFromCartDispatch(item.id)}
                >
                    <img alt='itemimg' src={item.link} />
                    {item.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className='shoppingcart-list'>
                {this.renderShoppingCart()}
            </ul>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    shoppingCart: reduxState.shoppingCart
})

const mapDispatchToProps = (dispatch) => ({
    removeFromCartDispatch: (id) => dispatch(removeFromCart(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
