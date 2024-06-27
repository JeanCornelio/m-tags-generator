import { useState } from "react";
import { Button, Modal, Title, Dropzone } from "../components";
import { getSiteInformation, dataFake } from "../service";

import img from "../assets/img/tailwindtest.jpg";
export const PreviewPage = () => {
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);

  const getData = async () => {
    //let res = await getSiteInformation(link)
    let res = dataFake();

    console.log(res);
  };

  const onDropzone = (image) => {
    setImage(image);
  };

  const submit = (e) => {
    e.preventDefault();
    if (link.trim().length > 0) getData();
  };

  return (
    <div className="py-20 md:py-5">
      <Title
        title="Preview"
        subtitle="You can experment with your content preview"
      />
      <article className="flex flex-col lg:flex-row gap-10 relative ">
        <section className="w-full lg:w-2/6   ">
          <div className="flex flex-col gap-3 sticky top-0 ">
            <form onSubmit={(e) => submit(e)}>
              <h2 className="mb-8 lg:mt-4 font-semibold  text-gray-600 dark:text-white">
                {" "}
                Meta Data
              </h2>
              <label
                htmlFor="default-search"
                className="block mb-2 text-sm font-semibold sr-only text-gray-600 dark:text-white"
              >
                Parse Data
              </label>
              <div className=" grid grid-cols-1 lg:grid-cols-3 gap-2">
                <div className="relative col-span-3 lg:col-span-2">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className=" w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                    placeholder="Search and parse meta data"
                  />
                </div>
                <div className="col-span-3 lg:col-span-1">
                  <Button
                    type="submit"
                    title="Parse"
                    className=" text-sm  w-full bg-indigo-600  hover:bg-indigo-700 text-white p-2.5"
                  >
                    Parsear
                    {/* Loanding... */}
                  </Button>
                </div>
              </div>
            </form>
            <form className="flex flex-col gap-3" onSubmit={(e) => submit(e)}>
              <Dropzone onDropzone={onDropzone} imgDefault={img} />
              <div>
                <label
                  htmlFor="siteTitle"
                  className="block mb-2 text-sm font-semibold text-gray-600 dark:text-white"
                >
                  Site title
                </label>
                <input
                  type="text"
                  name="siteTitle"
                  id="siteTitle"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="Your site title"
                />
              </div>
              <div className="">
                <label
                  htmlFor="siteDescription"
                  className="block mb-2 text-sm font-semibold text-gray-600 dark:text-white"
                >
                  Site Description
                </label>
                <textarea
                  type="text"
                  id="siteDescription"
                  name="siteDescription"
                  rows="4"
                  placeholder="Your site description"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                ></textarea>
              </div>
              <div className="col-span-2 md:col-span-2">
                <button
                  data-modal-target="default-modal"
                  data-modal-toggle="default-modal"
                  type="submit"
                  className="p-3 w-full rounded-md cursor-pointer text-md font-semibold bg-indigo-600 enabled:hover:bg-indigo-700 text-white mt-3 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center gap-1 justify-center">
                    <span className="icon-[grommet-icons--code] text-2xl" />{" "}
                    Generate Code
                  </div>
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="w-full md:w-4/6 ">
          <h2 className="mb-8 lg:mt-4 font-semibold  text-gray-600 dark:text-white">
            Preview
          </h2>
          <div className="flex flex-col gap-y-10  dark:text-[#bdc1c6] text-[#4d5156]">
            <div className="font-google">
              <h3 className="font-semibold text-indigo-400 mb-3">Google</h3>
              <article className="w-full md:w-4/5 group">
                <header className="flex gap-3 items-center mb-3 cursor-pointer group ">
                  <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                  <div>
                    <span className="text-[14px] block ">couplemedia.com</span>{" "}
                    {/* Link */}
                    <div className="flex items-center gap-2">
                      <span className="text-[12px] block ">
                        https://couplemedia.com
                      </span>{" "}
                      {/* Link literal */}
                      <span className="icon-[material-symbols--more-vert] text-gray-500"></span>
                    </div>
                  </div>
                </header>
                <h3 className=" text-[#99c3ff] hover:underline underline-offset-1 cursor-pointer text-[20px] inline-block ">
                  Couple Media
                </h3>{" "}
                {/* Title */}
                <p className="leading-[1.58] text-[14px] ">
                  Expertos en Publicidad, Marketing Digital, Diseño de página
                  Web, manejo de redes sociales, creación de marca / Branding y
                  diseño gráfico en general.
                </p>
                {/* description */}
              </article>
            </div>

            <div className="  h-[370px]">
              <h3 className="font-semibold text-indigo-400 mb-3">Facebook</h3>
              <article className=" w-full md:w-[500px] group relative hover:opacity-90">
                <header
                  className="w-full md:w-[500px] h-[261px]  md:rounded-md bg-cover bg-no-repeat bg-center border dark:border-gray-800"
                  style={{
                    backgroundImage: `url(${image || img})`,
                  }}
                ></header>
                <footer className="border border-gray-200 py-2 px-4 md:rounded-bl-md md:rounded-br-md absolute -bottom-[4.2rem] bg-white dark:bg-slate-900 dark:border-gray-800">
                  <span className=" block uppercase text-[#b0b3b8] text-[.7800rem] ">
                    tailwindcss.com
                  </span>{" "}
                  {/* Link */}
                  <h3 className="text[1.0625rem] font-semibold leading-[1.1] mt-1">
                    Tailwind CSS - Rapidly build modern websites without ever
                    leaving your HTML.
                  </h3>{" "}
                  {/* Title */}
                </footer>
              </article>
            </div>
            <div className=" h-[320px]">
              <h3 className="font-semibold text-indigo-400 mb-3">Twitter</h3>
              <article className=" w-full md:w-[500px]  relative ">
                <header
                  className="w-full md:w-[500px] h-[261px]  rounded-2xl   bg-cover bg-no-repeat bg-center border dark:border-gray-800"
                  style={{
                    backgroundImage: `url(${image || img})`,
                  }}
                ></header>
                <footer>
                  <span className="text-gray-500 text-[13px]">
                    De tailwindcss.com
                  </span>
                </footer>

                <div className=" bg-black opacity-[0.80] rounded text-[13px] md:w-[465px] px-1 pb-0.5  absolute bottom-[2.3rem] right-[12px] left-[12px] ">
                  <p className="truncate text-white  ">
                    Tailwind CSS - Rapidly build modern websites without ever
                    leaving your HTML.
                  </p>
                </div>
              </article>
            </div>
            <div className="">
              <h3 className="font-semibold text-indigo-400 mb-3">Linkedin</h3>
              <article className="  w-full  xl:w-[700px] flex gap-2 border px-4 py-3 md:rounded-xl bg-[#edf3f8]  items-center">
                <header
                  className="w-[128px] h-[72px]   bg-cover bg-no-repeat bg-center "
                  style={{
                    backgroundImage: `url(${image || img})`,
                  }}
                ></header>
                <footer className="flex flex-col gap-3">
                  <p className="text-sm text-gray-600  font-bold cursor-pointer">
                    Tailwind CSS - Rapidly build modern websites without ever
                    leaving your HTML.
                  </p>
                  <span className="text-gray-500 text-[12px] cursor-pointer">
                    tailwindcss.com
                  </span>
                </footer>
              </article>
            </div>
            <div className="">
              <h3 className="font-semibold text-indigo-400 mb-3">Slack</h3>
              <article className="  w-full  xl:w-[550px] flex flex-row-reverse gap-3">
                <div>
                  <header className="flex flex-col mb-2 ">
                    <div className="flex gap-2 items-center">
                      <img className="bg-gray-300 h-[16px] w-[16px] rounded-sm" />
                      <span className="font-bold dark:text-[#D1D2D3]">
                        Tailwind CSS
                      </span>
                    </div>
                    <p className=" text-[#1D9BD1] font-bold cursor-pointer hover:underline underline-offset-1  leading-[1.46667rem]">
                      Tailwind CSS - Rapidly build modern websites without ever
                      leaving your HTML.
                    </p>
                    <p className=" text-gray-600 dark:text-[#D1D2D3]  leading-[1.46667rem]">
                      Tailwind CSS is a utility-first CSS framework for rapidly
                      building modern websites without ever leaving your HTML.
                    </p>
                  </header>
                  <div
                    className="w-full sm:w-[360px] h-[180px] bg-cover bg-no-repeat bg-center rounded-[8px] cursor-zoom-in border dark:border-gray-800 "
                    style={{
                      backgroundImage: `url(${image || img})`,
                    }}
                  ></div>
                </div>

                <div className=" dark:border-[#35373B] border border-x-[2.3px]  rounded-md">
                  {" "}
                </div>
              </article>
            </div>
          </div>
        </section>
      </article>
      <Modal />
    </div>
  );
};
