import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject(stores => ({uiStore:stores.uiStore})) @observer
export default class Home extends Component {
    render (props) {
        return (
            <div key='home'>home</div>
        )
    }
}