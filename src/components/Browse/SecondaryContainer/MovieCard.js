import {IMG_URL} from '../../../utils/constant'
const MovieCard = ({movie})=>{
    // console.log(movie.id);
    return (
        <>
        {movie && <div className='w-[15rem]'>
            <img src={IMG_URL + movie?.poster_path} alt='photos'/>
        </div>}
        </>
    )
}
export default MovieCard
