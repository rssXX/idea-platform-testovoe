import {CurrencyType} from '../types'

interface IExchangeRatesProps{
    [key: CurrencyType]: {
        rates: number,
        icon: string,
    }
}

const exchangeRates: IExchangeRatesProps = {
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
