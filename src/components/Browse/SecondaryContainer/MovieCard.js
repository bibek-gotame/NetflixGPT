import { useNavigate } from 'react-router-dom'
import { IMG_URL } from '../../../utils/constant'
import { useDispatch } from 'react-redux'
import { addWatchingMovies } from '../../../utils/store/watchSlice'
const MovieCard = ({ movie, className }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <>
            {movie && <div
                onClick={() => {
                    dispatch(addWatchingMovies({
                        title: movie.title,
                        id: movie.id
                    }))
                    navigate('/watch')
                }}
                className={`${!className ? 'w-[11rem] sm:w-[15rem] ' : className.w + 'smw-[12rem]'}`}>
                <img src={IMG_URL + movie?.poster_path} alt='photos' />
            </div>}
        </>
    )
}
export default MovieCard
