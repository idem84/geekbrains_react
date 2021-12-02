import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { selectAuth } from "../../selectors/profile";
import Chats from "../Chats/ChatsComponent";
import Profile from "../Profile/ProfileComponent";
import Home from "../Home/HomeComponent";
import HomeContainer from "../Home/HomeContainer";
import NotFound from "../NotFound/NotFoundComponent";
import News from "../News/NewsComponent";
import Box from "@material-ui/core/Box";
import Login from "../Login/LoginComponent";
import { messagesRef } from "../../services/firebase";
import { onValue } from "firebase/database";

const PrivateRoute = (props) => {
  const authed = useSelector(selectAuth);

  console.log(authed);

  return authed ? <Route {...props} /> : <Redirect to="/login" />;
};

export default function Router() {
  const [msgs, setMsgs] = useState({});

  useEffect(() => {
    onValue(messagesRef, (snapshot) => {
      const newMsgs = {};

      snapshot.forEach((chatMsgsSnap) => {
        newMsgs[chatMsgsSnap.key] = Object.values(
          chatMsgsSnap.val().messageList || {}
        );
      });

      setMsgs(newMsgs);
    });
  }, []);

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
              name={"Sergey"}
              onChangeProfileName={(name) => console.log(name)}
            />
          </Box>
        )}
      />

      <PrivateRoute exact path="/chats" component={Chats} />
      <PrivateRoute exact path="/chats/:chatId" component={Chats} />
      <PrivateRoute exact path="/profile">
        <Profile />
      </PrivateRoute>
      <Route exact path="/login" component={Login} />
      <Route exact path="/news" component={News} />
      <Route exact component={NotFound} />
    </Switch>
  );
}
