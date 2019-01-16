import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };

    this.changeInputValue = this.changeInputValue.bind(this);
    this.send = this.send.bind(this);
  }

  changeInputValue(event) {
    this.setState({ inputValue: event.target.value });
  }

  send(event) {
    event.preventDefault();
    this.props.send(this.state.inputValue);
  }

  render() {
    return (
      <form onSubmit={this.send}>
        <input
          id="inputValue"
          name="inputValue"
          onChange={this.changeInputValue}
          value={this.state.inputValue}
        />

        <button type="submit">Send</button>
      </form>
    );
  }
}

ChatInput.propTypes = {
  send: PropTypes.func.isRequired,
};

export default ChatInput;
