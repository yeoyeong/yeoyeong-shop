import Layout from "@src/widgets/layout/Layout";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <Layout>
      <Link to="/admin/post">상품 올리기</Link>
    </Layout>
  );
};

export default Admin;
