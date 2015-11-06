import React from 'react';

export default class AppView extends React.Component {
    render() {
        return (
            <div id="app-view">
                <h1> Youfrica TV </h1>
                <hr/>
                {this.props.children}
            </div>
        );
    }
};