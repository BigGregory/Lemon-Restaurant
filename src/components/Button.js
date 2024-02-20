const Button = ({
  label,
  onClick,
  className = 'button-primary',
  ...restProps
}) => {
  return (
    <button onClick={onClick} className={className} {...restProps}>
      {label}
    </button>
  );
};

export default Button;
