const Button = ({
  value,
  className = "",
}: {
  value: string;
  className?: string;
  //   onClick: any;
  color?: string;
  bgColor?: string;
}) => {
  return (
    <button
      className={`rounded-full py-2 px-6 font-bold text-lg hover:scale-110 hover:opacity-90 transition ${className}`}
    >
      {value}
    </button>
  );
};

export default Button;
