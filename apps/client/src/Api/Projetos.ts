import { strapi } from "Api"

import useFetchApi from 'Hooks/useFetchApi'

import { Asset2Image, Image } from "Utils/Image"
import StrapiAsset from "Utils/StrapiAsset"

interface StrapiProjeto {
  Logo: StrapiAsset
}

export interface Projeto {
  Logo: Image
}

// transform object into format used by client app
export const transformProjeto = ({
  Logo,
}: StrapiProjeto) => ({
  Logo: Asset2Image(Logo)
}) as Projeto

export const fetchProjeto = (id: number) => strapi
  .get<StrapiProjeto>(`/projetos/${id}`)
  .then(({ data }) => data)
  .then(transformProjeto)

export const useProjeto = (id: number) => useFetchApi(`/o-que-fazemos`, () => fetchProjeto(id))

export const fetchFazemosList = () => strapi
  .get<StrapiProjeto[]>(`/o-que-fazemos`)
  .then(({ data }) => data)
  .then(fazemosList => fazemosList.map(transformProjeto))

export const useProjetos = () => useFetchApi(`/o-que-fazemos`, fetchFazemosList)
