
function Title({ title, overview }) {
  //  console.log('cahnged1');
  return (
    <>
      <div className="pt-40 mt-2  px-6 h-full aspect-video  flex flex-col gap-4  absolute bg-gradient-to-r from-black text-white">
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="w-[33rem]">
          {overview}
        </p>
        <div className="flex gap-4">
          <button className=" rounded-md  w-28 py-3 bg-white text-black font-bold text-lg">Play</button>
          <button className=" rounded-md w-28 py-3 bg-black   font-bold text-lg">More Info</button>

        </div>
      </div>
    </>
  )
}

export default Title