import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";
import Footer from "./Footer";

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <main className="flex-grow flex flex-col container mx-auto p-4 sm:px-6 md:px-8 f-full">
        <section className=" md:mt-0">
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
};
