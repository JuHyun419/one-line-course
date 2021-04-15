import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { getPhotoPage } from "../../../service/UnsplashService";

import "./_ImageCarousel.scss";

const ImageCarousel: React.FC<{}> = () => {
  const [randomImgs, setRandomImgs] = useState<Array<string> | undefined>(
    undefined
  );

  useEffect(() => {
    (async () => {
      const res = await getPhotoPage({ query: "office" });
      setRandomImgs(res?.results.map(el => el.urls.full));
    })();
  }, [setRandomImgs]);

  // const imgJSX = randomImgs?.map(url => (
  //   <img key={uuidv4()} src={url} className="imageCarousel--image"></img>
  // ));
  
  let url: string = "";
  if (typeof randomImgs !== "undefined") {
    url = randomImgs[0]!;
  }

  return (
    <div className="imageCarousel">
      <img key={uuidv4()} src={url} className="imageCarousel--image" />
    </div>
  );
};

export default ImageCarousel;
