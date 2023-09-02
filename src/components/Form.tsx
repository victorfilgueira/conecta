
export function Form() {
    return(
        <form className="max-w-md mx-auto p-4">
            <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
                Nome
                </label>
                <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
                Email
                </label>
                <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
                Mensagem
                </label>
                <textarea
                id="message"
                name="message"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                ></textarea>
            </div>
            <div className="text-center">
                <button
                type="submit"
                className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring"
                >
                Enviar
                </button>
            </div>
        </form>
    )
}

