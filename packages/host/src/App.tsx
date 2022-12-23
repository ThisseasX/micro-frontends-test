import { useEffect } from "react";
import { useState } from "react";
import MicroFrontend from "./MicroFrontend";

const App = () => {
  const [rendered, setRendered] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRendered(false);
    }, 5000);
  }, []);

  return (
    <div>
      <div>This is the HOST</div>

      {rendered && (
        <MicroFrontend
          host={"http://localhost:3001"}
          rootId={"Page1"}
          otherProps={{
            message: "Yay!!",
          }}
        />
      )}
    </div>
  );
};

export default App;
