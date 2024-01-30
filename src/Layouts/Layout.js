/* eslint-disable eqeqeq */
import { Layout, Spin, theme } from "antd";
import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import LeftArrowIcon from "../assets/svg/LeftArrowIcon.svg";
import Logo from "../assets/svg/lfiLogo.svg";
import BreadCrum from "../components/breadcrum/BreadCrum";
import Loader from "../components/loader/Loader";
import "../global.scss";
import useHeaderStore from "../store/headerStore";
import useLoaderStore from "../store/loaderStore";
import "../styles/dashboard.scss";
const { Header, Sider, Content, Footer } = Layout;

const AntdLayout = () => {
  const [nav, setNav] = useState("");
  const header = useHeaderStore((state) => state.header);
  const subHeader = useHeaderStore((state) => state.subHeader);
  const location = useLocation();
  const isLogoVisible = useHeaderStore((state) => state.isLogoVisible);
  const loader = useLoaderStore((state) => state.loader);
  const setLoader = useLoaderStore((state) => state.setLoader);
  console.log(location.pathname, "loc");

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  console.log("header", header, isLogoVisible);

  const handleMenuClick = (e) => {
    if (e.key == "logout") {
      localStorage.clear();
      navigate("/main");
    }
  };

  const handleRowClick = (e) => {
    setNav(e.key);

    if (e.key == "Home") {
      navigate("/fi-admin/dashboard/");
    } else if (e.key == "User Management") {
      navigate("/fi-admin/dashboard/management");
    } else if (e.key == "Holiday Management") {
      navigate("/fi-admin/holidayManagement");
    } else if (e.key == "TAT Report") {
      navigate("/fi-admin/TATReport");
    }
  };

  React.useEffect(() => {
    loader &&
      setTimeout(() => {
        setLoader(false);
      }, 60000);
  }, [loader]);

  return (
    <Layout className="site-layout">
      <Header
        className="layout-header"
        style={{
          height: "10vh",
          background: "#000",
          boxShadow: `0px 0px 8px 2px #d9d9d914`,
          display: "flex",
          justifyContent: "flex-start",
          gap: ".5rem",
          alignItems: "center",
          padding: " 1.2rem 1rem",
          position: "fixed",
          top: 0,
          width: "100vw",
          zIndex: 9999,
        }}
      >
        {location.pathname != "/loan-for-insurance" ||
        location.pathname != "/lfi/planActiveScreen" ? (
          <img
            // onClick={() => navigate(-1)}
            onClick={() =>
              location.pathname.includes("lfi/planActiveScreen")
                ? navigate("/lfi/redirectToPage ")
                : navigate(-1)
            }
            style={{
              height: "1rem",
              marginBottom: ".2rem",
              margin: "0 .5rem",
            }}
            src={LeftArrowIcon}
            alt=""
          />
        ) : (
          <img
            onClick={() => navigate("/lfi/redirectToPage")}
            style={{
              height: "1rem",
              marginBottom: ".2rem",
              marginLeft: ".5rem",
            }}
            src={LeftArrowIcon}
            alt=""
          />
        )}
        {isLogoVisible ? (
          <>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={Logo} alt="" />
              </div>
              <div
                className="header-text-container"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  textAlign: "left",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    lineHeight: 1,
                    padding: 0,
                    fontWeight: 400,
                    marginTop: "5px",
                  }}
                >
                  {header}{" "}
                </p>
                {subHeader && (
                  <p
                    style={{
                      margin: 0,
                      lineHeight: 1,
                      padding: 0,
                      fontSize: ".6rem",
                    }}
                  >
                    {subHeader}
                  </p>
                )}
              </div>
            </div>
          </>
        ) : (
          <div
            className="header-text-container"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textAlign: "left",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <p
              style={{ margin: 0, lineHeight: 1, padding: 0, fontWeight: 600 }}
            >
              {header}{" "}
            </p>
            {subHeader && (
              <p
                style={{
                  margin: 0,
                  lineHeight: 1,
                  padding: 0,
                  fontSize: ".6rem",
                }}
              >
                {subHeader}
              </p>
            )}
          </div>
        )}
        <BreadCrum />
      </Header>
      <Content
        style={{
          // margin: "24px 16px",
          minHeight: "100vh",
          background: colorBgContainer,
          paddingTop: "10vh",
        }}
      >
        {/* {localStorage?.getItem("fiAdminToken") ? ( */}
        <Spin indicator={<Loader />} spinning={loader}>
          <Outlet />
        </Spin>
        {/* ) : (
             <Navigate to="/main" />
           )} */}
      </Content>
    </Layout>
  );
};
export default AntdLayout;
