import Spline from "@splinetool/react-spline";

import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function AppLayout() {
  return (
    <section className="AppLayout pattern-vertical-lines-lg">
      <div className="spline">
        <Spline scene="https://prod.spline.design/Z2OVAslksZIVN1pQ/scene.splinecode" />
      </div>

      <Nav />

      <main>
        <Outlet />
      </main>
    </section>
  );
}

export default AppLayout;
