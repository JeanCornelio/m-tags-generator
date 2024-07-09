import { useEffect, useState } from "react";
import { Button } from "./Button";

function ButtonCopy({ textToCopy, type }) {
  const [buttonName, setButtonName] = useState("Copy");
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
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
    <Button
      title={buttonName}
      icon="icon-[ph--copy-simple-light] text-2xl"
      onClick={() => onCopy()}
      type={"type"}
      className=" border p-4 border-indigo-600 py-1 text-sm text-indigo-600 dark:bg-slate-800 dark:border-slate-600 hover:dark:bg-indigo-600 dark:text-white hover:bg-indigo-600 hover:text-white"
    />
  );
}

export default ButtonCopy;
