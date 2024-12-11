import { create } from 'zustand';

type StopsFilter = number[];

interface filterStore {
    stopsFilter: StopsFilter;
    optionsFilter: { id: number; label: string }[];
    setStopsFilter: (filter: StopsFilter) => void;
}

const useFilterStore = create<filterStore>((set) => ({
    stopsFilter: [],
    optionsFilter: [
        { id: 0, label: "Без пересадок" },
        { id: 1, label: "1 пересадка" },
        { id: 2, label: "2 пересадки" },
        { id: 3, label: "3 пересадки" },
    ],
    setStopsFilter: (filter) => set({ stopsFilter: filter }),
}));

export default useFilterStore;
