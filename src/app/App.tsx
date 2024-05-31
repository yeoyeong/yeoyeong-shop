// import reactLogo from "../shared/assets/react.svg";
// import viteLogo from "/vite.svg";
import useRouterHook from "@src/shared/hooks/useRouterHook";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "@src/shared/styles/theme.scss";
import "@src/shared/styles/globalstyles.scss";
import authStore from "@src/shared/store/auth-store";

function App() {
  const { userInfo } = authStore();
  const router = useRouterHook(userInfo.userType);

  return (
    <RouterProvider router={createBrowserRouter(router.filterRouterList)} />
  );
}

export default App;
