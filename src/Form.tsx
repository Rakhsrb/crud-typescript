import React, { useState } from "react";

interface User {
  id: string;
  name: string;
}

interface FormProps {
  setData: React.Dispatch<React.SetStateAction<User[]>>;
  data: User[];
}

export const Form: React.FC<FormProps> = ({ setData, data }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newData: User = {
      id: (data.length + 1).toString(),
      name: inputValue,
    };

    setData([...data, newData]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
