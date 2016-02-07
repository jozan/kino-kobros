import React from 'react';
import styles from './EventInfo.pcss';

export default function TicketInfo({event, ticket}) {

    return (

        <section className={styles.root}>
            <h1>{event.title}</h1>

            <table>
                <tbody>
                    <tr>
                        <th>Aika</th>
                        <td>{event.date}, {event.time}</td>
                    </tr>
                    <tr>
                        <th>Teatteri / sali</th>
                        <td>{event.venue.room}</td>
                    </tr>
                    <tr>
                        <th>Rivi</th>
                        <td>{ticket.seat.row}</td>
                    </tr>
                    <tr>
                        <th>Paikka</th>
                        <td>{ticket.seat.seat}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );

}
