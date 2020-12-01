import { strapi } from "Api";
import useFetchApi from "Hooks/useFetchApi";
import { Asset2Image, Image } from "Utils/Image";
import StrapiAsset from "Utils/StrapiAsset";

export interface Portfolio {
  nome: string,
  descricaoCurta: string,
  imagem: Image,
  pdf: StrapiAsset,
}

interface StrapiPortfolio {
  nome: string,
  descricaoCurta: string,
  imagem: StrapiAsset,
  pdf: StrapiAsset,
}

// transform object into format used by client app
export const transformPortfolio = ({
  nome,
  descricaoCurta,
  imagem,
  pdf,
}: StrapiPortfolio) => ({
  nome,
  descricaoCurta,
  imagem: Asset2Image(imagem),
  pdf,
}) as Portfolio

export const fetchPortfolio = (id: number) => strapi
  .get<StrapiPortfolio>(`/portifolios/${id}`)
  .then(({ data }) => data)
  .then(transformPortfolio)
  
export const usePortfolio = (id: number) => useFetchApi(`/portifolios/${id}`, () => fetchPortfolio(id))

export const fetchPortfolioList = () => strapi
  .get<StrapiPortfolio[]>(`/portifolios`)
  .then(({ data }) => data)
  .then(fazemosList => fazemosList.map(transformPortfolio))

export const usePortfolioList = () => useFetchApi(`/projetos`, fetchPortfolioList)