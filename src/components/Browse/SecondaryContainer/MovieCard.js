import {IMG_URL} from '../../../utils/constant'
const MovieCard = ({movie})=>{
// console.log(IMG_URL)
// console.log(movie)
    return (
        <>
        <div className='w-[15rem]'>
            <img src={IMG_URL + movie.poster_path} alt='photos'/>
        </div>
        </>
    )
}
export default MovieCard
