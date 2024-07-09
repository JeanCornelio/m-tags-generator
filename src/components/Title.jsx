export const Title = ({
  title = "Simple Title",
  subtitle = "Simple Subtitle",
}) => {
  return (
    <section className="mb-8  border-b dark:border-gray-800">
      <h2
        className="inline-block mb-2 text-indigo-900 text-2xl font-semibold tracking-tight  dark:text-white"
        id="content"
      >
        {title}
      </h2>
      <p className="mb-4 text-md text-gray-500 dark:text-gray-400">
        {subtitle}
      </p>
    </section>
  );
};
