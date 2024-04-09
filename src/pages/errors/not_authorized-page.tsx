import Layout from "@src/widgets/layout/Layout";

const NotAuthorizedPage = ({ message }: { message: string }) => {
  return <Layout>{message}</Layout>;
};

export default NotAuthorizedPage;
