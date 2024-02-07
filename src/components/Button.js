const Button = ({ label, onClick, className = 'button-primary' }) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
