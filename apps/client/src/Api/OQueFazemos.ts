import { strapi } from "Api"
import useFetchApi from 'Hooks/useFetchApi'
import { Image } from "Utils/Image"

export interface Fazemos {
  Titulo: string,
  descricao: string,
  imagem: Image,
}

export const fetchFazemosItem = (id: number) => strapi
  .get<Fazemos>(`/o-que-fazemos/${id}`)
  .then(({ data }) => data)
  .then(({ Titulo, descricao, imagem }) => ({ Titulo, descricao, imagem }))

export const useFazemosItem = (id: number) => useFetchApi<Fazemos>(`/o-que-fazemos`, () => fetchFazemosItem(id))

export const fetchFazemosList = () => strapi
  .get<Fazemos[]>(`/o-que-fazemos`)
  .then(({ data }) => data)
  .then(fazemosList => fazemosList
    .map(({ Titulo, descricao, imagem }) => ({ Titulo, descricao, imagem }))
  )

export const useFazemosList = () => useFetchApi<Fazemos[]>(`/o-que-fazemos`, fetchFazemosList)
