import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Pics from "./components/Pics";
import Text from "./components/Text";

function App() {
  const [count, setCount] = useState(0);
  const [show, setshow] = useState(false);
  const [added, setadded] = useState(false);

  return (
    <div className="pt-8 pb-8 font-kumbh flex flex-col ">
      <Header
        show={show}
        setshow={setshow}
        added={added}
        setadded={setadded}
        count={count}
      />
      <div className="mx-auto xl:w-1002 lg:w-[880px] md:w-[736px] sm:w-445  w-[375px] flex md:flex-row flex-col items-center lg:gap-28 md:gap-24 gap-0.5 md:self-center">
        <Pics />
        <Text count={count} setCount={setCount} setadded={setadded} />
      </div>
    </div>
  );
}

export default App;
