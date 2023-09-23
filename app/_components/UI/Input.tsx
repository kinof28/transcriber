const className =
  "text-indigo-700 font-bold p-2 rounded-lg outline-none resize-none border-2 focus:border-indigo-300 focus:shadow-md focus:shadow-indigo-300 ";

const Input = ({
  type,
  value,
  placeholder,
  onchange,
}: {
  type: string;
  value: string;
  placeholder: string;
  onchange: any;
}) => {
  return type === "textarea" ? (
    <textarea
      className={className}
      name="message"
      value={value}
      placeholder={placeholder}
      cols={30}
      rows={10}
      onChange={(e) => onchange(e.target.value)}
    />
  ) : (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onchange(e.target.value)}
      className={className}
    />
  );
};

export default Input;
