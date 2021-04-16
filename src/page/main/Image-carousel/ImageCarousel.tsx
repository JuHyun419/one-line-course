import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { getPhotoPage } from "../../../service/UnsplashService";
import ImageMoveTo from "./ImageIndicator/ImageMoveTo";
import ImagesIndicator from "./ImageIndicator/ImagesIndicator";

import "./_ImageCarousel.scss";

const ImageCarousel: React.FC<{}> = () => {
  const [images, setImages] = useState<Array<string> | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const res = await getPhotoPage({ query: "office" });
      setImages(res?.results.map(el => el.urls.full));
    })();
  }, [setImages]);

  // const imgJSX = randomImgs?.map(url => (
  //   <img key={uuidv4()} src={url} className="imageCarousel--image"></img>
  // ));

  let url: string = "";
  if (typeof images !== "undefined") {
    url = images[0]!;
  }

  return (
    <div className="imageCarousel">
      <img src={url} className="imageCarousel--image" />
      <div className="imageCarousel-indicator">
        <ImageMoveTo images={images} />
        <ImagesIndicator imageCount={15} highlightIdx={3} />
      </div>
    </div>
  );
};

export default ImageCarousel;
