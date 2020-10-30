import React, {useRef} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {CadastroStyle} from '../styles/CadastroStyle';
import Axios from 'axios';
const URL = 'http://localhost:8000';

export const Cadastro =  ()=>{

    // const [user, setUser] = useState({});
    const usuario = useRef(null);
    const history = useHistory();

    const submitUser = (event)=>{
        event.preventDefault();
        console.log(usuario.current.value);
        Axios.post(`${URL}/cadastro`,{
            usuario : usuario.current.value,
            eventos : []
        })
        .then((res)=>{
            localStorage.setItem('usuario',usuario.current.value);
            history.push('/agenda');
        })
        .catch((err)=>{
            alert('Usuario ja existe');
        })

    }


    return(
        <CadastroStyle>
            <section>
                <h1><span>Cadastro</span></h1>
                <form >
                    <input ref={usuario} type="text" name="text" placeholder="Usuario"/>
                    <input onClick={submitUser} type="submit" name="button" value="cadastrar"/>
                    <Link to='/login'>possui cadastro?</Link>
                </form>
            </section>
        </CadastroStyle>
    )
}