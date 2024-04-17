
function Title({ title, overview }) {
  return (
    <>
      <div className=" absolute z-10 pt-[5rem] sm:pt-[6rem] md:pt-[10rem] xl:pt-[15rem] px-6 flex flex-col gap-2 w-full aspect-video       text-white">
        <h1 className="font-bold text-xl md:text-2xl">{title}</h1>
        <p className="hidden md:inline-block w-full max-w-[33rem] text-lg">
          {overview}
        </p>
        <div className="flex gap-4">
          <button className=" bg-opacity-80 rounded-md  w-20 sm:w-28 py-1 md:py-2  lg:py-3 bg-white text-black font-bold text:md md:text-lg ">Play</button>
          <button className=" bg-opacity-80 rounded-md w-20 sm:w-28 py-1 md:py-2 lg:py-3 bg-black   font-bold text:md md:text-lg">More Info</button>

        </div>
      </div>
    </>
  )
}

export default Title