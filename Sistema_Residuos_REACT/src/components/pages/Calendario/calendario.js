import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { DeleteCalendario, GetCalendario, GetCalendarioById, PostCalendario, PutCalendario } from '../../../services/serviceCalendario';
import "./calendario.css"
import { Button } from 'react-bootstrap';

const Calendario = () => {
    const [coletaDates, setColetaDates] = useState([]);
    const [value, setValue] = useState(new Date());

    // Fetching the coleta dates from the service
    useEffect(() => {
        const fetchColetaDates = async () => {
            try {
                const data = await GetCalendario();
                setColetaDates(data);
            } catch (error) {
                console.error('Error fetching coleta dates:', error);
            }
        };

        fetchColetaDates();
    }, []);

    const isColetaDate = (date) => {
        return coletaDates.includes(date.toISOString().split('T')[0]);
    };

    const tileClassName = ({ date, view }) => {
        if (view === 'month' && isColetaDate(date)) {
            return 'coleta-date';
        }
        return null;
    };

    return (
        <div className="calendar-container">
            <h1 style={{textAlign: "center"}}>Calendário de Coleta</h1>
            <Calendar
                onChange={setValue}
                value={value}
                tileClassName={tileClassName}                
            />
            <Button variant="primary" onClick={() => PostCalendario('Add coleta date')}>
                Adicionar Data de Coleta
            </Button>
        </div>
        
    );
};

export default Calendario;