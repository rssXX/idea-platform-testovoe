import React from 'react';
import {TicketsInterface} from '../../../utils/interface'
import {motion} from 'motion/react'
import styles from './ticket.module.scss'
import {formatDate} from "../../../utils/lib";
import {logosCarrier} from "../../../utils/consts";

interface ITicketProps extends TicketsInterface {
    simbole: string
}

const Ticket: React.FC<ITicketProps> = ({
    origin,
    origin_name,
    carrier,
    price,
    simbole,
    stops,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    destination,
    destination_name,
}) => {

    return (
        <motion.div
            layout
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`card ${styles.container}`}
        >
            <div className={`border-r flex flex-col  gap-y-1.5 max-w-48`}>
                <div>
                    <img src={`${logosCarrier[carrier]}`} alt={`${carrier} лого`} title={`${carrier} лого`}/>
                </div>
                <a className={`${styles.btnBuy}`} href={`#`}>
                    Купить <br/> за {price} {simbole}
                </a>
            </div>
            <div className={`flex-1 flex flex-col gap-y-1`}>
                <div className={`flex justify-between items-start`}>
                    <div className={`${styles.time}`}>{departure_time}</div>
                    <div className={`uppercase text-xs text-zinc-400 flex-1 text-center border-b mt-2 mx-4 pb-1`}>
                        {!stops ? 'Без пересадок' : `${stops} ${stops > 1 ? 'пересадки' : 'пересадка'}`}
                    </div>
                    <div className={`${styles.time}`}>{arrival_time}</div>
                </div>
                <div className={`flex justify-between items-center`}>
                    <div>
                        <div className={`text-xs font-semibold`}>{origin}, {origin_name}</div>
                        <div className={`text-xs text-zinc-400`}>{formatDate(departure_date)}</div>
                    </div>
                    <div className={`text-right`}>
                        <div className={`text-xs font-semibold`}>{destination}, {destination_name}</div>
                        <div className={`text-xs text-zinc-400`}>{formatDate(arrival_date)}</div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Ticket;
