import Layout from "@src/widgets/layout/Layout";
import { Link } from "react-router-dom";
import styles from "./admin-page.module.scss";
const Admin = () => {
  return (
    <Layout>
      <div className={styles.admin_wrap}>
        <Link to="/admin/post">상품 올리기</Link>
      </div>
    </Layout>
  );
};

export default Admin;
