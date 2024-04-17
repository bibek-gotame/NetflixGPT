import { backGroundImageURL } from "../../utils/constant"
import GptSearchBar from "./GptSearchBar"
import GptSuggestion from "./GptSuggestion"


function GptSearch() {
  return (
    <div >
<div className="fixed bg-opacity-60  h-screen w-screen -z-10  bg-black "></div>
    <img className=" w-screen h-screen fixed object-cover  -z-20 " src={backGroundImageURL} alt='backgroungImage'/>
    <div>
        <GptSearchBar/>
        <GptSuggestion/>
    </div>
    </div>
  )
}

export default GptSearch