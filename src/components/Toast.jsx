import { useEffect, useState } from "react";

export const Toast = ({ title, description, type, isVisible, onClose }) => {
  const [toastClass, setToastClass] = useState({});
  const [visible, setVisible] = useState(isVisible);
  const toasClassColection = [
    {
      type: 1,
      icon: "icon-[clarity--success-standard-line] text-green-400 text-3xl",
    },
    {
      type: 2,
      icon: "icon-[formkit--warning] text-yellow-400  text-3xl",
    },
    {
      type: 3,
      icon: "icon-[codicon--error] text-red-400   text-3xl",
    },
    {
      type: 4,
      icon: "icon-[akar-icons--info] text-cyan-400   text-3xl",
    },
  ];

  useEffect(() => {
    const value = toasClassColection.find((el) => el.type === type);

    if (value && isVisible) {
      setToastClass(value);
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => onClose(), 300);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [type, isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed flex gap-3 items-center bg-white shadow-md dark:bg-slate-900 dark:text-white dark:border dark:border-gray-800 rounded-md p-3 text-sm md:text-base md:p-5 top-10 mx-3 right-0 md:right-[20px] z-50 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <span className={toastClass.icon} />
      <div>
        <p className="uppercase font-semibold">{title}</p>
        <p>{description}</p>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        data-modal-hide="default-modal"
      >
        <span className="icon-[iconamoon--close] text-2xl" />
        <span className="sr-only">Close modal</span>
      </button>
    </div>
  );
};
