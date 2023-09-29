const Button = ({
  value,
  className = "",
  onClick,
  disabled = false,
}: {
  value: string;
  className?: string;
  onClick?: any;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`rounded-full py-2 px-6 font-bold text-lg ${
        disabled ? "opacity-50" : "hover:scale-110 hover:opacity-90"
      } transition ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export default Button;
