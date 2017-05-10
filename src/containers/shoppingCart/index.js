import React, { Component } from 'react';
import { connect } from 'react-redux';

import './shoppingCart.css';

export class ShoppingCart extends Component {

    renderShoppingCart = () => {
        const { shoppingCart } = this.props;
        return shoppingCart.map((item) => {
            return (
                <li
                    key={item.id}
                    className="shoppingcart-list-item"
                    onClick={ () => console.log('remove from cart')}
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

export default connect(mapStateToProps)(ShoppingCart);
