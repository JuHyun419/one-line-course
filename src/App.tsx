import React from "react";

import Button from "./component/button/Button";
import { EButtonType } from "./component/button/EButtonType";

const App = () => {
  return (
    <div>
      <Button
        width={200}
        height={40}
        btnType={EButtonType.Primary}
        onClick={() => console.log("button clicked!")}
      >Click me!</Button>
    </div>
  );
};

export default App;
