import React from 'react'
import { Route, Switch } from "react-router-dom";
import Chats from '../Chats/ChatsComponent'
import Profile from '../Profile/ProfileComponent'
import Home from '../Home/HomeComponent'
import HomeContainer from '../Home/HomeContainer'
import NotFound from "../NotFound/NotFoundComponent";
import Box from "@material-ui/core/Box";

export default function Router() {
    return (
        <Switch>
            <Route
                path="/"
                exact
                render={() => (
                    <Box sx={{ padding: "20px" }}>
                        <h1>Main page</h1>
                        <h2>Container</h2>
                        <HomeContainer />

                        <h2>Component</h2>
                        <Home
                            age={25}
                            name={'Sergey'}
                            onChangeProfileName={(name) => console.log(name)}
                        />
                    </Box>
                )}
            />
            <Route exact path="/chats" component={Chats} />
            <Route exact path="/chats/:chatId" component={Chats} />
            <Route exact path="/profile"><Profile /></Route>
            <Route exact component={NotFound} />
        </Switch>
    )
}
