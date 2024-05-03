import CartPage from "@src/pages/Cart/cart-page";
import Home from "@src/pages/Home/home-page";
import MyAccountPage from "@src/pages/MyAccount/my_account-page";
import ProductDetailPage from "@src/pages/ProductDetail/product_detail-page";
import PageNotFound from "@src/pages/errors/404-page";
import ErrorPage from "@src/pages/errors/error-page";
import { RouteObject } from "react-router-dom";

type ExtendedRouteObject = RouteObject & {
  index?: boolean;
  role: number;
};

//공용 페이지
const publicPages: ExtendedRouteObject[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    index: true,
    role: 1,
  },
  {
    path: "/productdetail/:id",
    element: <ProductDetailPage />,
    errorElement: <ErrorPage />,
    role: 1,
    // children: [
    //   {
    //     path: "ProductDetail/:id",
    //     element: <IdForm />,
    //   },
    // ],
  },
  {
    path: "*",
    element: <PageNotFound />,
    role: 1,
  },
  // {
  //   path: "/movie",
  //   element: <MoviePage />,
  //   role: 1,
  //   children: [
  //     {
  //       path: "detail/:id",
  //       element: <DetailPage />,
  //     },
  //   ],
  // },
];

//로그인 필요한 페이지
const authorizationPages = [
  {
    path: "/cart",
    element: <CartPage />,
    role: 2,
  },
  {
    path: "/myaccount",
    element: <MyAccountPage />,
    role: 2,
  },
  // {
  //   path: "/todo",
  //   element: <TodoPage />,
  //   index: true,
  //   role: 2,
  // },
  // {
  //   path: "/reducerprac",
  //   element: <ReducerPage />,
  //   index: true,
  //   role: 2,
  // },
];

//관리자 페이지
// const adminPages = [
//   {
//     path: "/admin",
//     element: <Admin />,
//     index: true,
//     role: 3,
//   },
// ];

export const routerList: ExtendedRouteObject[] = [
  //   ...notAuthorizationPages,
  ...publicPages,
  ...authorizationPages,
  //   ...adminPages,
];
