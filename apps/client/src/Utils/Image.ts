// the object form of an image to be used by visual components

import StrapiAsset from "./StrapiAsset"

export type imageExtension = string
export type imageMime = string

export interface Image {
  url: string,
  alternativeText: string,
  caption: string,
  width: number,
  height: number,
  ext: imageExtension
}

// transform a strapi asset object into an image object (remove unecessary info)
export const Asset2Image = ({
  url,
  alternativeText,
  caption,
  width,
  height,
  ext
}: StrapiAsset): Image => ({
  url, alternativeText, caption, width, height, ext,
})