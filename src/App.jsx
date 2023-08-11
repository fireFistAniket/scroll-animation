import { useState } from "react";
import MobileScreen from "./screens/MobileScreen";
import WebScreen from "./screens/WebScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="d-sm-none">
        <MobileScreen />
      </div>
      <div className="d-none d-sm-block">
        <WebScreen />
      </div>
    </>
  );
}

export default App;
