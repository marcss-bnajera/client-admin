import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const LoginForm = ({ onForgot }) => {
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);
    const loading = useAuthStore((state) => state.loading);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (formData) => {
        // 1. Verificamos qué capturó el formulario en la consola del navegador
        console.log("Datos capturados por el formulario:", formData);

        // 2. Construimos el objeto exacto
        const loginPayload = {
            EmailOrUsername: formData.EmailOrUsername,
            Password: formData.Password
        };

        console.log("Cuerpo que se enviará en el POST:", loginPayload);

        try {
            const res = await login(loginPayload);
            console.log("Respuesta del servidor:", res);

            // Verifica si la respuesta fue exitosa (ajusta según tu backend)
            if (res.status === 200 || res.data?.success) {
                navigate("/dashboard");
                toast.success("¡Bienvenido!");
            }
        } catch (err) {
            console.error("Error en la petición:", err);
            // Si el error es 400, aquí verás el detalle
            const mensaje = err.response?.data?.message || "Credenciales inválidas";
            toast.error(mensaje);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
                <label className="block text-sm font-medium text-gray-800 mb-1.5">
                    Email o Usuario
                </label>
                <input
                    type="text"
                    placeholder="correo@ejemplo.com o usuario"
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.EmailOrUsername ? 'border-red-500' : 'border-gray-300'}`}
                    {...register("EmailOrUsername", { required: "Este campo es obligatorio" })}
                />
                {errors.EmailOrUsername && <span className="text-red-500 text-xs">{errors.EmailOrUsername.message}</span>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Contraseña
                </label>
                <input
                    type="password"
                    placeholder="••••••••"
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.Password ? 'border-red-500' : 'border-gray-300'}`}
                    {...register("Password", { required: "La contraseña es obligatoria" })}
                />
                {errors.Password && <span className="text-red-500 text-xs">{errors.Password.message}</span>}
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-main-blue hover:opacity-90 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm disabled:bg-gray-400"
            >
                {loading ? "Iniciando..." : "Iniciar Sesión"}
            </button>

            <p className="text-center text-sm">
                <button
                    type="button"
                    onClick={onForgot}
                    className="text-main-blue hover:underline"
                >
                    ¿Olvidaste tu contraseña?
                </button>
            </p>
        </form>
    );
}