import { backGroundImageURL } from "../../utils/constant"
import GptSearchBar from "./GptSearchBar"
import GptSuggestion from "./GptSuggestion"


function GptSearch() {
  return (
    <div className="bg-opacity-30  bg-black">

    <img className="absolute w-full -z-10" src={backGroundImageURL} alt='backgroungImage'/>
    <div>
        <GptSearchBar/>
        <GptSuggestion/>
    </div>
    </div>
  )
}

export default GptSearch