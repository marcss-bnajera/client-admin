import { TournamentModal } from "./TournamentModal";

export const Tournaments = () => {
    return (
        <div className="p-4">
            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-blue-900">
                        Gestión de Torneos
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Administra los torneos registrados
                    </p>
                </div>

                <button className="bg-blue-700 px-4 py-2 rounded text-white hover:opacity-90 transition shadow-md">
                    + Agregar Torneo
                </button>
            </div>

            {/* GRID DE TORNEOS */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {/* CARD DE EJEMPLO */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-[1.02] p-5">
                    <h2 className="text-xl font-bold text-blue-800">
                        Copa Primavera 2026
                    </h2>

                    <div className="flex gap-2 mt-2 flex-wrap">
                        <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
                            FUTBOL 7
                        </span>
                        <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                            ACTIVO
                        </span>
                    </div>

                    <div className="mt-4 space-y-1">
                        <p className="text-sm text-gray-600">
                            <strong>Equipos:</strong> 8
                        </p>
                        <p className="text-sm text-gray-500 italic">
                            01/04/2026 - 30/04/2026
                        </p>
                    </div>

                    <div className="mt-4 pt-4 border-t flex justify-end">
                        <button className="text-blue-600 text-sm font-semibold hover:underline">
                            Ver detalles
                        </button>
                    </div>
                </div>

            </div>

            {/* Aquí puedes renderizar el modal si tienes un estado para abrirlo */}
            {/* <TournamentModal /> */}
        </div>
    );
};