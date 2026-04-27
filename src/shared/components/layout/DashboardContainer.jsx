import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";

export const DashboardContainer = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Navbar superior */}
            <Navbar />

            <div className="flex flex-1">
                {/* Menú lateral de navegación */}
                <Sidebar />

                {/* Contenido principal */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};