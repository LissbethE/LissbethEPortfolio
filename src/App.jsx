import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ProjectProvider from "./context/ProjectContext";
import CareerPath from "./pages/CareerPath";
import Services from "./pages/Services";

const AppLayout = lazy(() => import("./ui/AppLayout"));
const Spinner = lazy(() => import("./ui/Spinner"));
const Home = lazy(() => import("./pages/Home"));
const Stack = lazy(() => import("./pages/Stack"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Project = lazy(() => import("./pages/Project"));

function App() {
  return (
    <ProjectProvider>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="careerPath" element={<CareerPath />} />
              <Route path="stack" element={<Stack />} />
              <Route path="project" element={<Project />} />

              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ProjectProvider>
  );
}

export default App;

/*

 <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/" />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
    */
