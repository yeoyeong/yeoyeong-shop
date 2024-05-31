import Layout from "@src/widgets/layout/Layout";
import Profile from "./Profile";
import { useState } from "react";
import ToggleBtn from "./ToggleBtn";
import CartList from "./CartList";

const MyAccountPage = () => {
  const [toggle, setToggle] = useState<string>("cart");
  return (
    <Layout>
      <Profile />
      <ToggleBtn toggle={toggle} setToggle={setToggle} />
      {toggle === "cart" && <CartList />}
    </Layout>
  );
};

export default MyAccountPage;
