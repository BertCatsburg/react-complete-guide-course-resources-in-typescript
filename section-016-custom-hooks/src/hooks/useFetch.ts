import {useEffect, useState} from "react";

interface UseFetchOutputInterface {
  isFetching: boolean
  fetchedData: any
  errorMessage: { message: string } | undefined
  setFetchedData: (data: unknown) => void
}

interface UseFetchInputInterface {
  fetchFunction: () => Promise<any>
  initialValue: unknown
}

export const useFetch = ({fetchFunction, initialValue}: UseFetchInputInterface): UseFetchOutputInterface => {

  const [isFetching, setIsFetching] = useState(false)
  const [errorMessage, setErrorMessage] = useState<{
    message: string
  } | undefined>(undefined)
  const [fetchedData, setFetchedData] = useState<unknown>(initialValue);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true)
      try {
        const data = await fetchFunction()
        setFetchedData(data)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setErrorMessage({message: error.message || 'Failed to fetch data'})
        }
      }
      setIsFetching(false)
    }
    fetchData()
  }, [fetchFunction]);

  return {
    isFetching,
    errorMessage,
    fetchedData,
    setFetchedData,
  }
}
