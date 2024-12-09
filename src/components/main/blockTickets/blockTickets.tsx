import React from 'react';
import {Ticket} from '../ticket'
import {TicketsInterface} from '../../../utils/interface'
import json from '../../../assets/tickets.json'

const BlockTickets: React.FC = () => {
    const [tickets, setTickets] = React.useState<TicketsInterface[]>(json.tickets || []);

    return (
        <div>
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