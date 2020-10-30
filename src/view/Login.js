import React, {useRef} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {CadastroStyle} from '../styles/CadastroStyle';
import Axios from 'axios';
const URL = 'http://localhost:8000';

export const Login =  ()=>{

    const usuario = useRef(null);
    const history = useHistory();


    const submitUser = (event)=>{
        event.preventDefault();
        // console.log(usuario.current.value);


        Axios.post(`${URL}/login`,{
            usuario : usuario.current.value,
        })
        .then((res)=>{
            localStorage.setItem('usuario',usuario.current.value);
            history.push('/agenda');
        })
        .catch((err)=>{
            alert('Usuario Não Encontrado');
        })

    }


    return(
        <CadastroStyle>
            <section>
                <h1><span>Login</span></h1>
                <form >
                    <input ref={usuario} type="text" name="text" placeholder="Usuario"/>
                    <input onClick={submitUser} type="submit" name="button" value="cadastrar"/>
                    <Link to='/'>não possui cadastro ?</Link>
                </form>
            </section>
        </CadastroStyle>
    )
}