import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Cadastro} from './view/Cadastro';
import { Evento } from './view/Evento';
import { Login} from './view/Login';

export const RouterSetup = ()=>{
    return(
        <Router>
            <Switch>
                <Route exact path="/agenda">
                    <Evento></Evento>
                </Route>
                <Route exact path='/'>
                    <Cadastro></Cadastro>
                </Route>
                <Route exact path='/login'>
                    <Login></Login>
                </Route>
            </Switch>
        </Router>
    )
}