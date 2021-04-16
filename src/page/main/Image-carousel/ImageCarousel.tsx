import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { getPhotoPage } from "../../../service/UnsplashService";
import ImageMoveTo from "./ImageIndicator/ImageMoveTo";
import ImagesIndicator from "./ImageIndicator/ImagesIndicator";

import "./_ImageCarousel.scss";

const ImageCarousel: React.FC<{}> = () => {
  const [images, setImages] = useState<Array<string> | undefined>(undefined);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      const res = await getPhotoPage({ query: "office" });
      setImages(res?.results.map(el => el.urls.regular));
    })();
  }, [setImages]);

  const imgJSX = images?.map(url => (
    <img key={uuidv4()} src={url} className="imageCarousel--image"></img>
  ));

  return (
    <div className="imageCarousel">
      <div className="imageCarousel-imagePlacer" ref={carouselRef}>
        {imgJSX}
      </div>
      <div className="imageCarousel-indicator">
        <ImageMoveTo carouselRef={carouselRef} />
        <ImagesIndicator imageCount={15} highlightIdx={3} />
      </div>
    </div>
  );
};

export default ImageCarousel;
