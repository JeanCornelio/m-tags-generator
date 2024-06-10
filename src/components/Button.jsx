export const Button = ({ title, className }) => {
  return (
    <button
      className={` p-3 rounded-md   text-md font-semibold ${className} `}
    >
      {title}
    </button>
  );
};
