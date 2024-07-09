import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { useState } from "react";

const initialTheme =
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

const routes = [
  {
    name: "Preview",
    path: "/preview",
  },
  {
    name: "Generate",
    path: "/generate",
  },
 
];

export const Nav = () => {
  const [darkMode, setDarkMode] = useState(initialTheme);
  const changeTheme = () => {
    document.documentElement.classList.toggle("dark");
    document.querySelector("body").classList.toggle("dark:bg-slate-900");
    darkMode ? (localStorage.theme = "light") : (localStorage.theme = "dark");
    setDarkMode(!darkMode);
  };

  return (
    <nav className="fixed md:static border-b border-gray-200 dark:border-gray-800 z-40 bg-white dark:bg-slate-900 w-full box-border h-16 flex justify-center">
      <div className="container flex justify-between text-xl px-7">
        <Link to="/" className="flex gap-1 items-center my-4">
          <img src={logo} alt="Logo MTag" className="h-[20px]  md:h-[33px]" />
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
  );
};
