import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DASHBOARD, TABLE,OTHER} from "./routePaths";
import { DataTable } from "../components/pages/table/Table";
import { Other } from "../components/pages/other/Other";
import { Dashboard } from "../components/pages/dashboard/Dashboard";

export const AppRoutes: FC = () => (
    <Routes>
      <Route index path={DASHBOARD} element={<Dashboard />} />
      <Route index path={TABLE} element={<DataTable/> } />
      <Route path={OTHER} element={<Other />} />
      <Route path="*" element={<Navigate to={DASHBOARD} replace />} />
    </Routes>
);

export default AppRoutes;
