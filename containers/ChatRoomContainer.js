import React, { Component } from 'react';
import ChatRoom from '../components/ChatRoom';


class ChatRoomContainer extends Component {
  constructor(props) {
    super(props);
    this.send = this.send.bind(this);
  }

  componentDidMount() {
    this.webSocket = new WebSocket('ws://localhost:3001');
  }

  send(message) {
    this.webSocket.send(message);
  }

  render() {
    const { messages } = this.props;

    return (
      <ChatRoom
        messages={messages}
        send={this.send}
      />
    );
  }
}

export default ChatRoomContainer;
