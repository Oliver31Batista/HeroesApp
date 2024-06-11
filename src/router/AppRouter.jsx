import { Routes, Route } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Routes>
                <Route path="/*" element={<HeroesRoutes to="/marvel" />} />
              </Routes>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
