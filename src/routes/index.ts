import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        lazy: () => import("@/routes/Home"),
        path: "",
      },
    ],
  },
]);

export { router };
