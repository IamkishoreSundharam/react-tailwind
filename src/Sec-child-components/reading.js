import lap2 from "../Images/apple-lap4.jpg"
import small from '../Images/cropped-girl-img24.jpg'
const Reading=()=>{
    return (
        <>
        <section className="w-[88%]  ml-9 mt-10 ">
          <h3 className="text-xl font-semibold  ">My reading list</h3>
          <div className="mt-3">
             
             {/* FIRST-ITEM */}
             <article className="flex mb-3 ">

                <div className="basis-5/12 pt-4 ">

                   <img className="object-cover rounded-lg  h-32" src={lap2} alt="image"></img>

                </div>

                <div className="basis-7/12 pl-3 mt-2">

                   <h4 className="leading-tight font-semibold text-md">A Beginner's Guide to White Balance in Photography</h4>
                   <p className="text-xs text-gray-500 leading-tight mt-2 pr-3">Along with shutter speed, aperture, and ISO,white balance is one of the most</p>

                   <div className="mt-4 flex items-center">
                      <div className="w-6 h-6 rounded-full">

                        <img className="mr-4 w-full h-full object-cover border border-black rounded-full" src={small} alt=""></img>

                      </div>
                      <div className="ml-2">
                        <p className="text-xs font-light text-gray-500">Irene au <span>Apr 16,2022</span></p>
                      </div>
                   </div>
                </div>

             </article>
  
              {/* SECOND-ITEM */}
             <article className="flex mb-3 ">

              <div className="basis-5/12 pt-4 ">

                 <img className="object-cover rounded-lg  h-32" src={lap2} alt="image"></img>

              </div>

              <div className="basis-7/12 pl-3 mt-2">

                 <h4 className="leading-tight font-semibold text-md">A Beginner's Guide to White Balance in Photography</h4>
                 <p className="text-xs text-gray-500 leading-tight mt-2 pr-3">Along with shutter speed, aperture, and ISO,white balance is one of the most</p>

                 <div className="mt-4 flex items-center">
                    <div className="w-6 h-6 rounded-full">

                      <img className="mr-4 w-full h-full object-cover border border-black rounded-full" src={small} alt=""></img>

                    </div>
                    <div className="ml-2">
                      <p className="text-xs font-light text-gray-500">Irene au <span>Apr 16,2022</span></p>
                    </div>
                 </div>
              </div>

           </article>
             
          </div>
       </section>
        </>
    )
}

export default Reading;