import { ColoredMessage } from './components/ColoredMessage';

export const App = () => {
  const onClickButton = () => {
    alert('アラート');
  };

  return (
    <>
      <div>こんにちは</div>
      <p>Welcome to us</p>
      <button onClick={onClickButton}>ボタン</button>
      <ColoredMessage color="skyblue">This is a message.</ColoredMessage>
    </>
  );
};
