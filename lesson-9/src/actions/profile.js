export const CHANGE_NAME = 'PROFILE::CHANGE_NAME'
export const CHANGE_IS_ONLINE = 'PROFILE::CHANGE_IS_ONLINE'
export const SIGN_IN = "PROFILE::SIGN_IN";
export const SIGN_OUT = "PROFILE::SIGN_OUT";

export const changeName = (name) => ({
  type: CHANGE_NAME,
  payload: {
    name,
  },
});

export const changeNameWithThunk = (name) => {
  return (dispatch, getState) => {
    console.log(getState());

    setTimeout(() => {
      dispatch(changeName(name));
    }, 1000);
  };
};

export const changeIsOnline = (isOnline) => ({
  type: CHANGE_IS_ONLINE,
  payload: {
    isOnline,
  },
});

export const changeIsOnlineWithThunk = (isOnline) => {
  return (dispatch, getState) => {
    console.log(getState());

    setTimeout(() => {
      dispatch(changeIsOnline(isOnline));
    }, 1000);
  };
};

export const signIn = () => ({
  type: SIGN_IN,
});

export const signOut = () => ({
  type: SIGN_OUT,
});