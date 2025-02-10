import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Developer from "./components/developer";
import Tester from "./components/tester";
import Counter from "./components/Counter";
import Greetings from "./components/Greetings";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Developer />
        <Tester />
        <Greetings name="John" />
        <Greetings name="Doe" />
        <Counter />
      </div>
    </>
  );
}

export default App;
