import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

function Routes() {
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/home"></Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes