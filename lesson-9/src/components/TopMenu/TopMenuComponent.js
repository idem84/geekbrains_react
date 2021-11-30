import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signIn, signOut } from "../../actions/profile";
import { List, ListItem } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { Box } from "@material-ui/system";
import "./module.style.scss";
import { auth } from "../../services/firebase";

const TopMenuComponent = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       dispatch(signIn());
  //     } else {
  //       dispatch(signOut());
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  const handleSignOut = (e) => {
    e.preventDefault();

    dispatch(signOut());
  };

  return (
    <Box id="topMenu">
      <List>
        <ListItem>
          <Link href="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="/profile">Profile</Link>
        </ListItem>
        <ListItem>
          <Link href="/chats">Chats</Link>
        </ListItem>
        <ListItem>
          <Link href="/news">News</Link>
        </ListItem>
        <ListItem>
          <Link href="/" onClick={handleSignOut}>
            Sign out
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default TopMenuComponent;
