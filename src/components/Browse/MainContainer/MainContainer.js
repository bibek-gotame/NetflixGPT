import { useSelector } from 'react-redux'
import Title from './Title'
import BackgroundVideo from './backgroundVideo'
function MainContainer() {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    if (!movies) return;
    const { original_title, overview, id } = movies[0]
    
    return (
        <>
        <div className='bg-black  z-0' >

            <Title title={original_title} overview={overview} />
            <BackgroundVideo movie_id={id} />
        </div>
        </>
    )
}

export default MainContainer