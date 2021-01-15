import { useState } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import Sidebar from './components/Sidebar'

import { Main } from '../src/styles/GlobalStyles'

// Pages
import Home from './pages/home'
import Login, { Cadastro } from './pages/Auth'

function Routes() {
    const [auth, setAuth] = useState(false);


    return (
        <>
            <BrowserRouter>
                {auth ?
                    <>
                        <Sidebar />
                        <Main>
                            <Switch>
                                <Redirect exact from="/" to="/dashboard/home" />
                                <Route path="/dashboard/home" component={Home} exact />
                            </Switch>
                        </Main>
                    </>
                    :
                    <Switch>
                        <Redirect exact from="/" to="/login" />
                        <Route path="/login" component={Login} exact />
                        <Route path="/cadastro" component={Cadastro} exact />
                    </Switch>
                }
            </BrowserRouter>
        </>
    )
}

export default Routes