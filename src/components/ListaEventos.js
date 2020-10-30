import React , {useEffect} from 'react';
import {ListaEventoStyle} from '../styles/ListaEventoStyle';


export const ListaEventos = ({lista})=>{
    useEffect(() => {
        console.log(lista);
    }, [lista]);

    return(
        <ListaEventoStyle>
            <div className="listaEvento">
                {lista.map((item,index)=>{
                    return(
                        <div className="evento" key={index}>
                            <h2 className="titulo">
                                {item.titulo}    
                            </h2>

                            <div className="data">
                                {item.comeco.dia}
                                {item.comeco.mes}
                                {item.comeco.ano}
                            </div>
                            <p>{item.descricao}</p>

                        </div>
                    )
                })}
            </div>
        </ListaEventoStyle>
    )
}