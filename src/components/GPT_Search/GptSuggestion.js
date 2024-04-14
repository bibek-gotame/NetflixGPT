import { useSelector } from "react-redux"
import GptMovieCard from "./GptMovieCard"
import { useGptSearchMovies } from "../../Hooks/useGptSearchMovies"
function GptSuggestion() {
  const gptSearchMovies = useSelector(store => store.gpt?.gptSearchMovies)
  const gptSearchMoviesName = useSelector(store => store.gpt?.gptSearchMoviesName)

  for (let i = 1; i <= gptSearchMoviesName.length; i++) {
    useGptSearchMovies(gptSearchMoviesName[i])
  }
  return (
    <div>GptSuggestion
      <div>
        {gptSearchMovies?.map((m) => (
          <GptMovieCard key={m.results?.id} movie={m.results} />
        ))}
      </div>
    </div>
  )
}

export default GptSuggestion