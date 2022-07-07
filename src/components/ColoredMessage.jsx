export const ColoredMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: '20px',
    fontWeight: 'bold',
  };

  return <p style={contentStyle}>{props.children}</p>;
};
