const Button = ({ children, style, handleClick }) => {
  return (
    <button className={style} onClick={handleClick} href>
      {children}
    </button>
  );
};

export default Button;
