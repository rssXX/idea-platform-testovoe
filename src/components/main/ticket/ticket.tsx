import React from 'react';
import {TicketsInterface} from '../../../utils/interface'
import {motion} from 'motion/react'
import styles from './ticket.module.scss'
import {useCurrencyStore} from "../../../store";
import {exchangeRates} from "../../../utils/consts";

interface ITicketProps extends TicketsInterface {
    index: number
}

const Ticket: React.FC<ITicketProps> = ({
    origin_name,
    carrier,
    price,
    index,
}) => {
    const {currency} = useCurrencyStore()

    return (
        <motion.div
            layout
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`card ${styles.container}`}
        >
            <div>
                <div>
                    {carrier}
                </div>
                <div>
                    <a href={`${index}`}>Купить за {price} {exchangeRates[currency].icon}  </a>
                </div>
            </div>
            <div>
                {origin_name}
            </div>
        </motion.div>
    );
};

export default Ticket;
