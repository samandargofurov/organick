import { Route, Routes } from "react-router-dom"
import Layout from "./layout"
import Home from "./pages/home"
import About from "./pages/about"
import Shop from "./pages/shop"
import ErrorPage from "./pages/errorPage"
import ShopSingle from "./pages/shopSingle"
import News from "./pages/news"
import Projects from "./pages/projects"
import AboutNew from "./pages/aboutNew"
import Team from "./pages/team"
import ProjectDetails from "./pages/projectDetails"
import Licenses from "./pages/licenses"
import Changelog from "./pages/changelog"
import ProtectedPage from "./pages/protectedPage"
import ContactUs from "./pages/contactUs"
import Services from "./pages/services"
import QualityStandard from "./pages/qualityStandard"

const routes = [
  {
    path: "",
    element: <Home />,
    layout: "layout",
  },
  {
    path: "/about",
    element: <About />,
    layout: "layout",
  },
  {
    path: "/shop",
    element: <Shop />,
    layout: "layout",
  },
  {
    path: "/news",
    element: <News />,
    layout: "layout",
  },
  {
    path: "/projects",
    element: <Projects />,
    layout: "layout",
  },
  {
    path: "/ourTeam",
    element: <Team />,
    layout: "layout",
  },
  {
    path: "/licenses",
    element: <Licenses />,
    layout: "layout",
  },
  {
    path: "/services",
    element: <Services />,
    layout: "layout",
  },
  {
    path: "/changelog",
    element: <Changelog />,
    layout: "layout",
  },
  {
    path: "/contactUs",
    element: <ContactUs />,
    layout: "layout",
  },
  {
    path: "/qualityStandard",
    element: <QualityStandard />,
    layout: "layout",
  },
  {
    path: "/protectedPage",
    element: <ProtectedPage />,
    layout: "layout",
  },
  {
    path: "/aboutNew/:id",
    element: <AboutNew />,
    layout: "layout",
  },
  {
    path: "/shopSingle/:id",
    element: <ShopSingle />,
    layout: "layout",
  },
  {
    path: "/projectDetails/:id",
    element: <ProjectDetails />,
    layout: "layout",
  },
  {
    path: "*",
    element: <ErrorPage />,
    layout: "layout",
  },
];

const App = () => {
  return (
    <>
      <Routes>
      {routes?.map((route, index) => (
        <Route key={index} path={route.path} element={route?.layout === "layout" ? <Layout>{route.element}</Layout> : route.element} />
      ))}
    </Routes>
    </>
  )
}

export default App