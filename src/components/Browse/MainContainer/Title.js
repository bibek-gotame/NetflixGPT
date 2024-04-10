
function Title({title, overview}) {
   
  return (
    <>
<div className="pt-52 w-[23rem] flex flex-col gap-4 p-10">
<h1 className="font-bold text-lg">{title}</h1>
<p>
    {overview}
</p>
<div className="flex gap-4">
    <button  className="border-2 rounded-md  w-28 py-3 bg-white font-bold text-lg">Play</button>
    <button className="border-2 rounded-md w-28 py-3 bg-black text-white  font-bold text-lg">More Info</button>

</div>
</div>
    </>
  )
}

export default Title