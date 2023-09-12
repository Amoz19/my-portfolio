const Button = ({ children, style, handleClick }) => {
  return (
    <button className={style} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
