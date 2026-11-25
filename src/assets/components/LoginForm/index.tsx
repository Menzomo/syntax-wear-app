export const LoginForm = () => {
    return (
        <form className="flex w-full max-w-md flex-col gap-3.5">
            <div className="flex flex-col gap-1">
                <label htmlFor="loginEmail" className="text-sm font-medium">
                    E-mail
                </label>
                <input
                    id="loginEmail"
                    type="email"
                    className="w-full rounded-[1px] border border-gray-200 p-3 text-black"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="loginPassword" className="text-sm font-medium">
                    Senha
                </label>
                <input
                    id="loginPassword"
                    type="password"
                    className="w-full rounded-[1px] border border-gray-200 p-3 text-black"
                />
            </div>

            <button
                type="submit"
                className="cursor-pointer rounded-[1px] bg-[#212A2F] p-3.5 text-white"
            >
                Entrar
            </button>
        </form>
    )
}
