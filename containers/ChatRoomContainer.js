import ChatRoom from '../components/ChatRoom';

const send = (message) => {
  console.log('send', message);
}

export default () => (
  <ChatRoom send={send} />
);
