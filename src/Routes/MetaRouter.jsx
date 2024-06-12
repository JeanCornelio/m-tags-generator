import { Route, Routes } from "react-router-dom";
import { GeneratePage, HomePage, PreviewPage } from "../metatag";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initFlowbite } from 'flowbite'

export const MetaRouter = () => {

  const location = useLocation();

  useEffect(() => {
    // inizializar flowbite
    initFlowbite()
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/generate-page" element={<GeneratePage />} />
      <Route path="/validate-page" element={<PreviewPage />} />
    </Routes>
  );
};
