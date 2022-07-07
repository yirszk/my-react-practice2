import { useContext } from 'react';
import { AdminFlagContext } from './providers/AdminFlagProvider';

export const EditButton = () => {
  const { isAdmin } = useContext(AdminFlagContext);
  console.log({ isAdmin });

  return (
    <button
      className='bg-green-600 hover:bg-green-700 text-white font-bold my-2 py-1 px-2 rounded'
      disabled={!isAdmin}
    >
      編集
    </button>
  );
};
