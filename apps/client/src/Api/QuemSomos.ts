import { strapi } from "Api"
import useFetchApi from 'Hooks/useFetchApi'

export interface QuemSomos {
  text: string,
}

export const fetchFazemosItem = () => strapi
  .get<QuemSomos>(`/quem-somos`)
  .then(({ data }) => data)
  .then(({ text }) => ({ text }))

export const useFazemosItem = () => useFetchApi<QuemSomos>(`/quem-somos`, () => fetchFazemosItem())
