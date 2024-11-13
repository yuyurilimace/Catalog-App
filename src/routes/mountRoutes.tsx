import { RouteObject } from "react-router-dom";

export const MountRoutes = () => {
  const isDevelopment = import.meta.env.VITE_APP_ENV === "development";
  const routes: RouteObject[] = [
    { path: "/", element: <div> initial route </div> },
  ];
  if (isDevelopment) {
    routes.push({ path: "playground", element: <div> playground route </div> });
  }
  return routes;
};
