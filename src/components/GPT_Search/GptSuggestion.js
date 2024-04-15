import { useSelector } from "react-redux"
import GptMovieCard from "./GptMovieCard"
function GptSuggestion() {
  const gptSearchMoviesName = useSelector(store => store.gpt?.gptSearchMoviesName)
  const gptSearchMovies = useSelector(store => store.gpt?.gptSearchMovies)

 
  return (
    <div>GptSuggestion
      <div>
        {/* {gptSearchMovies?.map((m) => (
          <GptMovieCard key={m.results?.id} movie={m.results} />
        ))} */}
      </div>
    </div>
  )
}

export default GptSuggestion