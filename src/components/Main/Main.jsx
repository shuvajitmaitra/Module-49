import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Main = () => {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
