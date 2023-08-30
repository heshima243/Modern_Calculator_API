import { useState } from "react";
import Button from "./Button";
import Fom from "./Fom";

const Home = () => {
  // state
  const [total, setTotal] = useState("0");

  return (
    <div>
      <h1>Modern Calculator</h1>

      <div className="container">
        <Fom setTotal={setTotal} total={total} />

        <Button setTotal={setTotal} total={total} />
      </div>
    </div>
  );
};

export default Home;
