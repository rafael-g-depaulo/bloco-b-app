import { strapi } from "Api"
import useFetchApi from 'Hooks/useFetchApi'

export interface Contact {
  email: string,
  endereco: string,
  facebookLink: string,
  instagramLink: string,
  youtubeLink: string,
}

export const fetchContact = () => strapi
  .get<Contact>(`/contato`)
  .then(({ data }) => data)
  .then(({ email, endereco, facebookLink, instagramLink, youtubeLink }) => ({ email, endereco, facebookLink, instagramLink, youtubeLink }))

export const useContact = () => useFetchApi<Contact>(`/contato`, fetchContact)
