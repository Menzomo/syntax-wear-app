import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { registerSchema, type RegisterFormData, type RegisterFormInput } from './zod'

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormInput, unknown, RegisterFormData>({
        resolver: zodResolver(registerSchema),
        mode: 'onBlur',
    })

    const onSubmit = (data: RegisterFormData) => {
        console.log(data)
    }

    return (
        <form
            className="flex flex-col gap-3.5 w-full max-w-md"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="text-sm font-medium">
                    Nome
                </label>
                <input
                    id="firstName"
                    className="border rounded-[1px] border-gray-200 w-full text-black p-3"
                    type="text"
                    {...register('firstName')}
                />
                {errors.firstName && (
                    <span className="text-red-600 text-sm">{errors.firstName.message}</span>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="lastName" className="text-sm font-medium">
                    Sobrenome
                </label>
                <input
                    id="lastName"
                    className="border rounded-[1px] border-gray-200 w-full text-black p-3"
                    type="text"
                    {...register('lastName')}
                />
                {errors.lastName && (
                    <span className="text-red-600 text-sm">{errors.lastName.message}</span>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium">
                    E-mail
                </label>
                <input
                    id="email"
                    className="border rounded-[1px] border-gray-200 w-full text-black p-3"
                    type="email"
                    {...register('email')}
                />
                {errors.email && (
                    <span className="text-red-600 text-sm">{errors.email.message}</span>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="cpf" className="text-sm font-medium">
                    CPF
                </label>
                <input
                    id="cpf"
                    className="border rounded-[1px] border-gray-200 w-full text-black p-3"
                    type="text"
                    {...register('cpf')}
                />
                {errors.cpf && (
                    <span className="text-red-600 text-sm">{errors.cpf.message}</span>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="cellPhone" className="text-sm font-medium">
                    Celular
                </label>
                <input
                    id="cellPhone"
                    className="border rounded-[1px] border-gray-200 w-full text-black p-3"
                    type="text"
                    {...register('cellPhone')}
                />
                {errors.cellPhone && (
                    <span className="text-red-600 text-sm">{errors.cellPhone.message}</span>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="birthDate" className="text-sm font-medium">
                    Data de nascimento
                </label>
                <input
                    id="birthDate"
                    className="border rounded-[1px] border-gray-200 w-full text-black p-3"
                    type="date"
                    {...register('birthDate')}
                />
                {errors.birthDate && (
                    <span className="text-red-600 text-sm">{errors.birthDate.message}</span>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-sm font-medium">
                    Senha
                </label>
                <input
                    id="password"
                    className="border rounded-[1px] border-gray-200 w-full text-black p-3"
                    type="password"
                    {...register('password')}
                />
                {errors.password && (
                    <span className="text-red-600 text-sm">{errors.password.message}</span>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="confirmPassword" className="text-sm font-medium">
                    Confirmar senha
                </label>
                <input
                    id="confirmPassword"
                    className="border rounded-[1px] border-gray-200 w-full text-black p-3"
                    type="password"
                    {...register('confirmPassword')}
                />
                {errors.confirmPassword && (
                    <span className="text-red-600 text-sm">{errors.confirmPassword.message}</span>
                )}
            </div>

            <button className="bg-[#212A2F] w-full p-3.5 rounded-[1px] cursor-pointer text-white" type="submit">
                Continuar
            </button>
        </form>
    )
}
