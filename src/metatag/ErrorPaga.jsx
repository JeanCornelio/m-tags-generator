import { Link } from "react-router-dom";
import { Button } from "../components";

export const ErrorPage = () => {
  return (
    <div className="flex justify-center h-screen items-center flex-col gap-6 dark:text-white">
      <h1 className="text-md md:text-9xl font-bold ">Oops!</h1>
      <h2 className="text-md md:text-2xl "> 404 - PAGE NOT FOUND</h2>
      <Link to="/">
        <Button
          title="Go to homepage"
          icon="icon-[icon-park-outline--back]"
          className="bg-indigo-600 p-3 md:px-10  hover:bg-indigo-700 text-white"
        ></Button>
      </Link>
    </div>
  );
};
