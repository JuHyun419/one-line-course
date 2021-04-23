import React, { useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ENavType } from "../../typings/type";
import { initFetch_CarouselImageURLs } from "../../store/action/carousel-async/";

import NavFactory from "../../component/nav/nav-factory/NavFactory";
import { placeIconsRandomly } from "../../common/";
import Footer from "../../component/footer/Footer";
import ImageCarousel from "./Image-carousel/ImageCarousel";
import Search from "./Search/Search";
import { TCombinedStates } from "../../store";
import Loading from "../../component/loading/Loading";

import "./_Main.scss";

const Main: React.FC<{}> = () => {
  useInitFetch();

  const loadingJSX = useSelector(
    (state: TCombinedStates) => state.carouselAsync.isLoading,
    shallowEqual
  );
  if (loadingJSX) {
    return <Loading />;
  }

  // const errorJSX = useSelector(
  //   (state: TCombinedStates) => state.carouselAsync.err,
  //   shallowEqual
  // );
  // if (errorJSX) {
  //   // TODO: Render Error
  //   // return <Error />;
  // }

  return (
    <div>
      <NavFactory navType={ENavType.AfterLogin} highlightBtnIdx={0} />
      <div className="page main">
        <ImageCarousel />
        <Search />
        {/* TODO: Keyword Selection */}
        {/* TODO: Search Result */}
        {placeIconsRandomly(30, { fontSize: "2rem" })}
        <Footer />
      </div>
    </div>
  );
};

const useInitFetch = () => {
  const dispatch = useDispatch();
  const _initFetch = useCallback(
    // TODO: Fetch Random Images times passing by
    (query: string) => dispatch(initFetch_CarouselImageURLs({ query })),
    [dispatch]
  );

  useEffect(() => {
    _initFetch("office");
  }, []);
};

export default Main;
