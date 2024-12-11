import { create } from "zustand";

type Currency = "USD" | "EUR" | "RUB";

interface CurrencyStore {
    currency: Currency;
    setCurrency: (currency: Currency) => void;
}

const useCurrencyStore = create<CurrencyStore>((set) => ({
    currency: "RUB",
    setCurrency: (currency) => set({ currency }),
}));

export default useCurrencyStore;