import React from 'react';
import styles from './blockTickets.module.scss'
import {Ticket} from '../ticket'
import {motion} from 'motion/react'
import {useSortedItems} from "../../../utils/hooks";

const BlockTickets: React.FC = () => {
    const {tickets} = useSortedItems();

    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`${styles.container}`}
        >
            {tickets.map((ticket, index) => (
                <Ticket
                    key={`${ticket.origin}-${ticket.destination}-${ticket.departure_date}-${ticket.departure_time}-${ticket.arrival_date}-${ticket.arrival_time}`}
                    index={index}
                    {...ticket}
                />
            ))}
        </motion.div>
    );
};

export default BlockTickets;
