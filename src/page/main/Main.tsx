import React, { useEffect } from "react";

import NavFactory from "../../component/nav/nav-factory/NavFactory";
import { ENavType } from "../../component/nav/ENavType";

import "./_Main.scss";
import { placeIconsRandomly } from "../../common/Icons";
import Footer from "../../component/footer/Footer";

import { getRandomPhotos } from "../../service/UnsplashService";

const Main: React.FC<{}> = () => {
  useEffect(() => {
    (async () => {
      const res = await getRandomPhotos();
      const dat = res.data;
      console.log(dat);
      
    })();
  }, []);
  return (
    <div>
      <NavFactory navType={ENavType.AfterLogin} highlightBtnIdx={0} />
      <div className="page">{placeIconsRandomly(30, { fontSize: "2rem" })}</div>
      <Footer />
    </div>
  );
};

export default Main;
