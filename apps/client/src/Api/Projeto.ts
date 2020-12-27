import { strapi } from "Api"
import useFetchApi from 'Hooks/useFetchApi'
import StrapiAsset from "Utils/StrapiAsset"

export interface Projeto {
  pdf: StrapiAsset,
  nome: string,
}

// remove all other properties from object
export const reduceToProjeto = ({
  pdf: StrapiAsset,
  nome: string,
}: Projeto): Projeto => ({
  pdf: StrapiAsset,
  nome: string,
})

export const fetchProjetoItem = (id: number) => strapi
  .get<Projeto>(`/projetos-pdfs/${id}`)
  .then(({ data }) => data)
  .then(reduceToProjeto)
  
export const useProjetoItem = (id: number) => useFetchApi<Projeto>(`/projetos-pdfs/${id}`, () => fetchProjetoItem(id))
  
export const fetchProjetoList = () => strapi
  .get<Projeto[]>(`/projetos-pdfs`)
  .then(({ data }) => data)
  .then(fazemosList => fazemosList
    .map(reduceToProjeto)
  )

export const useProjetoList = () => useFetchApi<Projeto[]>(`/projetos-pdfs`, fetchProjetoList)
