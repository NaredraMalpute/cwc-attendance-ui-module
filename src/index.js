import { ConfigProvider, theme } from "antd";
import "antd/dist/reset.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import SkeletonPage from "./components/skeleton/SkeletonPage";
import { AuthContextProvider } from "./context/AuthContext";
import "./global.scss";
import reportWebVitals from "./reportWebVitals";
import NotFound from "./Pages/notfound/NotFound";
import CustomDatePicker from "./components/datepicker/CustomDatePicker";
import ErrorPage from "./components/errorPage/ErrorPage";
import SuccessPage from "./components/successPage/successPage";
import GetStarted from "../src/Pages/Attendance/home/GetStarted"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/lfi/getStarted",
        element: <GetStarted />,
      },
      {
        path: "/success",
        element: <SuccessPage />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
      // {
      //   path: "/lfi/testPDF",
      //   element: <TestPDF />,
      // },
    ],
  },

  {
    path: "/testCalender",
    element: <CustomDatePicker />,
    errorElement: <ErrorPage />,
  },

  {
    path: "*",
    element: <NotFound />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {
        <Suspense fallback={<SkeletonPage />}>
          <AuthContextProvider>
            <ConfigProvider
              theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                  colorPrimary: "#334e9e",
                  borderRadius: 0,
                  fontFamily: "Poppins,sans-serif",
                  colorBgContainer: "transparent",
                },
                components: {
                  Collapse: {
                    /* here is your component tokens */
                    contentBg: "rgba(222, 237, 255, 0.02)",
                    contentPadding: "16px 16px",
                    headerBg: "rgba(222, 237, 255, 0.15)",
                    headerPadding: "12px 16px",
                  },
                  Switch: {
                    colorPrimary: "#5856D6;",
                  },
                  Table: {
                    colorBgContainer: "rgb(245,245,245)",
                  },
                },
              }}
            >
              <RouterProvider router={router} />
            </ConfigProvider>
          </AuthContextProvider>
        </Suspense>
    }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
