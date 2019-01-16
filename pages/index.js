import React, { Component } from 'react';
import axios from 'axios';
import ChatRoomContainer from '../containers/ChatRoomContainer';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };

    axios.get('/api/messages').then((res) => {
      this.setState({ messages: res.data });
    });
  }

  render() {
    return (
      <div>
        <ChatRoomContainer messages={this.state.messages} />
      </div>
    );
  }
}

export default Index;
