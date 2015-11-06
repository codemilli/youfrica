import React from 'react';

export default class RoomListView extends React.Component {
    handleEnterRoom = (e) => {
        const id = Number(e.target.dataset.id);
        this.props.enterRoom(id);
    }

    componentDidMount() {
        this.props.getList();
    }

    render() {
        return (
            <div id="room-list">
                {

                    }
            </div>
        );
    }
}