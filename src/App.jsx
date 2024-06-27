import { useState } from "react";
import { MetaRouter } from "./Routes";
import { Link, NavLink } from "react-router-dom";
import logo from "./assets/img/logo.png";

const initialTheme =
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

const routes = [
  {
    name: "Generate",
    path: "/generate-page",
  },
  {
    name: "Preview",
    path: "/preview-page",
  },
];

export function App() {
  const [darkMode, setDarkMode] = useState(initialTheme);
  const changeTheme = () => {
    document.documentElement.classList.toggle("dark");
    document.querySelector("body").classList.toggle("dark:bg-slate-900");
    darkMode ? (localStorage.theme = "light") : (localStorage.theme = "dark");
    setDarkMode(!darkMode);
  };

  return (
    <>
      <nav className="fixed md:static border-b border-gray-200 dark:border-gray-800 z-40 bg-white dark:bg-slate-900 w-full box-border h-16 flex justify-center">
        <div className="container flex justify-between text-xl px-7">
          <Link to="/" className="flex gap-1 items-center my-4">
            <img src={logo} alt="Logo MTag" style={{ height: "33px" }} />
          </Link>
          <div className="flex items-center gap-5">
            <ul className="flex gap-3 text-base text-slate-700 font-medium dark:text-white">
              {routes.map((route, index) => (
                <li key={index}>
                  <NavLink
                    to={route.path}
                    className={({ isActive }) =>
                      isActive ? "text-indigo-500" : "hover:text-indigo-500"
                    }
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button onClick={() => changeTheme()} className="mt-1">
              <span
                className={`${
                  darkMode
                    ? "icon-[material-symbols--sunny-outline-rounded]"
                    : "icon-[tdesign--mode-dark]"
                } bg-slate-700 text-1xl dark:bg-slate-200`}
              />
            </button>
          </div>
        </div>
      </nav>
      <main className="flex-grow flex flex-col container mx-auto p-4 sm:px-6 md:px-8   ">
        <section className=" md:mt-0">
          <MetaRouter />
        </section>
      </main>

      <footer className="  dark:bg-[#0F172A] flex  w-full dark:border-t  dark:border-gray-800 h-12 ">
        <div className="w-full container mx-auto justify-center sm:justify-end flex px-7">
          <div className="flex  items-center justify-between w-full  ">
            <Link
              to="https://github.com/JeanCornelio"
              target="_blank"
              className="flex items-center gap-2 cursor-pointer dark:text-white "
            >
              <span className="icon-[bi--github]  " />
              <div className="flex items-center ">
                <span className="text-xs font-medium ">GitHub</span>
                <span className="icon-[material-symbols-light--arrow-outward-rounded] text-sm" />
              </div>
            </Link>
            <aside className="flex flex-wrap items-center justify-end w-full   sm:mb-0 dark:text-gray-400">
              <span className="text-xs  dark:text-white  font-medium flex items-center gap-1">
                <span className="icon-[tabler--heart] text-red-600 " />
                <span>Power By: Jean Cornelio</span>
              </span>
            </aside>
          </div>
        </div>
      </footer>
    </>
  );
}
