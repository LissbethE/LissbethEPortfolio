import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import InteractiveGradient from "./InteractiveGradient";

function AppLayout() {
  return (
    <section className="AppLayout">
      {/* 
      <div className="balls">
        <div className="balls__ball balls__ball--move"></div>
        <div className="balls__ball balls__ball--move-around"></div>
      </div>
      */}

      <InteractiveGradient />

      <Nav />

      <div className="container">
        <main>
          <Outlet />
        </main>
      </div>
    </section>
  );
}

export default AppLayout;
