import Layout from "@src/widgets/layout/Layout";
import Product from "@src/widgets/product/Product";
// import { useSearchParams } from "react-router-dom";

const Home = () => {
  // const [searchParams] = useSearchParams();
  // const category = searchParams.get("category");
  // console.log(category);
  return (
    <Layout>
      <Product />
    </Layout>
  );
};

export default Home;
