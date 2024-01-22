import React, { createContext, useState } from "react";

export const MyContext = createContext();

function Context({children}) {
  let [theme, setTheme] = useState(false);

  return(
    <>
    <MyContext.Provider value={{theme , setTheme}}>
        {children}
    </MyContext.Provider>
    </>
  )
}

export default Context;