import { Route, Routes } from "react-router-dom";
import { AuthPage } from "../../features/auth/pages/AuthPage";
import { DashboardPage } from "../layouts/DashboardPage";

export const AppRoutes = () => {

    return (
        <Routes>
            {/* PUBLIC */}
            <Route path="/" element={<AuthPage />} />

            {/* PROTEGIDO POR ROLE */}
            <Route
                path="/dashboard/*" element={<DashboardPage />} />

            {/* Ruta temporal para pruebas */}
            <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Routes>
    );
}
