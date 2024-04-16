import { useSelector } from "react-redux"
import MovieCard from "../Browse/SecondaryContainer/MovieCard"
function GptSuggestion() {
  // const gptSearchMoviesName = useSelector(store => store.gpt?.gptSearchMoviesName)
  const gptSearchMovies = useSelector(store => store.gpt?.gptSearchMovies)

 
  return (
    <div>
      <div className="  bg-black border-2 border-black mt-32  ">
        <div className="flex flex-wrap gap-4  -mt-20  px-8">
          {gptSearchMovies?.map(movie => (<MovieCard key={movie?.id} movie={movie} />))}
        </div>
      </div>
    </div>
  )
}

export default GptSuggestion