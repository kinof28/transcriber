const Input = ({
  type,
  value,
  placeholder,
  error,
  onchange,
  onblur,
  onfocus,
}: {
  type: string;
  value: string;
  placeholder: string;
  error?: string;
  onchange: any;
  onblur?: any;
  onfocus?: any;
}) => {
  const className = `text-indigo-700 font-bold p-2 rounded-lg outline-none w-full resize-none border-2 focus:border-indigo-300 focus:shadow-md focus:shadow-indigo-300 ${
    error && "border-pink-300 shadow-pink-300 shadow-md"
  }`;
  return (
    <div className="relative">
      <span className="text-xs font-serif text-red-600 z-10 absolute left-2 top-0">
        {error}
      </span>
      {type === "textarea" ? (
        <textarea
          className={className}
          name="message"
          value={value}
          placeholder={placeholder}
          cols={30}
          rows={10}
          onChange={(e) => onchange(e.target.value)}
          onBlur={onblur}
          onFocus={onfocus}
        />
      ) : (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onchange(e.target.value)}
          onBlur={onblur}
          onFocus={onfocus}
          className={className}
        />
      )}
    </div>
  );
};

export default Input;
