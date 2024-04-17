import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { openai } from "../../utils/openai";
import { API_OPTIONS, searchAPI } from "../../utils/constant"
import { addGptSearchMovies } from "../../utils/store/gptSlice";

function GptSearchBar() {
    const dispatch = useDispatch()
    const search = useRef()

    const getGptMovies = async (name) => {
        const data = await fetch(searchAPI + name, API_OPTIONS)
        const json = await data.json()
        return json?.results[0]
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const gptQuery = 'Act as a movie recommendation system. Suggest the top 10 movies for the query: ' + search.current.value + '. Please provide only the movie names in a single line, separated by commas (e.g., "Movie1, Movie2, Movie3, Movie4, Movie5 , Movie6 , Movie7 , Movie8 , Movie9 , Movie10 "). Do not use numbering or any other format. Only the comma-separated movie names.';
        const data = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        const gptMoviesName = data?.choices[0]?.message?.content?.split(',')
        const moviesPromises = gptMoviesName?.map(name => getGptMovies(name))
        const gptMovies = await Promise.all(moviesPromises)
        dispatch(addGptSearchMovies({ gptMovies: gptMovies, gptMoviesName: gptMoviesName }))
    }

    return (
        <div className="z-10 pt-48  ">

            <form onSubmit={(e) => { handleSubmit(e) }} className="mx-auto w-fit ">
                <h1 className="text-center font-bold text-white text-3xl shadow-2xl">GPT SEARCH</h1>
                <div className="flex   gap-2">
                    <input
                        ref={search}
                        className="rounded-md w-[50rem] py-1 px-4"
                        type='text' placeholder="What kinda moives do you like to watch?" />
                    <button className="rounded-md px-4 text-white font-bold text-xl py-2 bg-red-600">Search</button>

                </div>
            </form>
        </div>
    )
}

export default GptSearchBar