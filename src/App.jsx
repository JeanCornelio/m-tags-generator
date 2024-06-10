import { MetaRouter } from "./Routes";


export function App() {

  return (
    <main className="h-screen flex flex-col ">
      <nav className="w-full sticky bg-white dark:bg-slate-900 h-20 flex">
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
      <div className="container  mx-auto px-4 sm:px-6 md:px-8   flex-1  ">
        <MetaRouter></MetaRouter>
      </div>
    </main>
  );
}
