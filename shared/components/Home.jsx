import React from 'react';
import RoomListView from 'components/RoomListView';
import {bindActionCreators} from 'redux';
import * as RoomListActions from 'actions/RoomListAction';
import {connect} from 'react-redux';

@connect(state => ({list: state.data}))

export default class Home extends React.Component {
    render() {
        const {list, dispatch} = this.props;

        return (
            <div id="room-list">
                <RoomListView list={list}
                    {...bindActionCreators(RoomListActions, dispatch)} />
            </div>
        );
    }
};