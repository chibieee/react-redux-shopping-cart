import React, { Component } from 'react';

import Items from '../containers/items';
import ShoppingCart from '../containers/shoppingCart';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className='app-main'>
                <Items />
                <ShoppingCart />
            </div>
        )
    }
}