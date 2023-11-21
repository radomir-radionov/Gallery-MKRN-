const Error = ({ ...props }) => {
  return (
    <div
      style={{ color: '#f23838', textAlign: 'center', margin: '0.5rem 0' }}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default Error;
