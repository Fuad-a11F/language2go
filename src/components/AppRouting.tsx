import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../routes";

export const AppRouting = () => {
  const isAuth = false;

  return (
    <Routes>
      {publicRoutes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      <Route path="*" element={"Не найдено"} />
    </Routes>
  );
};
