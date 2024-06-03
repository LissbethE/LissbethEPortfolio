import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function AppLayout() {
  return (
    <section className="AppLayout pattern-vertical-lines-lg">
      <div className="balls">
        <div className="balls__ball balls__ball--move"></div>
        <div className="balls__ball balls__ball--move-around"></div>
      </div>

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
