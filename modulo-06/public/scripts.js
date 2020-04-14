const Mask = {
    apply(input, func) {
        setTimeout(function () {
            input.value = Mask[func](value)
        }, 1)
    },
    formatBRL(value) {
        let { value } = e.target

        value = value.replace(/\D/g, '')

        return value = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value / 100)
    }
}
