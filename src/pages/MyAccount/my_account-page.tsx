import Layout from "@src/widgets/layout/Layout";
import Profile from "./Profile";
import ToggleBtn from "./ToggleBtn";
import CartList from "./CartList";
import { useSearchParams } from "react-router-dom";

const MyAccountPage = () => {
  const [searchParams] = useSearchParams();
  const myaccountstate = searchParams.get("myaccountstate");

  return (
    <Layout>
      <Profile />
      <ToggleBtn myaccountstate={myaccountstate} />
      {myaccountstate === "cart" && <CartList />}
    </Layout>
  );
};

export default MyAccountPage;
