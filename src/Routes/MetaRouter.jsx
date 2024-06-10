import { Route, Routes } from "react-router-dom";
import { GeneratePage, HomePage, ValidatePage } from "../metatag";
export const MetaRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/generate-page" element={<GeneratePage />} />
      <Route path="/validate-page" element={<ValidatePage />} />
    </Routes>
  );
};
