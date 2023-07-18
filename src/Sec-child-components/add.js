import notepad from '../Images/notepad.png'

const Add=()=>{
    return (
        <>
          <div className="flex w-[85%] mx-auto rounded-2xl bg-[#F7F7F7] p-7 pr-0 mt-10">
         <article className="basis-8/12 pl-3 ">
            <h3 className="text-lg font-semibold mt-1 leading-tight">Get unlimited access to everything on Reader</h3>

            <p className="text-xs text-gray-500 mt-2 mb-2">Plans starting at less than $1/week.</p>

            <button className="px-6 py-3 text-xs font-semibold rounded-xl bg-gray-200 mx-auto mt-4">Get Unlimited access</button>
         </article>

         <article className="basis-4/12 ">
            <img className="w-16 h-20 pl-1  mx-auto my-8" src={notepad} alt=""></img>
         </article>
       </div>
        </>
    )
}

export default Add;