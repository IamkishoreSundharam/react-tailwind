import chintan from '../Images/Chintan-bhatt-cropped46.jpg';
import yael from '../Images/Yael Levey-cropped46.jpg';
import profile from '../Images/profile-pic-44.jpg'
const Suggestions=()=>{

    return (
        <>
          <section className="w-[88%] mx-auto mt-10 lg:ml-9">
              <h3 className="text-lg font-semibold mt-1">People you might be interested</h3>

         <div className="mt-3 ">
              
              {/* FIRST-SUGGESTIONS */}
             <article className="flex justify-between md:flex items-center mb-2">

                <div className="flex">

                  <div className="w-12 h-12 rounded-full my-auto">
                    <img className="w-full h-full object-cover rounded-full border" src={chintan} alt=""></img>
                  </div>

                  <div className="ml-3 w-44 ">
                    <h4 className="lg font-semibold">Chintan bhatt</h4>
                    <p className="text-xs text-gray-500 font-semibold">The founder & chief dsigner at YourUXTeam</p>
                  </div>

                </div>

                <div className="ml-14 ">
                   <button className="text-xs font-semibold border rounded-full px-6 py-3">Follow</button>
                </div>

             </article>

             {/* SECOND-SUGGESTION */}
             <article className="flex justify-between md:flex items-center mb-2">

               <div className="flex">

                  <div className="w-12 h-12 rounded-full my-auto">
                     <img className="w-full h-full object-cover rounded-full border" src={yael} alt=""></img>
                  </div>

                  <div className="ml-3 w-44 ">
                    <h4 className="lg font-semibold">Yael Levey</h4>
                    <p className="text-xs text-gray-500 font-semibold">Creactive Directer for BBC Weather</p>
                  </div>

               </div>

               <div className="ml-14 ">
                 <button className="text-xs font-semibold border rounded-full px-6 py-3">Follow</button>
               </div>

             </article>

          {/* THIRD-SUGGETIONS */}
          <article className="flex justify-between md:flex items-center mb-2">

            <div className="flex">

               <div className="w-12 h-12 rounded-full my-auto">
                  <img className="w-full h-full object-cover rounded-full border" src={profile} alt=""></img>
               </div>

               <div className="ml-3 w-44 ">
                 <h4 className="lg font-semibold">Irene au</h4>
                 <p className="text-xs text-gray-500 font-semibold">The former head of UX and Design at Google</p>
               </div>

            </div>

            <div className="ml-14 ">
              <button className="text-xs font-semibold border rounded-full px-6 py-3">Follow</button>
            </div>

          </article>
           
         
         </div>

       </section>
        </>
    )
}

export default Suggestions;