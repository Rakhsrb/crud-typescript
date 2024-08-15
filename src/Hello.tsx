// import React from "react";

// interface HelloProps {
//   name: string;
//   count: number;
//   setName: React.Dispatch<React.SetStateAction<string>>;
//   setCount: React.Dispatch<React.SetStateAction<number>>;
// }

// const Hello: React.FC<HelloProps> = ({ name, setName, count, setCount }) => {
//   return (
//     <div>
//       <h1>Hello, {name}</h1>
//       <button onClick={() => setName("Samar")}>Change name to Samar</button>
//       <button onClick={() => setName("Suhrob")}>Change name to Suhrob</button>
//       <button onClick={() => setCount(count + 1)}>Increment {count}</button>
//     </div>
//   );
// };

// export default Hello;

// interface HelloProps {
//   name: string;
//   count: number;
//   setName: React.Dispatch<React.SetStateAction<string>>;
//   setCount: React.Dispatch<React.SetStateAction<number>>;
// }

// import React from "react";

// type HelloProps = {
//   count: number;
//   name: string;
//   setName: React.Dispatch<React.SetStateAction<string>>;
//   setCount: React.Dispatch<React.SetStateAction<number>>;
// };

// const Hello = ({ name, setName, count, setCount }: HelloProps) => {
//   return (
//     <div>
//       <h1>Hello, {name}</h1>
//       <button onClick={() => setName("Samar")}>Change name to Samar</button>
//       <button onClick={() => setName("Suhrob")}>Change name to Suhrob</button>
//       <button onClick={() => setCount(count + 1)}>Increment {count}</button>
//     </div>
//   );
// };

// export default Hello;

import React from "react";

type HelloProps = {
  count: number;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

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
