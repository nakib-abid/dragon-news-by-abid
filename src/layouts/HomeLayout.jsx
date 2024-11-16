import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Leftbar from "../components/layout-components/Leftbar";
import Rightbar from "../components/layout-components/Rightbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
      </header>
      <Navbar></Navbar>
      <main className="my-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <Leftbar></Leftbar>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="right col-span-3">
          <Rightbar></Rightbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
