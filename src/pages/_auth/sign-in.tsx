import { createFileRoute, Link } from '@tanstack/react-router'

import Logo from '@/assets/images/Logo.png'
import GoogleIcon from '@/assets/images/google-icon.png'
import { LoginForm } from '../../assets/components/LoginForm'

export const Route = createFileRoute('/_auth/sign-in')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <section className="flex min-h-screen w-full items-start justify-center bg-gray-100 px-4 py-10 text-black">
            <div className="flex w-full max-w-md flex-col items-center gap-5 rounded-lg border border-gray-300 bg-white p-8 shadow-sm">
                <img src={Logo} alt="Syntax Wear" className="h-12 w-auto" />

                <LoginForm />

                <div className="flex w-full flex-col items-center gap-4">
                    <div className="flex w-full items-center gap-4">
                        <div className="h-px flex-1 bg-gray-300" />
                        <span className="text-sm text-gray-500">ou</span>
                        <div className="h-px flex-1 bg-gray-300" />
                    </div>

                    <button
                        type="button"
                        className="flex w-full cursor-pointer items-center justify-center rounded-[1px] border border-gray-300 p-3.5"
                    >
                        <img src={GoogleIcon} alt="Google" className="h-5 w-5" />
                    </button>

                    <span className="text-sm text-gray-600">
                        Ainda não tem uma conta?{' '}
                        <Link to="/sign-up" className="text-[#5433Eb] hover:underline">
                            Criar conta
                        </Link>
                    </span>
                </div>
            </div>
        </section>
    )
}