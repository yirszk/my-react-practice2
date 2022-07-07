export const EditButton = (props) => {
  const { isAdmin } = props;

  return (
    <button
      className='bg-green-600 hover:bg-green-700 text-white font-bold my-2 py-1 px-2 rounded'
      disabled={isAdmin}
    >
      編集
    </button>
  );
};
