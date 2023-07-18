import {BiChevronDown} from "react-icons/bi"

const Secnav=()=>{
    return(

        <>
             <section className="w-[94%] flex justify-between items-center mx-auto mt-12 px-2 border-b pb-5 ">

               <h3 className="text-lg font-semibold mb-1">Articles</h3>

               <div className="border border-gray-300 rounded-3xl py-2.5 pl-6 pr-4 flex gap-1">
                  <p className="text-xs font-semibold">Following</p>

                  <div>
                    <BiChevronDown/>
                  </div>

               </div>
             </section>     
        </>
    )
}

export default Secnav;