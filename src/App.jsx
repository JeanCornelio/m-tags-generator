import { BrowserRouter } from "react-router-dom";
import { MetaRouter } from "./Routes/MetaRouter";

export function App() {
  return (
    <BrowserRouter>
      <MetaRouter />
    </BrowserRouter>
  );
}
