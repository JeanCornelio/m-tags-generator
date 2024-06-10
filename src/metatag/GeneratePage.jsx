export const GeneratePage = () => {
  return (
    <div className=" mt-10">
      <div class=" mb-8  dark:border-gray-800">
        <h2
          class="inline-block mb-2 text-2xl font-semibold tracking-tight text-slate-700 dark:text-white"
          id="content"
        >
          Generator tag
        </h2>
        <p class="mb-4 text-md text-gray-500 dark:text-gray-400">
          Learn how to customize text-related styles and properties such as font
          size, font style, text decoration, font weight and more using Tailwind
          CSS classes
        </p>
      </div>

      <div className="flex w-full gap-3">
        <div className="w-full ">
          <form action="">
            <div>
              <div className="mb-4">
                <label
                  for="title_site"
                  class="block mb-2 text-sm font-semibold text-gray-600 dark:text-white "
                >
                  Site title<span className="text-red-500 ms-1">*</span>
                </label>
                <input
                  type="text"
                  id="title_site"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                   placeholder="Site title must be within 70 Characters"
                  required
                />
              </div>
              <div class="mb-4">
                <label
                  for="site_description"
                  class="block mb-2 text-sm font-semibold text-gray-600 dark:text-white "
                >
                  Description<span className="text-red-500 ms-1">*</span>
                </label>
                <textarea 
                  type="text"
                  id="site_description"
                   rows="4"
                  placeholder="Description must be within 150 Characters"
                  class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                ></textarea>
              </div>
              <div class="mb-4">
                <label
                  for="site_keywords"
                  class="block mb-2 text-sm font-semibold text-gray-600 dark:text-white "
                >
                  Site Keywords<span className="text-red-500 ms-1">*</span>
                </label>
                <textarea 
                  type="text"
                  id="site_keywords"
                   rows="4"
                  placeholder="Separate with commas (keyword1, keyword2, keyword3 )"
                  class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
