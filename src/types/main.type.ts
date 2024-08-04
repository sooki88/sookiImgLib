export interface ImageType {
  title: string;
  link: string;
  thumbnail: string;
  sizeheight: string;
  sizewidth: string;
}

export interface ImageDataType {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: ImageType[];
}
