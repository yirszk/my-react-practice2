import { EditButton } from './EditButton.jsx';

export const Card = (props) => {
  const { isAdmin } = props;

  return (
    <div>こんにちは
      <p>yau</p>
      <EditButton isAdmin={isAdmin} />
    </div>
  )
};
