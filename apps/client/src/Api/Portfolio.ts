import { Image } from "Utils/Image";
import StrapiAsset from "Utils/StrapiAsset";

export interface Portfolio {
  name: string,
  description: string,
  image: Image,
  pdf: StrapiAsset,
}