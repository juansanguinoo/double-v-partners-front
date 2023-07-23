import { Route, Routes } from "react-router-dom";
import User from "../pages/User/presentation/User";
import Home from "../pages/Home/presentation/Home";
import Header from "../pages/components/Header";
import Users from "../pages/User/presentation/Users";

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:login" element={<User />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
};

export default AppRouter;
