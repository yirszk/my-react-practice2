import { memo } from 'react';
import { Child2 } from './Child2';
import { Child3 } from './Child3';

export const Child1 = memo(() => {
  console.log('Child1 レンダリング');

  return (
    <>
      <div className='h-10 bg-yellow-200 m-2 p-2'>Child1</div>
      <Child2 />
      <Child3 />
    </>
  );
});
