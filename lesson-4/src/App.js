import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Main from "./Components/MainComponent/MainComponent";
import Chats from "./Components/ChatsComponent/ChatsComponent";
import Profile from "./Components/ProfileComponent/ProfileComponent";
import NotFound from "./Components/NotFound/NotFoundComponent";
import TopMenu from "./Components/TopMenuComponent/TopMenuComponent"
import Box from '@material-ui/core/Box';
import { memo } from "react";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '1000px' }}>
       <TopMenu />
        <BrowserRouter basename="/#/">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/chats" component={Chats} />
            <Route exact path="/chats/:chatId" component={Chats} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default memo(App);