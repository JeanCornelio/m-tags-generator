import { Link } from "react-router-dom";
import { Button } from "../components";

export const HomePage = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#109_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#0F172A_40%,#104_100%)]"></div>
      <div className="flex justify-between gap-4 mt-28">
        <div className=" w-full  gap-10 flex flex-col items-center">
          <p className="mb-4 text-4xl font-bold tracking-tight text-slate-700 lg:font-extrabold lg:text-6xl lg:leading-none dark:text-white text-center xl:px-36 lg:mb-7 ">
            Generate <span className="text-indigo-600">Meta Tags </span> easy
            and faster optimize your{" "}
            <span className="text-indigo-600">SEO</span> instantly
          </p>
          <p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 text-center lg:text-xl xl:px-60 w-3/4">
            Use our free tool to create custom meta tags in seconds and improve
            your website's visibility on search engines
          </p>

          <div className="gap-4 flex w-full  justify-center">
            <Link to="/generate-page">
              <Button
                title="Generate tags"
                className="bg-indigo-600  hover:bg-indigo-700 text-white"
              />
            </Link>
            <Link to="/validate-page">
              <Button
                title="Validate tags"
                className=" border border-indigo-600 text-indigo-600 dark:bg-slate-800 dark:border-slate-600 hover:dark:bg-indigo-600 dark:text-white hover:bg-indigo-600 hover:text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
