export function isValidCPF(cpf: string): boolean {
    const digits = cpf.replace(/\D/g, '')

    if (digits.length !== 11) return false
    if (/^(\d)\1{10}$/.test(digits)) return false

    const calcCheckDigit = (base: string): number => {
        let sum = 0
        let weight = base.length + 1

        for (const digit of base) {
            sum += Number(digit) * weight
            weight--
        }

        const remainder = (sum * 10) % 11
        return remainder === 10 ? 0 : remainder
    }

    const firstNineDigits = digits.slice(0, 9)
    const firstCheckDigit = calcCheckDigit(firstNineDigits)
    const firstTenDigits = firstNineDigits + firstCheckDigit
    const secondCheckDigit = calcCheckDigit(firstTenDigits)

    return (
        firstCheckDigit === Number(digits[9]) &&
        secondCheckDigit === Number(digits[10])
    )
}
