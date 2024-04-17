import MovieCard from './MovieCard'
// import {useEffect} from 'react'
const MovieCards = ({title,movies})=>{
    
// },[])
  return (
        <>
    
    <div className=' p-4 '>
        <h1 className='font-bold text-2xl text-white py-2'>{title}</h1>
        <div className='flex overflow-x-scroll '>
        <div className='flex gap-2'>
        {movies?.map((movie)=> (<MovieCard key={movie.id} movie={movie}/>))}
        </div>
        </div>
        </div>
        </>
    )
}
export default MovieCards