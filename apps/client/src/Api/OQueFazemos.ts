import { strapi } from "Api"

import useFetchApi from 'Hooks/useFetchApi'

import { Asset2Image, Image } from "Utils/Image"
import StrapiAsset from "Utils/StrapiAsset"

export interface Fazemos {
  Titulo: string,
  descricaoCurta: string,
  descricaoLonga: string,
  imagem: Image,
  NomeID: string,
}

// remove all other properties from object
export const reduceToFazemos = ({
  Titulo,
  descricaoCurta,
  descricaoLonga,
  imagem,
  NomeID,
}: Fazemos): Fazemos => ({
  NomeID,
  Titulo,
  descricaoCurta,
  descricaoLonga,
  imagem: Asset2Image(imagem as StrapiAsset),
})

export const fetchFazemosItem = (id: number) => strapi
  .get<Fazemos>(`/o-que-fazemos/${id}`)
  .then(({ data }) => data)
  .then(reduceToFazemos)
  
export const useFazemosItem = (id: number) => useFetchApi<Fazemos>(`/o-que-fazemos`, () => fetchFazemosItem(id))
  
  export const fetchFazemosList = () => strapi
  .get<Fazemos[]>(`/o-que-fazemos`)
  .then(({ data }) => data)
  .then(fazemosList => fazemosList
    .map(reduceToFazemos)
  )

export const useFazemosList = () => useFetchApi<Fazemos[]>(`/o-que-fazemos`, fetchFazemosList)
