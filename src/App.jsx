import { useEffect, useState } from "react";
import { MetaRouter } from "./Routes";

const modeLocal = JSON.parse(localStorage.getItem('darkMode'))
export function App() {
const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {

    if(modeLocal.darkMode){
      setDarkMode(modeLocal.darkMode)
    }
   
  }, [])
  

  const setMode = (mode) =>{
 
    setDarkMode(mode)
    localStorage.setItem('darkMode', JSON.stringify( {darkMode: mode}))

  }

  return (
    <main className={` ${darkMode ? 'dark' :''} h-screen flex flex-col`}>
      <nav className=" fixed md:static  bg-white dark:bg-slate-900 h-20 w-full  ">
        <div className="container  mx-auto px-4 sm:px-6 md:px-8  py-5 flex justify-between items-center text-2xl ">
          <span className="flex gap-1 container ">
            <span className="icon-[bx--code-block] text-indigo-600 text-3xl" />
            <div className="text-slate-700 font-semibold">
              <span className="dark:text-white">
                <span className="text-indigo-600">M</span>eta
              </span>
              <span className="dark:text-white">
                <span className="text-indigo-600">M</span>agic
              </span>
            </div>
          </span>
          <button onClick={() =>setMode(!darkMode)} className="mt-2">
            <span className={ ` ${darkMode ? 'icon-[clarity--sun-line]' : 'icon-[tdesign--mode-dark]'} bg-slate-500` } />
          </button>
        </div>
      </nav>
      <div className=" flex-1 ">
     
        <MetaRouter></MetaRouter>
      
      </div>
     
    </main>
  );
}
