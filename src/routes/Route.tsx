import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Wrapper from "../layout/Wrapper";
import Pageloading from "../components/Pageloading";
import Menu from "../pages/Menu";
import AboutUs from "../pages/AboutUs";
import OurChef from "../pages/OurChef";
import Reservation from "../pages/Reservation";
import WrapperAdmin from "../layout/admin/Wrapper.admin";
// import Dashboard from "../pages/admin/Dashboard";
import Admin_login from "../pages/Admin_login";
import Admin_Menu from "../pages/admin/Admin_Menu";
import Admin_Chef from "../pages/admin/Admin_Chef";
import AdminProtectedRoutes from "../components/AdminProtectedRoutes";
import OurBlogs from "../pages/OurBlogs";
import ContactUs from "../pages/ContactUs";
import SingleBlog from "../pages/SingleBlog";
import Admin_Blogs from "../pages/admin/Admin_Blogs";
import AddtoCart from "../pages/AddtoCart";
import ProtectedRoutes from "../components/ProtectedRoutes";
const LandingPage = lazy(() => import("../pages/LandingPage"));
// const Login = lazy(() => import("../pages/Login"));
// const Singup = lazy(() => import("../pages/Signup"));

export const Route = createBrowserRouter([
  // {
  //   path: "",
  //   element: <Home />,
  // },// {
  //   path: "/signup",
  //   element: <Singup />,
  // },
  {
    path: "/administrator-admin-login",
    element: <Admin_login />,
  },

  // {==== USER ROUTES =====}
  {
    path: "",
    element: <Wrapper />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Pageloading />}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "home",
        element: (
          <Suspense fallback={<Pageloading />}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "/our-menu",
        element: (
          <Suspense fallback={<Pageloading />}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<Pageloading />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/our-chef",
        element: (
          <Suspense fallback={<Pageloading />}>
            <OurChef />
          </Suspense>
        ),
      },
      {
        path: "/our-blogs",
        element: (
          <Suspense fallback={<Pageloading />}>
            <OurBlogs />
          </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={<Pageloading />}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/reservation",
        element: (
          <Suspense fallback={<Pageloading />}>
            <Reservation />
          </Suspense>
        ),
      },
      {
        path: "/singleblog/:id",
        element: (
          <Suspense fallback={<Pageloading />}>
            <SingleBlog />
          </Suspense>
        ),
      },
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "/my-cart",
            element: (
              <Suspense fallback={<Pageloading />}>
                <AddtoCart />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },

  // {==== ADMIN ROUTES =====}
  {
    element: <AdminProtectedRoutes />,
    children: [
      {
        path: "/admin",
        element: <WrapperAdmin />,
        children: [
          {
            path: "menu",
            element: (
              <Suspense fallback={<Pageloading />}>
                <Admin_Menu />
              </Suspense>
            ),
          },
          {
            path: "chef",
            element: (
              <Suspense fallback={<Pageloading />}>
                <Admin_Chef />
              </Suspense>
            ),
          },
          {
            path: "blogs",
            element: (
              <Suspense fallback={<Pageloading />}>
                <Admin_Blogs />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
