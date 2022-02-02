import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
 
  let k=0;
  return <nav>{/* display an <a> tag for each link here */
    links.map(
      (e)=>{ 
        return(
            <a key={e} href={'#'+e}>{e}</a>
        )
      }
    )
  
  }</nav>;
}

export default NavBar;
