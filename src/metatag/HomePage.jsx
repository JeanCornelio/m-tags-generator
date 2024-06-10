export const HomePage = () => {
  return (
    <>
      <main className="h-screen flex flex-col">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#109_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#0F172A_40%,#104_100%)]"></div>
        <nav className="w-full  bg-white dark:bg-slate-900 h-20 flex">
          <div className="container  p-5 mx-auto flex justify-between items-center text-2xl ">
            <span className="flex gap-1">
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
            <button className="mt-2">
              <span className="icon-[tdesign--mode-dark]  bg-slate-500 " />
            </button>
          </div>
        </nav>
        <article className="container  mx-auto px-4 sm:px-6 md:px-8   flex-1 ">
          <div className="flex justify-between gap-4 mt-28">
            <div className=" w-full  gap-10 flex flex-col items-center">
              <p className="mb-4 text-4xl font-bold tracking-tight text-slate-700 lg:font-extrabold lg:text-6xl lg:leading-none dark:text-white text-center xl:px-36 lg:mb-7">
                Generate <span className="text-indigo-600">Meta Tags </span>{" "}
                easy and faster optimize your{" "}
                <span className="text-indigo-600">SEO</span> instantly
              </p>
              <p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 text-center lg:text-xl xl:px-60 w-3/4">
                Use our free tool to create custom meta tags in seconds and
                improve your website's visibility on search engines
              </p>

              <div className="gap-4 flex w-full  justify-center">
                <button className="bg-indigo-600 p-3 rounded-md text-white  text-md font-semibold hover:bg-indigo-700">
                  Generate tags
                </button>
                <button className="border border-indigo-600 p-3 rounded-md text-indigo-600 text-md font-semibold dark:bg-slate-800 dark:border-slate-600 hover:dark:bg-indigo-600 dark:text-white hover:bg-indigo-600 hover:text-white">
                  Validate tags
                </button>
              </div>
            </div>
            {/*  <div className="w-2/4">
              <h1>Imagen</h1>
            </div> */}
          </div>
        </article>
      </main>
    </>
  );
};
