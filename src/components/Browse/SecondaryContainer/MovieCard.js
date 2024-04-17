import {IMG_URL} from '../../../utils/constant'
const MovieCard = ({movie,className})=>{
    return (
        <>
        {movie && <div className={`${!className? 'w-[11rem] sm:w-[15rem] ' : className.w + 'smw-[12rem]'}` }>
            <img src={IMG_URL + movie?.poster_path} alt='photos'/>
        </div>}
        </>
    )
}
export default MovieCard
