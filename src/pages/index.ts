import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        lazy: () => import("@/pages/Home"),
        path: "",
      },
    ],
  },
]);

export { router };
