
function GptSearchBar() {
    return (
        <div className="z-10 pt-48  ">

            <form className="mx-auto w-fit ">
                <h1 className="text-center font-bold text-white text-3xl shadow-2xl">GPT SEARCH</h1>
                <div className="flex   gap-2">
                    <input
                        className="rounded-md w-[50rem] py-1 px-4"
                        type='text' placeholder="What kinda moives do you like to watch?" />
                    <button className="rounded-md px-4 text-white font-bold text-xl py-2 bg-red-600">Search</button>

                </div>
            </form>
        </div>
    )
}

export default GptSearchBar