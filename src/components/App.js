import React, { Component } from 'react';

import Items from '../containers/items';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className='app-main'>
                <Items />
            </div>
        )
    }
}