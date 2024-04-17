import { useSelector } from "react-redux"
import MovieCard from "../Browse/SecondaryContainer/MovieCard"
import { className } from "../../utils/constant"
function GptSuggestion() {
  // const gptSearchMoviesName = useSelector(store => store.gpt?.gptSearchMoviesName)
  const gptSearchMovies = useSelector(store => store.gpt?.gptSearchMovies)

 if(gptSearchMovies)
 return (
    <div>
      <div className="  mt-32  ">
        <div className="flex flex-wrap  gap-4 justify-center -mt-20">
          {gptSearchMovies?.map(movie => (<MovieCard key={movie?.id}  movie={movie} className={className} />))}
        </div>
      </div>
    </div>
  )
}

export default GptSuggestion