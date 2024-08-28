import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { DeleteCalendario, GetCalendario, GetCalendarioById, PostCalendario, PutCalendario } from '../../../services/serviceCalendario';
import "./calendario.css"
import { Button } from 'react-bootstrap';
import Table from "../../commons/table/table";
import axios from 'axios';

const Calendario = () => {
    const [alterar, setAlterar] = useState (false);  
    const [textoBotao, setTextoBotao] = useState("Salvar");
    const [listaCalendario, setListaCalendario] = useState([]);
    const [calendario, setCalendario] = useState({});
    const [salvou, setSalvou] = useState(false);
    const [habilitar, setHabilitar] = useState(true);
    const [coletaDates, setColetaDates] = useState([]);
    const [value, setValue] = useState(new Date());

    const columns = [
        {name: "Horario", columnType: 'timeonly'},
        {name: "DiaSemana", columnType: 'texto'},        
        {name: "Ação", columnType: 'botao'}                  
    ]

    const dataSource = listaCalendario && listaCalendario?.map(item => [
        {name: item.horario},
        {name: item.diaSemana},
        {botoes: [{
            botao: <button onClick={() => CarregarCalendario(item)} style={{marginLeft: "5px"}} className='btn-sm btn-primary' type='button'>Editar</button>
        },
        {
            botao: <button onClick={() => ExcluirCalendario(item.id)} className="btn btn-sm btn-danger" type="button">Excluir</button>       
        }]
    }
    ])

    const handleChange = (event, value) =>{
        calendario[event.target.id] = value;
        setCalendario({...calendario});
        //console.log("evt", event, 'val', value);
    }

    const handleSalvar = () =>{
        if(alterar){
            PutCalendario(calendario).then(res => setSalvou(true));
            
        }else{
            PostCalendario(calendario).then(res => setSalvou(true));
            setCalendario({});        
        }
        
    }

    const NovoCalendario = () => {
        setCalendario({});    
        setHabilitar(false);
      }

    const CarregarCalendario = (calendario) => {
        setCalendario(calendario);
        setAlterar(true);
    }

    const ExcluirCalendario = (id) => {
        DeleteCalendario(id).then(res => {console.log(res.data)})
        setSalvou(true);
        //console.log(listaClientes);
    }

    useEffect(() => {
        const verificarAPI = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/calendario');
                console.log('API funcionando:', response.data);
            } catch (error) {
                console.error('Erro ao acessar API:', error);
            }
        };
    
        verificarAPI(); // Chame a função de verificação da API
        GetCalendario().then((res) => setListaCalendario(res.data));
        setSalvou(false);
    }, [salvou]);

    // useEffect(() => {
    //     GetCalendario()
    //     .then((res) => setListaCalendario(res.data))
    //     .catch(error => console.error('Erro ao Carregar o calendário:', error));
    //     setSalvou(false);
    // }, [salvou]);

    useEffect (() => {
        setTextoBotao(alterar ? 'Alterar' : 'Salvar');
        // if (alterar){
        //     setTextoBotao("Alterar");
        // }else{
        //     setTextoBotao("Salvar");
        // }
      },[alterar]);

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
            <br></br>
            <br></br>

            <div style={{marginLeft: "10px"}}>
                <div>
                    <h2>Cadastro de dias de Coleta</h2>
                </div>
                <div>
                    <div style={{display:"flex"}}>
                        <div style={{padding:"10 px"}} className='col-md'>
                            <div className='col-md'>
                                <label>Horário:</label>                                    
                                    <input readOnly={habilitar}
                                    type="time" id="horario" 
                                    value={calendario.horario || ""}
                                    onChange= {(e) =>{handleChange(e, e.target.value)}} 
                                    className = "form-control">
                                    </input>                                    
                            </div>
                        </div>
                        <div style={{padding:"10 px"}} className='col-md'>
                            <div className='col-md'>
                                <label>Dia Da Semana</label>                                    
                                    <input 
                                    readOnly={habilitar}
                                    type="text" id="diaSemana" 
                                    value={calendario.diaSemana || ""}
                                    onChange= {(e) =>{handleChange(e, e.target.value)}} 
                                    className = "form-control">
                                    </input>                                    
                            </div>
                        </div>
                        <button onClick={handleSalvar} type="button" className="btn-success" >{textoBotao}</button>
                        <button onClick={NovoCalendario} type="button" style={{marginLeft: "5px"}} className="btn-primary" >Novo Calendario</button>
                        
                    </div>
                </div>
            </div>

            <div>
                <Table dados={dataSource} columns={columns} className="table table-striped" />
            </div>

        </div>
        
    );
};

export default Calendario;