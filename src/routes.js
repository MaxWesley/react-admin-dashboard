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
import Login from './pages/login'

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
                        <Redirect exact from="/" to="/dashboard/login" />
                        <Route path="/dashboard/login" component={Login} exact />
                    </Switch>
                }
            </BrowserRouter>
        </>
    )
}

export default Routes