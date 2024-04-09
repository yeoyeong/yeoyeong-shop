import Layout from "@src/widgets/layout/Layout";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let errorMessage = "";
  if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <Layout>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </Layout>
  );
};

export default ErrorPage;
