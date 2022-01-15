import React from "react";
import { Container } from "./styles";

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
}

const SelectInput: React.FC<ISelectInputProps> = ({ options }) => {
  return (
    <Container>
      <select>
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export { SelectInput };
