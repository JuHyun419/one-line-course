import React from "react";

import Menu from "./component/menu/Menu";

import Button from "./component/button/Button";
import { EButtonSize } from "./component/button/EButtonSize";
import { EButtonType } from "./component/button/EButtonType";
import { EMenuMode } from "./component/menu/EMenuMode";

import { getIconsRandomlyWithinRadius } from "./common/Icons";

import NavFactory from "./component/nav/nav-factory/NavFactory";
import { ENavType } from "./component/nav/ENavType";

import Footer from "./component/footer/Footer";

import "./app.scss";

const App = () => {
  return (
    <div className={"app"}>
      <NavFactory navType={ENavType.Landing} />
      <NavFactory navType={ENavType.SignIn} />
      <NavFactory navType={ENavType.AfterLogin} />
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
      {getIconsRandomlyWithinRadius(30, { fontSize: "3rem" })}
      <Footer />
    </div>
  );
};

export default App;
