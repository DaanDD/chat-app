import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatInput from './ChatInput';

class ChatRoom extends Component {
  render() {
    const { send } = this.props;

    return (
      <div>
        <ChatInput send={send} />
      </div>
    );
  }
}

ChatRoom.propTypes = {
  send: PropTypes.func.isRequired,
};

export default ChatRoom;
