import { create } from 'zustand';

type StopsFilter = number | 'all'; // Количество пересадок или "все"

interface filterStore {
    stopsFilter: StopsFilter;
    setStopsFilter: (filter: StopsFilter) => void;
}

const useFilterStore = create<filterStore>((set) => ({
    stopsFilter: 'all',
    setStopsFilter: (filter) => set({ stopsFilter: filter }),
}));

export default useFilterStore;
