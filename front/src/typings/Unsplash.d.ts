declare var Unsplash_Img: {
  data?: {
    id: string;
    width: number;
    height: number;
    color: string;
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
    };
    users: any;
    links: {
      self: string;
      html: string;
      download: string;
    };
  };
};

declare var Unsplash_PhotoSearch: {
  query: string;
  page?: number;
  perPage?: number;
  orderBy?: "latest" | "relevant";
  collectionIds?: string[];
  contentFilter?: "low" | "high";
  color?: Unsplash_ImgColor;
  orientation?: "landscape" | "portrait" | "squarish";
};

type Unsplash_ImgColor =
  | "black_and_white"
  | "black"
  | "white"
  | "yellow"
  | "orange"
  | "red"
  | "purple"
  | "magenta"
  | "green"
  | "teal"
  | "blue";
