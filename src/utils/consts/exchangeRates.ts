import type {CurrencyType} from '../types'

const exchangeRates: Record<CurrencyType, {
    rates: number,
    icon: string,
}> = {
    RUB: {
        rates: 1,
        icon: '\u20BD',
    },
    USD: {
        rates: 0.0097,
        icon: '\u0024'
    },
    EUR: {
        rates: 0.0092,
        icon: '\u20AC',
    },
};

export default exchangeRates
