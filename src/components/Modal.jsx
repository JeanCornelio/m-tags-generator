import { useEffect, useState } from "react";
import { Button } from "./Button";

export const Modal = ({...props}) => {

  const [buttonName, setButtonName] = useState("Copy");
  const [copied, setCopied] = useState(false);

  let metaTags =
    `<meta name="title" content="${props.siteTitle}">\n` +
    `<meta name="description" content="${props.siteDescription}">\n` +
    `<meta name="robots" content="${
      props.siteRobotsIndex ? "index" : "noindex"
    }, ${props.siteRobotsLinks ? "follow" : "nofollow"}">\n` +
    `<meta http-equiv="Content-Type" content="text/html; charset=${props.siteTypeContent}">\n` +
    `<meta name="language" content="${props.siteLanguage}">\n` +
    `${
      props.siteAuthor ? `<meta name="author" content="${props.siteAuthor}` : ""
    }">`;

    console.log(props)

  const onCopy = async () => {

    try {
     await navigator.clipboard.writeText(metaTags)
     setCopied(true);
    
    } catch (error) {
      console.error(error.message);
    }
   
  };

  useEffect(() => {
    let timer;
    if (copied) {
      setButtonName("Copied!");
      timer = setTimeout(() => {
        setButtonName("Copy");
        setCopied(false);
      }, 900);
    }

    return () => clearTimeout(timer);
  }, [copied]);
  

  return (
    <>
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden bg-gradient-to-t from-indigo-500  dark:bg-gradient-to-t dark:from-indigo-400 h-full  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-md shadow dark:bg-gray-700 p-4">
            <div className="flex items-center justify-center gap-2 p-4 md:p-5  rounded-t dark:border-gray-600 ">
              <span className="icon-[solar--code-file-linear] text-1xl md:text-2xl dark:text-white" />
              <h3 className="text-1xl md:text-2xl font-normal text-gray-900 dark:text-white ">
                Yours Meta Tags
              </h3>
              <button
                type="button"
               
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4 bg-indigo-200 rounded-md overflow-auto whitespace-nowrap">
              <pre>
                <code className="text-indigo-900">{metaTags}</code>
              </pre>
            </div>
            <div className="flex items-center justify-between mt-3 md:py-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <div>
                <span className="text-dark dark:text-white">Copy the code into your website </span>
                <span className="text-indigo-800 font-semibold dark:text-indigo-400">
                  {"<head>"}
                </span>
              </div>
              <Button
                title={buttonName}
                icon="icon-[ph--copy-simple-light] text-2xl"
                onClick={() => onCopy()}
                className=" border p-4 border-indigo-600 py-1 text-sm text-indigo-600 dark:bg-slate-800 dark:border-slate-600 hover:dark:bg-indigo-600 dark:text-white hover:bg-indigo-600 hover:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
