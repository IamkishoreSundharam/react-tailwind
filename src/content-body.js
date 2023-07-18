import First from "./first-child"
import Second from "./second-child"

const Content=()=>{
    return (
        <>
          <section className="flex flex-col md:flex-row">
             <div className="basis-8/12 border-r">
             <First />
             </div>
             
             <div className=" basis-4/12">
               <Second />
             </div>

          </section>
        </>
    )
}

export default Content;