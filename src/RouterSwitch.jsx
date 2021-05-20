import { Route, BrowserRouter as Switch } from "react-router-dom";

import LiveRecord from "./pages/LiveRecord";
import ManagePlayer from "./pages/ManagePlayer";
import ManageTeam from "./pages/ManageTeam";
import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/manage_team" component={ManageTeam} />
                <Route path="/manage_player" component={ManagePlayer} />
                <Route path="/live_record" component={LiveRecord} />
            </Switch>
        );
    }
}
