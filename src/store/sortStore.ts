import { create } from 'zustand';

type SortOption = 'default' | 'cheap-first' | 'expensive-first';

interface SortStore {
    sortOption: SortOption;
    setSortOption: (option: SortOption) => void;
}

const useSortStore = create<SortStore>((set) => ({
    sortOption: 'default',
    setSortOption: (option) => set({ sortOption: option }),
}));

export default useSortStore;