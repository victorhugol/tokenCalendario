import Axios from 'axios';
import React, {useState,useRef,useEffect} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ListaEventos } from '../components/ListaEventos';
import { AgendaStyled } from '../styles/AgendaStyle';

const URL = 'http://localhost:8000'



export const Evento = ()=>{
    const [date,setDate] = useState(new Date());
    const [user,setUser] = useState('');
    const [lista,setLista] = useState([]);
    const evento = useRef(null);
    const descricao = useRef(null)

    const submitEvent = async (e)=>{
        e.preventDefault();

        await Axios.post(`${URL}/cadastroEvento?usuario=${user}`,{
            titulo : evento.current.value,
            descricao : descricao.current.value,
            comeco : {
                dia : date.getDate(),
                mes : date.getMonth()+1,
                ano : date.getFullYear()
            }
        })
        .then((res)=>{
            setLista(()=>{
                return res.data.eventos;
            });
        })
        .catch(err=>console.log(err));
    }

    useEffect(() => {
        setUser(() => {
            return localStorage.getItem('usuario');
        })

    }, []);


    useEffect(() => {

        Axios.get(`${URL}/listEventos?usuario=${user}`)
        .then((res)=>{
            setLista(()=>res.data);
        })
        .catch((err)=>{
            console.log(err);
        })

    }, [user])





    return(
        <AgendaStyled>
            <div className="evento">
                <h1>Agenda de {user}</h1>
                <div className="calendario">
                    <DatePicker
                        onChange={date => setDate(date)}
                        selected={date}
                        dateFormat='dd/MM/yyyy'
                    />
                </div>
                <form>
                    <input ref={evento} type="text" placeholder="Evento"/>
                    <input ref={descricao} type="text" placeholder="Descrição"/>
                    <input type="submit" value="criar evento" onClick={submitEvent}></input>
                </form>
            </div>
            <ListaEventos lista={lista}></ListaEventos>
        </AgendaStyled>
    );
}