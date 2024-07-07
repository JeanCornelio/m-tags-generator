import { useFormik } from "formik";
import { Modal, Title } from "../components";
import { useState } from "react";

export const GeneratePage = () => {
  const [metaTags, setMetaTags] = useState("");

  const validate = (values) => {
    const errors = {};
    if (!values.siteTitle) {
      errors.siteTitle = "Required";
    }
    if (!values.siteDescription) {
      errors.siteDescription = "Required";
    }
    if (!values.siteKeywords) {
      errors.siteKeywords = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      siteTitle: "",
      siteDescription: "",
      siteKeywords: "",
      siteRobotsIndex: true,
      siteRobotsLinks: true,
      siteTypeContent: "utf-8",
      siteLanguage: "en",
      siteAuthor: "",
    },
    validate,
    onSubmit: (tags) => {
      const {
        siteTitle,
        siteDescription,
        siteKeywords,
        siteLanguage,
        siteRobotsIndex,
        siteRobotsLinks,
        siteTypeContent,
        siteAuthor,
      } = tags;

      let metaTags =
        `<!-- Basic Meta Tags -->\n`+
        `<meta name="title" content="${siteTitle}" />\n` +
        `<meta name="description" content="${siteDescription}" />\n` +
        `<meta name="keywords" content="${siteKeywords}" />\n` +
        `<meta name="robots" content="${
          siteRobotsIndex ? "index" : "noindex"
        }, ${siteRobotsLinks ? "follow" : "nofollow"}" />\n` +
        `<meta http-equiv="Content-Type" content="text/html; charset=${siteTypeContent}" />\n` +
        `<meta name="language" content="${siteLanguage}" />\n` +
        `${siteAuthor ? `<meta name="author" content="${siteAuthor}" />` : ""}\n`+
        `<!-- Meta Tags Generated with https://Mtag.com -->\n`;
        console.log(metaTags)
      setMetaTags(metaTags);
    },
  });

  return (
    <div className="py-20 md:py-5">
      <Title
        title="Generate"
        subtitle="Complete the form and get yours meta tags."
      ></Title>
      <article className="flex w-full gap-3">
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form Fields */}
            <div className=" col-span-2">
              <label
                htmlFor="siteTitle"
                className="block mb-2 text-sm font-semibold text-gray-600 dark:text-white"
              >
                Site title
                <span
                  className={`mt-2 ms-1 text-sm ${
                    formik.values.siteTitle.length > 70
                      ? "text-red-500"
                      : "text-gray-600 dark:text-white "
                  }`}
                >
                  (Characters left: {70 - formik.values.siteTitle.length})
                </span>
                {formik.errors.siteTitle ? (
                  <span className="ms-1 text-red-500">
                    {formik.errors.siteTitle}
                  </span>
                ) : null}
                <span className="text-red-500 ms-1">*</span>
              </label>
              <input
                type="text"
                name="siteTitle"
                id="siteTitle"
                onChange={formik.handleChange}
                value={formik.values.siteTitle}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                placeholder="Site title must be within 70 Characters"
              />
            </div>
            <div className=" col-span-2 md:col-span-1 ">
              <label
                htmlFor="siteDescription"
                className="block mb-2 text-sm font-semibold text-gray-600 dark:text-white"
              >
                Description
                <span
                  className={`mt-2 ms-1 text-sm ${
                    formik.values.siteDescription.length > 150
                      ? "text-red-500"
                      : "text-gray-600 dark:text-white "
                  }  `}
                >
                  (Characters left: {150 - formik.values.siteDescription.length}
                  )
                </span>
                {formik.errors.siteDescription ? (
                  <span className="ms-1 text-red-500">
                    {formik.errors.siteDescription}
                  </span>
                ) : null}
                <span className="text-red-500 ms-1">*</span>
              </label>
              <textarea
                type="text"
                id="siteDescription"
                name="siteDescription"
                rows="4"
                onChange={formik.handleChange}
                value={formik.values.siteDescription}
                placeholder="Description must be within 150 Characters"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              ></textarea>
            </div>
            <div className=" col-span-2 md:col-span-1">
              <label
                htmlFor="siteKeywords"
                className="block mb-2 text-sm font-semibold text-gray-600 dark:text-white "
              >
                Site Keywords
                {formik.errors.siteKeywords ? (
                  <span className="ms-1 text-red-500">
                    {formik.errors.siteKeywords}
                  </span>
                ) : null}
                <span className="text-red-500 ms-1">*</span>
              </label>
              <textarea
                type="text"
                id="siteKeywords"
                name="siteKeywords"
                rows="4"
                onChange={formik.handleChange}
                value={formik.values.siteKeywords}
                placeholder="Separate with commas (keyword1, keyword2, keyword3 )"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              ></textarea>
            </div>
            <div className="  col-span-2 md:col-span-1">
              <label
                htmlFor="siteRobotsIndex"
                className="block mb-2 text-sm font-semibold text-gray-600 dark:text-white "
              >
                Allow robots to index your website?
              </label>

              <select
                id="siteRobotsIndex"
                name="siteRobotsIndex"
                onChange={(e) =>
                  formik.setFieldValue(
                    "siteRobotsIndex",
                    e.target.value === "true"
                  )
                }
                value={formik.values.siteRobotsIndex}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>

            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="siteRobotsLinks"
                className="block mb-2 text-sm font-semibold text-gray-600 dark:text-white "
              >
                Allow robots to follow all links?
              </label>

              <select
                id="siteRobotsLinks"
                name="siteRobotsLinks"
                onChange={(e) =>
                  formik.setFieldValue(
                    "siteRobotsLinks",
                    e.target.value === "true"
                  )
                }
                value={formik.values.siteRobotsLinks}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className=" col-span-2 md:col-span-1">
              <label
                htmlFor="siteTypeContent"
                className="block mb-2 text-sm font-semibold text-gray-600 dark:text-white "
              >
                What type of content will your site display?
              </label>

              <select
                id="siteTypeContent"
                name="siteTypeContent"
                onChange={formik.handleChange}
                value={formik.values.siteTypeContent}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              >
                <option selected value="utf-8">
                  UTF-8
                </option>
                <option value="utf-16">UTF-16</option>
                <option value="iso-8859-1">ISO-8859-1</option>
                <option value="windows-1252">WINDOWS-1252</option>
              </select>
            </div>
            <div className="  col-span-2 md:col-span-1">
              <label
                htmlFor="siteLanguage"
                className="block mb-2 text-sm font-semibold text-gray-600 dark:text-white "
              >
                What is your site primary language?
              </label>

              <select
                id="siteLanguage"
                name="siteLanguage"
                onChange={formik.handleChange}
                value={formik.values.siteLanguage}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              >
                <option selected value="en">
                  English
                </option>
                <option value="es">Spanish</option>
                <option value="pt">Portuguese</option>
                <option value="ru">Russian</option>
              </select>
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="siteAuthor"
                className="block mb-2 text-sm font-semibold text-gray-600 dark:text-white "
              >
                Site author (Optional)
              </label>

              <input
                type="text"
                name="siteAuthor"
                id="siteAuthor"
                onChange={formik.handleChange}
                value={formik.values.siteAuthor}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                placeholder="Name's author"
              />
            </div>
            <div className="col-span-2 md:col-span-2">
              <button
                disabled={!formik.isValid || !formik.dirty}
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                type="submit"
                className="p-3 rounded-md cursor-pointer text-md font-semibold bg-indigo-600 enabled:hover:bg-indigo-700 text-white w-full md:w-48 mt-3 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                <div className="flex items-center gap-1 justify-center">
                  <span className="icon-[grommet-icons--code] text-2xl" />{" "}
                  Generate Code
                </div>
              </button>
            </div>
          </div>
        </form>
      </article>
      <Modal metaTags={metaTags} />
    </div>
  );
};
