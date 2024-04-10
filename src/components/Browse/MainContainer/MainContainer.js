
import { useEffect } from 'react'
import {useSelector} from 'react-redux'
import Title from './Title'
import BackgroundVideo from './backgroundVideo'
function MainContainer() {
    const movies = useSelector((store)=> store.movies?.nowPLayingMovies)
    if(!movies) return;
const {original_title,overview ,id}= movies[1]
    // console.log(movies);
    // console.log(movies[1]);
    return (
        <>
            <Title title={original_title} overview={overview}/>
            <BackgroundVideo movie_id={id} />
        </>
    )
}

export default MainContainer