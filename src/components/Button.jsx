export const Button = ({ title, className, icon, onClick, type }) => {
  return (
    <button
      className={` p-3 rounded-md   text-md font-semibold ${className} `}
      type={type}
      onClick={onClick}


    >
      <div className="flex items-center gap-1 justify-center">
      {icon && <span className={icon} />}
      {title}
      </div>
     
    </button>
  );
};
