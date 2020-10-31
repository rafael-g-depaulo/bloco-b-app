import useSWR from "swr"
import { fetcherFn } from "swr/dist/types"

export function useFetchApi<Data> (key: string, fetcher: fetcherFn<Data>) {
  const { data, error, isValidating } = useSWR(key, fetcher)

  return {
    error,
    data,
    isLoading: isValidating || (!data && !error),
  }
}

export default useFetchApi
