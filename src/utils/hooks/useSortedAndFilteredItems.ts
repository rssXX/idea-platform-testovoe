import {useEffect, useMemo} from 'react';
import json from '../../assets/tickets.json'
import {useFilterStore, useSortStore, useItemsStore, useCurrencyStore} from "../../store";
import {exchangeRates} from '../consts'

const useSortedAndFilteredItems = () => {
    const { items, setItems } = useItemsStore()
    const { sortOption, setSortOption } = useSortStore()
    const { stopsFilter, setStopsFilter } = useFilterStore()
    const { currency } = useCurrencyStore()

    const sortedAndFilteredItems = useMemo(() => {
        let filteredAndSortedItems = [...items];

        if (stopsFilter.length > 0) {
            filteredAndSortedItems = filteredAndSortedItems.filter(item =>
                stopsFilter.includes(item.stops)
            );
        }

        if (sortOption === "cheap-first") {
            return filteredAndSortedItems.sort((a, b) => a.price - b.price);
        }

        if (sortOption === "expensive-first") {
            return filteredAndSortedItems.sort((a, b) => b.price - a.price);
        }

        return filteredAndSortedItems;
    }, [sortOption, currency, stopsFilter, items]);

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

export default useSortedAndFilteredItems
