import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatInput from './ChatInput';

class ChatRoom extends Component {
  render() {
    const { messages, send } = this.props;

    return (
      <div>
        <ul>
          {messages.map((message) => (
            <li>
              {message.body}
            </li>
          ))}
        </ul>
        <ChatInput send={send} />
      </div>
    );
  }
}

ChatRoom.propTypes = {
  messages: PropTypes.array.isRequired,
  send: PropTypes.func.isRequired,
};

export default ChatRoom;
