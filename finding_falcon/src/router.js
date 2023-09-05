import { createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import GamePage from "./pages/GamePage";
import NotFound from "./pages/NotFoundPage";
import Final from "./pages/Final";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage/>,
  },
  {
    path: "/game",
    element: <GamePage/>,
  },
  {
    path: "/final",
    element: <Final/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
]);

export default router;
