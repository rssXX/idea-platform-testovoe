import { create } from "zustand";
import type { CurrencyType } from '../utils/types'

interface CurrencyStore {
    currency: CurrencyType;
    setCurrency: (currency: CurrencyType) => void;
}

const useCurrencyStore = create<CurrencyStore>((set) => ({
    currency: "RUB",
    setCurrency: (currency) => set({ currency }),
}));

export default useCurrencyStore;
