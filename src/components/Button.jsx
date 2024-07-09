export const Button = ({ title, className, icon, onClick, type, disabled }) => {
  return (
    <button
      className={` rounded-md transition-all duration-300  text-md font-semibold ${className} `}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex items-center gap-1 justify-center">
        {icon && <span className={icon} />}
        {title}
      </div>
    </button>
  );
};
