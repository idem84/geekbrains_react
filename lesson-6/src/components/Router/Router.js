import React from 'react'
import { Route, Switch } from "react-router-dom";
import Chats from '../Chats/ChatsComponent'
import Profile from '../Profile/ProfileComponent'
import Home from '../Home/HomeComponent'
import NotFound from "../NotFound/NotFoundComponent";

export default function Router() {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/chats" component={Chats} />
            <Route exact path="/chats/:chatId" component={Chats} />
            <Route exact path="/profile"><Profile /></Route>
            <Route exact component={NotFound} />
        </Switch>
    )
}
