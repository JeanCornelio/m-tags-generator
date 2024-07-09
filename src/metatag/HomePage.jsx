import { Link, useLocation } from "react-router-dom";
import { Button } from "../components";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";
export const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // inizializar flowbite
    initFlowbite();
  }, [location]);

  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5  [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#109_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#0F172A_40%,#104_100%)]"></div>
      <div className="flex flex-col justify-between gap-4 mt-28">
        <div className=" w-full  gap-10 flex flex-col items-center">
          <p className=" mb-4 text-4xl font-bold  text-slate-700 lg:font-extrabold lg:text-6xl lg:leading-none dark:text-white text-center xl:px-36 lg:mb-7 ">
            Generate <span className="text-indigo-600">Meta Tags </span>and <span className="text-indigo-600" >Open Graph </span> easy
            and faster optimize your{" "}
            <span className="text-indigo-600">SEO</span> instantly
          </p>
          <p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 text-center lg:text-xl xl:px-60 sm:w-3/4">
            Use our free tool to create custom meta tags and Open Graph tags in seconds and improve
            your website's visibility on search engines
          </p>

          <div className="gap-4 flex flex-wrap w-full  justify-center">
            <Link to="/preview">
              <Button
                title="Open Graph"
                icon="icon-[material-symbols--view-cozy-outline]"
                className="bg-indigo-600 p-3 md:px-10  hover:bg-indigo-700 text-white"
              />
            </Link>
            <Link to="/generate">
              <Button
                title="Generate"
                icon="icon-[ph--magic-wand]"
                className=" border border-indigo-600   p-3 md:px-10  text-indigo-600 dark:bg-slate-800 dark:border-slate-600 hover:dark:bg-indigo-600 dark:text-white hover:bg-indigo-600 hover:text-white"
              />
            </Link>
          </div>
        </div>
       
      </div>
    
    </div>
  );
};
