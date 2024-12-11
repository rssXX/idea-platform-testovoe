import React from 'react';
import {TicketsInterface} from '../../../utils/interface'
import {motion} from 'motion/react'
import styles from './ticket.module.scss'

interface ITicketProps extends TicketsInterface {
    index: number
}

const Ticket: React.FC<ITicketProps> = ({
                                                 origin,
                                                 origin_name,
                                                 destination,
                                                 destination_name,
                                                 departure_date,
                                                 departure_time,
                                                 arrival_date,
                                                 arrival_time,
                                                 carrier,
                                                 stops,
                                                 price,
    index,
}) => {
    return (
        <motion.div
            layout
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`${styles.container}`}
        >
            <div>
                <div>
                    {carrier}
                </div>
                <div>
                    <a href={`${index}`}>Купить за {price} &#8381;</a>
                </div>
            </div>
            <div>
                {origin_name}
            </div>
        </motion.div>
    );
};

export default Ticket;
