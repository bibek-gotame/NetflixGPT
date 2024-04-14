
import { useEffect } from "react"
import { API_OPTIONS, searchAPI } from "../utils/constant"
import { addGptSearchMovies } from "../utils/store/gptSlice"
import { useDispatch, useSelector } from 'react-redux'

export const useGptSearchMovies = (Movie_name) => {
  const dispatch = useDispatch()
  const gptSearchMovies = useSelector(store => store.gpt?.gptSearchMovies)

  const getGptSearchMovies = async () => {
    const data = await fetch(searchAPI + Movie_name, API_OPTIONS)
    const json = await data.json()
    console.log(json);
    dispatch(addGptSearchMovies(json))
  }

  useEffect(() => {
    !gptSearchMovies &&
      getGptSearchMovies() // useeffect run on every render with which api being called in every rendering so to avoid, we checked is trailer already existed , no api will be called
  }, [])

}