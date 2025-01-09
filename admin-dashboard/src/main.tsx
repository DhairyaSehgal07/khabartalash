import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.ts";
import "./index.css";
import App from "./App.tsx";
import DashboardScreen from "./screens/DashboardScreen.tsx";
import LoginScreen from "./screens/LoginScreen.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import NewsScreen from "./screens/NewsScreen.tsx";
import VideosScreen from "./screens/VideosScreen.tsx";
import EditNewsScreen from "./screens/EditNewsScreen.tsx";
import CreateNewsScreen from "./screens/CreateNewsScreen.tsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<PrivateRoute />}>
        <Route index={true} path="/" element={<DashboardScreen />} />
        <Route path="/news" element={<NewsScreen />} />
        <Route path="/videos" element={<VideosScreen />} />
        <Route path="/news/:id" element={<EditNewsScreen />} />
        <Route path="/news/create" element={<CreateNewsScreen />} />
      </Route>
      <Route path="/login" element={<LoginScreen />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
