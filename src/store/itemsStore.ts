import { create } from 'zustand';
import {TicketsInterface} from "../utils/interface";

interface ItemsStore {
    items: TicketsInterface[];
    setItems: (newItems: TicketsInterface[]) => void;
}

const useItemsStore = create<ItemsStore>((set) => ({
    items: [],
    setItems: (newItems) => set({ items: newItems }),
}));

export default useItemsStore;
