import {CiSearch} from "react-icons/ci"

const Searchnav=()=>{
    return (
        <>
          {/* FIRST-NAV */}
          <section className="w-[95%] mt-10 mx-auto flex flex-col items-center xl:flex-row ">
              
              {/* searc-box */}
              <form>
                  <div className="text-gray-500 absolute">
                   <CiSearch className="absolute mt-3 ml-5 text-xl pointer-events-none"/>
                  </div>

                  <input className="text-sm border border-gray-400 rounded-3xl pr-16 pl-11 py-3" type="text" placeholder="Search...">
                  </input>
              </form>
               
               {/* TOPICS */}
               <p className="text-sm text-gray-600 font-semibold ml-0 mt-5 hidden xl:ml-10 xl:mt-0 sm:block">My topics:</p>
              
              {/* BUTTONS */}
               <ul className=" gap-3 ml-0 mt-5 xl:ml-5 xl:-mt-1 hidden sm:inline-flex">
                   <li className=" text-xs bg-[#F3F4F6]  rounded-3xl  cursor-pointer py-3 px-6 ">Design</li>
                   <li className=" text-xs bg-[#F3F4F6]  rounded-3xl py-3 px-6 cursor-pointer">Development</li>
                   <li className=" text-xs bg-[#F3F4F6]  rounded-3xl py-3 px-6 cursor-pointer">UX</li>
                   <li className=" text-xs bg-[#F3F4F6]  rounded-3xl py-3 px-6 cursor-pointer">Marketing</li>
               </ul>
             
          </section>
        </>
    )
}

export default Searchnav;