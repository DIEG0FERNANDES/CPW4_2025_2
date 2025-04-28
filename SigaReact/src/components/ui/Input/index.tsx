interface InputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input = ({
  type = "text",
  placeholder,
  name,
  id,
  value,
  onChange,
  required,
}: InputProps) => {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default Input;
