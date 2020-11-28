import { strapi } from "Api"

import useFetchApi from 'Hooks/useFetchApi'

import { Asset2Image, Image } from "Utils/Image"
import StrapiAsset from "Utils/StrapiAsset"

interface StrapiProjeto {
  Logo: StrapiAsset,
  id: number,
}

export interface Projeto {
  Logo: Image,
  id: number,
}

// transform object into format used by client app
export const transformProjeto = ({
  Logo,
  id,
}: StrapiProjeto) => ({
  Logo: Asset2Image(Logo),
  id,
}) as Projeto

export const fetchProjeto = (id: number) => strapi
  .get<StrapiProjeto>(`/projetos/${id}`)
  .then(({ data }) => data)
  .then(transformProjeto)

export const useProjeto = (id: number) => useFetchApi(`/projetos/${id}`, () => fetchProjeto(id))

export const fetchFazemosList = () => strapi
  .get<StrapiProjeto[]>(`/projetos`)
  .then(({ data }) => data)
  .then(fazemosList => fazemosList.map(transformProjeto))

export const useProjetos = () => useFetchApi(`/projetos`, fetchFazemosList)
