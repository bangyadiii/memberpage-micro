import { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import MemberRoute from "./components/Routes/MemberRoutes";
import GuestRoute from "./components/Routes/GuestRoutes";
import Login from "./pages/Login";
import NotFound from "./pages/404";

function App() {
    const history = createBrowserHistory({
        basename: import.meta.env.PUBLIC_URL,
    });
    return (
        <>
            <Router history={history}>
                <Switch>
                    <GuestRoute path="/login" component={Login}></GuestRoute>
                    <Route path={"*"} component={NotFound}></Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
