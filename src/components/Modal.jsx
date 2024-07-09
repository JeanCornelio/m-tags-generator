import ButtonCopy from "./ButtonCopy";

export const Modal = ({ metaTags, showImageMessage = false }) => {
  return (
    <>
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden  h-full backdrop-blur-2xl   overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full"
      >
        <div className="relative p-4 w-full max-w-3xl max-h-full">
          <div className="relative bg-white rounded-md shadow dark:bg-gray-700 p-4">
            <div className="flex items-center justify-center gap-2 p-4 md:p-5  rounded-t dark:border-gray-600 ">
              <span className="icon-[gis--tags] text-1xl md:text-2xl dark:text-white" />
              <h3 className="text-1xl md:text-2xl font-normal text-gray-900 dark:text-white ">
                Yours Meta Tags
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <span className="icon-[iconamoon--close] text-2xl" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {showImageMessage && (
              <div
                className=" flex gap-3 items-center bg-white  dark:text-white border dark:bg-gray-700 dark:border-gray-800 rounded-md p-4 mb-2
    "
              >
                <span className="icon-[formkit--warning] text-yellow-400 text-2xl" />

                <div>
                  <p className="uppercase font-semibold"></p>
                  <p className="text-sm md:text-base">
                    <strong>Warning:</strong> Make sure to upload your image to
                    your CMS or hosting service.
                  </p>
                </div>
              </div>
            )}
            <div className="p-4 md:p-5 space-y-4 bg-indigo-200 rounded-md overflow-auto whitespace-nowrap">
              <pre>
                <code className="text-indigo-900">{metaTags}</code>
              </pre>
            </div>
            <div className="flex items-center justify-between mt-3 md:py-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <div>
                <span className="text-dark dark:text-white">
                  Copy the code into your website{" "}
                </span>
                <span className="text-indigo-800 font-semibold dark:text-indigo-400">
                  {"<head>"}
                </span>
              </div>
              <ButtonCopy textToCopy={metaTags} name="asdasdsd" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
