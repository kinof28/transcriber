const Button = ({
  value,
  className = "",
  onClick,
}: {
  value: string;
  className?: string;
  onClick?: any;
}) => {
  return (
    <button
      className={`rounded-full py-2 px-6 font-bold text-lg hover:scale-110 hover:opacity-90 transition ${className}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
