import { useState, memo } from 'react';
import { ColoredMessage } from './components/ColoredMessage';
import { Child1 } from './components/Child1';
import { Child4 } from './components/Child4';
import { Card } from './components/Card.jsx';

export const App = memo(() => {
  console.log('App レンダリング');

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const [isAdmin, setIsAdmin] = useState(false);

  const onClickSwitch = () => setIsAdmin(!isAdmin);

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
      <Child1 />
      <Child4 />
      <hr className='border-1 border-black my-4' />
      <button
        className='bg-slate-400 hover:bg-slate-700 text-white font-bold my-2 py-1 px-2 rounded'
        onClick={onClickSwitch}
      >
        切り替え
      </button>
      <p>{isAdmin ? <span>管理者</span> : <span>管理者でない</span>}</p>
      <Card isAdmin={isAdmin} />
    </>
  );
});
