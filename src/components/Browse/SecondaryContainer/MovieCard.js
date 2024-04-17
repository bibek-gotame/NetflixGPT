import {IMG_URL} from '../../../utils/constant'
const MovieCard = ({movie,className})=>{
    return (
        <>
        {movie && <div className={`${!className? 'w-[15rem]' : className.w + ''}` }>
            <img src={IMG_URL + movie?.poster_path} alt='photos'/>
        </div>}
        </>
    )
}
export default MovieCard
