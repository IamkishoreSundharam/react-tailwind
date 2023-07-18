import Add from "./Sec-child-components/add";
import Suggestions from "./Sec-child-components/people-sugg";
import Reading from "./Sec-child-components/reading";

const Second=()=>{

    return (
        <>
          <div>
             <Add />
          </div>
             
          <div>
            <Suggestions/>
          </div>

          <div>
             <Reading/>
          </div>
        </>
    )

}

export default Second;