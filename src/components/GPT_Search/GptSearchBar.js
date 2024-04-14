import { openai } from "../../utils/openai";
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addGptSearchMoviesName } from "../../utils/store/gptSlice";
function GptSearchBar() {
    const dispatch = useDispatch()
    const search = useRef()
    const handleSumit = async (e) => {
        e.preventDefault()
        const gptQuery = 'Act as Moive recommendation system and suggest the relevant movies for the query : ' + search.current.value + '. Suggest only 5 movies , should  separeted by comma like ahead example. Example: abc , acb , uif , afa , hfd '
      
        const data = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        console.log(data.choices);
        const gptMovies = data.choices[0]?.message?.content?.split(',')
        dispatch(addGptSearchMoviesName(gptMovies))
        // console.log(gptMovies);

    }
    return (
        <div className="z-10 pt-48  ">

            <form onSubmit={(e) => { handleSumit(e) }} className="mx-auto w-fit ">
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