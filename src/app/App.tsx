// import reactLogo from "../shared/assets/react.svg";
// import viteLogo from "/vite.svg";
import useRouterHook from "@src/shared/hooks/useRouterHook";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "@src/shared/styles/theme.scss";
import "@src/shared/styles/globalstyles.scss";
import authStore from "@src/shared/store/auth-store";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient(); // 생성
  const { userInfo } = authStore();
  const router = useRouterHook(userInfo.userType);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={createBrowserRouter(router.filterRouterList)} />
    </QueryClientProvider>
  );
}

export default App;
