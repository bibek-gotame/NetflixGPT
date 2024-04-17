import { useSelector } from "react-redux"
import MovieCard from "../Browse/SecondaryContainer/MovieCard"
function GptSuggestion() {
  // const gptSearchMoviesName = useSelector(store => store.gpt?.gptSearchMoviesName)
  const gptSearchMovies = useSelector(store => store.gpt?.gptSearchMovies)
const className = {
 w:"w-[11rem]"
}
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