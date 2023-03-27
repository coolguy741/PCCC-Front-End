import { ChangeEvent, FC } from "react";

type SelectBoxProps = {
  options: string[];
  value?: string;
  onChange: (value: string) => void;
};

export const SelectBox: FC<SelectBoxProps> = ({ options, value, onChange }) => {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select value={value} onChange={handleSelectChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
