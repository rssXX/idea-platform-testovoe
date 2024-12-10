import React from 'react';
import styles from './blockTickets.module.scss'
import {Ticket} from '../ticket'
import json from '../../../assets/tickets.json'
import {useSortedItems} from "../../../utils/hooks";

const BlockTickets: React.FC = () => {
    const tickets = useSortedItems(json.tickets || []);

    return (
        <div className={`${styles.container}`}>
            {tickets.map((ticket, index) => (
                <Ticket
                    key={`${ticket.origin}-${ticket.destination}-${ticket.departure_date}-${ticket.departure_time}-${ticket.arrival_date}-${ticket.arrival_time}`}
                    index={index}
                    {...ticket}
                />
            ))}
        </div>
    );
};

export default BlockTickets;