import { Fields } from "../../../features/fields/components/Fields";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const DashboardContainer = () => {
    return (
        <div className="min-h-screen bg-gray-50
        flex flex-col">
            {/*NavBar*/}
            <Navbar />

            <div className="flex flex-1">
                {/*Sidebar */}
                <Sidebar />

                <main className="flex-1 p-6">
                    {/*Children*/}
                    <Fields />
                </main>
            </div>
        </div>
    );
}