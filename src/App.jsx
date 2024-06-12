import { useEffect, useState } from "react";
import { MetaRouter } from "./Routes";

export function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ){
      document.documentElement.classList.add("dark");
      document.querySelector("body").classList.add("dark:bg-slate-900");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      document.querySelector("body").classList.remove("dark:bg-slate-900");
      
      setDarkMode(false);
    }

  }, []);

  const changeTheme = () => {
    document.documentElement.classList.toggle("dark");
    document.querySelector("body").classList.toggle("dark:bg-slate-900");
    darkMode  ? localStorage.theme = "light":   localStorage.theme = "dark" 
    setDarkMode(!darkMode);
  };

  /*  */

  return (
    <>
      <nav className=" fixed md:static bg-white dark:bg-slate-900 w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-8  py-5 flex justify-between items-center text-xl md:text-2xl ">
          <span className="flex gap-1 container ">
            <span className="icon-[bx--code-block] text-indigo-600 text-2xl   md:text-3xl" />
            <div className="text-slate-700 font-semibold">
              <span className="dark:text-white">
                <span className="text-indigo-600">M</span>eta
              </span>
              <span className="dark:text-white">
                <span className="text-indigo-600">M</span>agic
              </span>
            </div>
          </span>
          <button onClick={() => changeTheme()} className="mt-2">
            <span
              className={` ${
                darkMode
                  ? "icon-[material-symbols--sunny-outline-rounded]"
                  : "icon-[tdesign--mode-dark]"
              } bg-slate-500`}
            />
          </button>
        </div>
      </nav>
      <main className="flex flex-col container mx-auto p-4 sm:px-6  md:px-8 ">
        <section className=" flex-1 mt-16 md:mt-0">
          <MetaRouter></MetaRouter>
        </section>
      </main>
    </>
  );
}
