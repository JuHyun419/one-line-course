import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import { getPhotoPage } from "../../../service/UnsplashService";
import ImageMoveTo from "./Image-carousel-elements/ImageMoveTo";
import ImagesIndicator from "./Image-carousel-elements/ImagesIndicator";

import "./_ImageCarousel.scss";

const ImageCarousel: React.FC<{
  imagePlacerRef: React.RefObject<HTMLDivElement>;
}> = ({ imagePlacerRef }) => {
  const [images, setImages] = useState<Array<string> | undefined>(undefined);
  const [imageCount, setImageCount] = useState<number>(0);
  const [curIdx, setCurIdx] = useState(0);

  // const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const loadImages = useCallback((images: Array<string>) => dispatch({type: "loadImages", payloads: images}), [dispatch]);

  useEffect(() => {
    (async () => {
      const imageQueryResult = await getPhotoPage({ query: "office" });
      loadImages(imageQueryResult?.results.map(el => el.urls.regular));
      // setImages(imageQueryResult?.results.map(el => el.urls.regular));
      setImageCount(imageQueryResult?.results.length);
    })();
  }, []);

  const imgJSX = useMemo(
    () =>
      images?.map(url => (
        <img key={uuidv4()} src={url} className="imageCarousel--image"></img>
      )),
    [images]
  );

  return (
    <div className="imageCarousel">
      <div className="imageCarousel-imagePlacer" ref={imagePlacerRef}>
        {imgJSX}
      </div>
      <div className="imageCarousel-indicator">
        <ImageMoveTo
          imagePlacerEl={imagePlacerRef}
          imageCount={imageCount}
          curIdx={curIdx}
          setCurIdx={setCurIdx}
        />
        <ImagesIndicator imageCount={imageCount} highlightIdx={curIdx} />
      </div>
    </div>
  );
};

export default ImageCarousel;
