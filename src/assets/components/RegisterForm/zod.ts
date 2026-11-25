import { z } from 'zod'

import { isValidCPF } from '../../../utils/cpf-validate'

export const registerSchema = z
    .object({
        firstName: z.string().min(1, 'Nome é obrigatório'),
        lastName: z.string().min(1, 'Sobrenome é obrigatório'),
        email: z.email('E-mail inválido').min(1, 'E-mail é obrigatório'),
        cpf: z
            .string()
            .min(1, 'CPF é obrigatório')
            .refine(isValidCPF, 'CPF inválido'),
        cellPhone: z
            .string()
            .min(1, 'Celular é obrigatório')
            .refine((value) => /^\d{2}9\d{8}$/.test(value.replace(/\D/g, '')), 'Celular inválido'),
        birthDate: z.coerce
            .date({ error: 'Data de nascimento inválida' })
            .refine((date) => date <= new Date(), 'Data de nascimento inválida'),
        password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
        confirmPassword: z.string().min(1, 'Confirmação de senha é obrigatória'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'As senhas não coincidem',
        path: ['confirmPassword'],
    })

export type RegisterFormInput = z.input<typeof registerSchema>
export type RegisterFormData = z.output<typeof registerSchema>
