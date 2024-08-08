import React from "react";

interface HelloProps {
  name: string;
  count: number;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Hello: React.FC<HelloProps> = ({ name, setName, count, setCount }) => {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <button onClick={() => setName("Samar")}>Change name to Samar</button>
      <button onClick={() => setName("Suhrob")}>Change name to Suhrob</button>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
    </div>
  );
};

export default Hello;
