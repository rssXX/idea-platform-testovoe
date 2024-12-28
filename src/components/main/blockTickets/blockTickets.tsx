import React from 'react';
import styles from './blockTickets.module.scss'
import {Ticket} from '../ticket'
import {motion} from 'motion/react'
import {useSortedAndFilteredItems} from "../../../utils/hooks";
import {exchangeRates} from "../../../utils/consts";
import {useCurrencyStore} from "../../../store";

const BlockTickets: React.FC = () => {
    const {tickets} = useSortedAndFilteredItems();
    const {currency} = useCurrencyStore()

    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`${styles.container}`}
        >
            {tickets.map((ticket) => (
                <Ticket
                    key={`${ticket.origin}-${ticket.destination}-${ticket.departure_date}-${ticket.departure_time}-${ticket.arrival_date}-${ticket.arrival_time}`}
                    {...ticket}
                    price={Math.round(ticket.price * exchangeRates[currency].rates)}
                    simbole={exchangeRates[currency].icon}
                />
            ))}
        </motion.div>
    );
};

export default BlockTickets;
