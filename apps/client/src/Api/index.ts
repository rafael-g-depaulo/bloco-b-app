import axios from "axios"

import { getStrapiUrl } from "@bloco-b/server-conn-info"

// create axios instance to connect to strapi server
export const strapi = axios.create({
  baseURL: getStrapiUrl(),
})