import { useSelector } from "react-redux";

export const Auth = () => {
    const currentForm = useSelector(state => state.currentForm);

    console.log(currentForm);

    return (
        <>
            {currentForm === "signIn" && (
                <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
                    <h2 className="text-2xl font-semibold mb-6">Inicio de Sesión</h2>

                    <form>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                                Nombre de usuario
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Ingresa tu nombre de usuario"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Ingresa tu contraseña"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Iniciar Sesión
                        </button>
                    </form>
                </div>
            )}

            {currentForm === "signUp" && (
                <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
                    <h2 className="text-2xl font-semibold mb-6">Registro de Nuevo Usuario</h2>

                    <form>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                                Nombre de usuario
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Ingresa tu nombre de usuario"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Ingresa tu correo electrónico"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Ingresa tu contraseña"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                                Confirmar Contraseña
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Confirma tu contraseña"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Registrar
                        </button>
                    </form>
                </div>

            )}



        </>);
}