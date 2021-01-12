import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"
import { Asset2Image, Image } from "Utils/Image"
import StrapiAsset from "Utils/StrapiAsset"

interface PoemStrapi {
  video: StrapiAsset,
  imagem: StrapiAsset,
}

export interface Poem {
  video: StrapiAsset,
  imagem: Image,
}

const poemApiPath = `/poema`

// remove all other properties from object
export const reduceToPoem = ({
  video,
  imagem,
}: PoemStrapi): Poem => ({
  video,
  imagem: Asset2Image(imagem),
})

export const fetchPoem = () => strapi
  .get<PoemStrapi>(poemApiPath)
  .then(({ data }) => data)
  .then(reduceToPoem)
  
export const usePoem = () => useFetchApi<Poem>(poemApiPath, fetchPoem)
