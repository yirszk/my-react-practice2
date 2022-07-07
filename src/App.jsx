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
      <button
        onClick={onClickButton}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-1 px-2 rounded'
      >
        ボタン
      </button>
      <p className='font-bold'>{num}</p>
      <ColoredMessage color='skyblue'>This is a message.</ColoredMessage>
    </>
  );
};
