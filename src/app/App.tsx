// import reactLogo from "../shared/assets/react.svg";
// import viteLogo from "/vite.svg";
import useRouterHook from "@src/shared/hooks/useRouterHook";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "@src/shared/styles/theme.scss";
import "@src/shared/styles/globalstyles.scss";

function App() {
  const isLoggedin = {
    userType: 0,
    // userType 0 === 로그인전
    // userType 1 === 로그인
    // userType 2 === 어드민
  };

  const router = useRouterHook(isLoggedin.userType);

  return (
    <>
      <RouterProvider router={createBrowserRouter(router.filterRouterList)} />
    </>
  );
}

export default App;
