import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./utils/store";

import "./App.css";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>

    /**
     *  Header
     *  Body
     *    SideBar
     *       MenuItems
     *    MainContainer
     *      ButtonList
     *      VideoContainer
     *         VideoCard
     */
  );
}

export default App;
