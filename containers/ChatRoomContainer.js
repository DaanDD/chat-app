import ChatRoom from '../components/ChatRoom';

const send = (message) => {
  console.log('send', message);
}

export default ({ messages }) => (
  <ChatRoom
    messages={messages}
    send={send}
  />
);
