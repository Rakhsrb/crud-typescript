import React, { useState } from "react";
import Hello from "./Hello";
import { Form } from "./Form";
import { AllUsers } from "./AllUsers";

const App: React.FC = () => {
  const [name, setName] = useState("Suhrob");
  const [count, setCount] = useState(0);
  const [data, setData] = useState<{ id: string; name: string }[]>([]);

  return (
    <div>
      <Hello name={name} setName={setName} count={count} setCount={setCount} />
      <Form setData={setData} data={data} />
      <AllUsers data={data} />
    </div>
  );
};

export default App;
