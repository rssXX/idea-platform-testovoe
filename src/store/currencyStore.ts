import { create } from "zustand";
import { CurrencyType } from '../utils/types'

interface CurrencyStore {
    currency: CurrencyType;
    setCurrency: (currency: string) => void;
}

const useCurrencyStore = create<CurrencyStore>((set) => ({
    currency: "RUB",
    setCurrency: (currency) => set({ currency }),
}));

export default useCurrencyStore;
