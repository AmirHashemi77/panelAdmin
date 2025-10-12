import Home from "../Pages/Home";

export interface RouteConfig {
  path: string;
  label: string;
  element: React.ReactNode;
  requiredPermission?: string;
}

export const Paths: RouteConfig[] = [
  // { path: "*", label: "صفحه مورد نظر یافت نشد", element: <NotFoundPage /> },
  { path: "/", label: "خانه", element: <Home /> },
];
