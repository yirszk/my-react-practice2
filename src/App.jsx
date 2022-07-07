import { useState } from 'react';
import { ColoredMessage } from './components/ColoredMessage';

export const App = () => {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  return (
    <>
      <div>こんにちは</div>
      <p>Welcome to us</p>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <ColoredMessage color='skyblue'>This is a message.</ColoredMessage>
    </>
  );
};
