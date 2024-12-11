import {useEffect, useMemo} from 'react';
import json from '../../assets/tickets.json'
import {useFilterStore, useSortStore, useItemsStore} from "../../store";

const useSortedItems = () => {
    const { items, setItems } = useItemsStore()
    const { sortOption, setSortOption } = useSortStore();
    const { stopsFilter, setStopsFilter } = useFilterStore()

    const sortedAndFilteredItems = useMemo(() => {
        return [...items]
            .filter(item => stopsFilter === 'all' || item.stops === stopsFilter) // Фильтрация
            .sort((a, b) => {
                if (sortOption === 'cheap-first') return a.price - b.price;
                if (sortOption === 'expensive-first') return b.price - a.price;
                return 0; // Без сортировки
            });
    }, [sortOption, stopsFilter, items]);

    useEffect(() => {
        if (items.length == 0 ){
            setItems(json.tickets || [])
        }
    }, [items, setItems])

    return {
        tickets: sortedAndFilteredItems,
        setItems,
        sortOption,
        stopsFilter,
        setSortOption,
        setStopsFilter,
    }
};

export default useSortedItems
