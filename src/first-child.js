import Searchnav from "./First-child-component/search-nav";
import Secnav from "./First-child-component/sec-nav"
import Articles from "./First-child-component/articles";

const First=()=>{

    return (
        <>
          <div className="first-child ">
            <Searchnav/>
            <Secnav/>
            <Articles/>
          </div>
        </>
    )

}

export default First;