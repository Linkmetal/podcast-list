import styles from "./TextInput.module.css";

type TextInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const TextInput = ({
  value,
  onChange,
  placeholder = "",
}: TextInputProps) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default TextInput;
