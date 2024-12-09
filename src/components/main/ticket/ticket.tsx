import React from 'react';
import {TicketsInterface} from '../../../utils/interface'
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
        <div className={`${styles.container}`}>
            <div>
                <div>
                    {carrier}
                </div>
                <div>
                    <a href={`${index}`}>Купить</a>
                </div>
            </div>
            <div>
                {origin_name}
            </div>
        </div>
    );
};

export default Ticket;