import {  useState } from "react";
import { MetaRouter } from "./Routes";
import { Link, NavLink } from "react-router-dom";

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
      <nav className=" fixed md:static border-b border-gray-200 dark:border-gray-800 z-40 bg-white dark:bg-slate-900 w-full box-border h-16 flex justify-center ">
        <div className=" container flex justify-between  text-xl  px-7 ">
          <Link to="/" className="flex gap-1 items-center my-4">
            <span className="icon-[solar--code-file-bold-duotone] text-indigo-600 text-xl " />
            <div className="text-slate-700 font-bold">
              <span className="dark:text-white">
                <span className="text-indigo-600">M</span>eta
              </span>
              <span className="dark:text-white">
                <span className="text-indigo-600">M</span>agic
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-5">
            <ul className="flex gap-3 text-base text-slate-700 font-medium  dark:text-white">
              {routes.map((route, index) => (
                <li key={index}>
                  <NavLink
                    to={route.path}
                    className={({ isActive }) =>
                      isActive ? "text-indigo-600" : "hover:text-indigo-600"
                    }
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <button onClick={() => changeTheme()} className="mt-1">
              <span
                className={` ${
                  darkMode
                    ? "icon-[material-symbols--sunny-outline-rounded] "
                    : "icon-[tdesign--mode-dark] "
                } bg-slate-700 text-1xl  dark:bg-slate-200`}
              />
            </button>
          </div>
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
