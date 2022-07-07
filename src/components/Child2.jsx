import { memo } from 'react';
export const Child2 = memo(() => {
  console.log('Child2 レンダリング');

  return <div className='h-10 bg-blue-200 m-2 p-2'>Child2</div>;
});
