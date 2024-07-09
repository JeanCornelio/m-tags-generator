import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="  dark:bg-[#0F172A] flex  w-full dark:border-t  dark:border-gray-800 h-12 ">
      <div className="w-full container mx-auto justify-center sm:justify-end flex px-7">
        <div className="flex  items-center justify-between w-full py-4  ">
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
  );
}

export default Footer;
