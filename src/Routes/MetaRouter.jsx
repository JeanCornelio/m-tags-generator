import { Navigate, Route, Routes } from "react-router-dom";
import { ErrorPage, GeneratePage, HomePage, PreviewPage } from "../metatag";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initFlowbite } from "flowbite";
import { Layout } from "../components/ui/Layout";

export const MetaRouter = () => {
  const location = useLocation();

  useEffect(() => {
    // inizializar flowbite
    initFlowbite();
  }, [location]);

  return (
    <Routes>
      <Route path="/404" element={<ErrorPage />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/generate" element={<GeneratePage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};
