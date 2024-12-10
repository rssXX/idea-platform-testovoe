import {useMemo} from 'react';
import {useSortStore} from "../../store";
import {TicketsInterface} from '../interface'

const useSortedItems = (items: TicketsInterface[]) => {
    const { sortOption } = useSortStore();

    return useMemo(() => {
        if (sortOption === 'cheap-first') {
            return [...items].sort((a, b) => a.price - b.price);
        }
        if (sortOption === 'expensive-first') {
            return [...items].sort((a, b) => b.price - a.price);
        }
        return items;
    }, [sortOption, items]);
};

export default useSortedItems