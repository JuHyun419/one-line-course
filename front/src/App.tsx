import React from "react";
import Menu from "./component/menu/Menu";

import Button from "./component/button/Button";
import { EButtonSize } from "./component/button/EButtonSize";
import { EButtonType } from "./component/button/EButtonType";
import { EMenuMode } from "./component/menu/EMenuMode";
import Separator from "./component/separator/Separator";
import { ESeparatorDirection } from "./component/separator/ESeparatorDirection";

const App = () => {
  return (
    <div>
      <Button
        btnSize={EButtonSize.Small}
        btnType={EButtonType.Primary}
        onClick={() => console.log("button clicked!")}
      >
        Main
      </Button>
      <Button
        btnSize={EButtonSize.Small}
        btnType={EButtonType.Alt}
        onClick={() => console.log("button clicked!")}
      >
        Comments
      </Button>
      <Button
        btnSize={EButtonSize.Medium}
        btnType={EButtonType.Warning}
        onClick={() => console.log("button clicked!")}
      >
        Bookmarks
      </Button>
      <Button
        btnSize={EButtonSize.Large}
        btnType={EButtonType.Danger}
        onClick={() => console.log("button clicked!")}
      >
        Log out
      </Button>
      <Menu menuMode={EMenuMode.AfterLogin} />
      {/* <Separator direction={ESeparatorDirection.Vertical} /> */}
      {/* <Separator direction={ESeparatorDirection.Horizontal} /> */}
    </div>
  );
};

export default App;