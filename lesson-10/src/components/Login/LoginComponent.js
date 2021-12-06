import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth, logOut } from "../../services/firebase";
import { signIn, signOut } from "../../actions/profile";
import { selectAuth } from "../../selectors/profile";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Box } from "@material-ui/system";
import { Button, Divider, Typography } from "@material-ui/core";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleIsSigningUpChange = (e) => setIsSigningUp(e.target.checked);
  const authed = useSelector(selectAuth);

  console.log(authed);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        dispatch(signIn());
      } else {
        dispatch(signOut());
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
      setEmail("");
      setPassword("");
    } finally {
      alert("Login success");
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
      setEmail("");
      setPassword("");
    } finally {
      alert("Registration Succes");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // firebase.auth().onAuthStateChanged((user) => {
    //     console.log('onAuthStateChange', { user })
    // })

    if (!email || !password) {
      setError("Заполните поля");
      return;
    }

    if (isSigningUp) {
      handleSignUp();

      return;
    }

    handleLogin();
  };

  return (
    <>
      {authed ? (
        <Box
          sx={{ flexGrow: 1, p: 3 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h2">Authorized</Typography>
          <Button type="submit" onClick={logOut}>
            Login out
          </Button>
        </Box>
      ) : (
        <Box
          sx={{ flexGrow: 1, p: 3 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="p">
            {isSigningUp ? "Sign up" : "Login"}
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={isSigningUp}
                onChange={handleIsSigningUpChange}
                name="checkedB"
                color="primary"
              />
            }
            label={
              <Typography component="p">Еще нет учетной записи?</Typography>
            }
          />
          <TextField
            className="child__text-field"
            variant="outlined"
            placeholder="Email"
            value={email}
            type="email"
            onChange={handleChangeEmail}
          />
          <TextField
            className="child__text-field"
            variant="outlined"
            placeholder="Password"
            value={password}
            type="text"
            onChange={handleChangePassword}
          />

          <Button type="submit" onClick={handleSubmit}>
            {isSigningUp ? "Sign up" : "Login"}
          </Button>

          <Divider />

          {error.length ? (
            <Typography component="p">
              <Typography component="h2">Errors: </Typography>
              {error}
            </Typography>
          ) : null}
        </Box>
      )}
    </>
  );
}
