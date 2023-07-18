import chintan from '../Images/Chintan-bhatt-cropped46.jpg'
import lap from '../Images/lap-flower4.jpg'
import lap2 from '../Images/apple-lap4.jpg'
import gretha from '../Images/Gretha-img-cropped46.jpg'

const Articles=()=>{
    return(
        <>
          {/* FIRST-ARTICLE */}
          <section className="w-[92%] mx-auto mt-6 border-b pb-5">
             <article className="flex items-center ">
                <div>
                   <div className="rounded-full w-11 h-11  border">
                      <img className="rounded-full object-cover w-full h-full " src={chintan} alt="pic"></img>
                   </div>
                </div>

                <div className="ml-3">
                  <p className="text-sm font-semibold leading-tight">Chintan bhatt<span className="text-xs font-light ml-1 text-gray-400"> Apr 16,2022</span></p>
                  <p  className="text-sm text-gray-500 -mt-1">The founder & chief designer at YourUXTeam</p>
                </div>
         
             </article>
                 
             <article className="flex flex-col lg:flex-row">
                 <div className="basis-8/12 mt-4">
                    <h2 className="text-xl font-bold">8 Psychology-Based Design Hacks That Will Make You A Better UX Designer</h2>

                    <p className="text-sm text-gray-500 leading-tight mt-3">If the first thought crossed your mind when you read title of the article was "What does Psychology has to do with UX Design?" then, yes, that's what we thought too, now that we're on the same page, let's end this article here.Cheers!</p>

                    <ul className="flex gap-5 mt-4 font-light">
                        <li className="rounded-full text-xs py-2 px-4  bg-[#F3F4F6]">UX design</li>
                        <li className="rounded-full text-xs py-2 px-4  bg-[#F3F4F6]">4 min read</li>
                    </ul>
                 </div>
                 <div className="basis-1/12"></div>
                 <div className="rounded basis-3/12  order-first lg:order-last mx-auto">
                     <img src={lap} alt="image" className='rounded'></img>
                 </div>
             </article>
          </section>

          {/* SECOND-ARTICLE */}
          <section className="w-[92%] mx-auto mt-6 border-b pb-5">
             <article className="flex items-center ">
                <div>
                   <div className="rounded-full w-11 h-11 border">
                      <img className="rounded-full object-cover h-full w-full" src={gretha} alt="pic"></img>
                   </div>
                </div>

                <div className="ml-3">
                  <p className="text-sm font-semibold leading-tight">Gretha<span className="text-xs font-light ml-1 text-gray-400"> Apr 16,2022</span></p>
                  <p  className="text-sm text-gray-500 -mt-1">UI designer at Amazon</p>
                </div>
         
             </article>
                 
             <article className="flex flex-col lg:flex-row">
                 <div className="basis-8/12 mt-4">
                    <h2 className="text-xl font-bold">Zero UI : The End of Screen-based Interfaces and What It Meansfor Business</h2>

                    <p className="text-sm text-gray-500 leading-tight mt-3">Zero UI is a style that's been looming in the shadow for some time but is really staring to emerge now. The idea is easy to understand- the less the user has to think about the interface, the better and more natural it feels.</p>

                    <ul className="flex gap-5 mt-4 font-light">
                        <li className="rounded-full text-xs py-2 px-4  bg-[#F3F4F6]">UX design</li>
                        <li className="rounded-full text-xs py-2 px-4  bg-[#F3F4F6]">4 min read</li>
                    </ul>
                 </div>
                 <div className="basis-1/12"></div>
                 <div className="basis-3/12 rounded order-first lg:order-last mx-auto">
                     <img src={lap2} alt="image" className='rounded'></img>
                 </div>
             </article>
          </section>

        </>
    )
}

export default Articles;