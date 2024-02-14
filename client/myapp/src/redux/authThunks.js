import {
  loginFailure,
  loginStart,
  loginSuccess,
  editingStart,
  editingSuccess,
  editingFailure,
} from "./authSlice.reducer";

export const login = (email, password, navigation) => async (dispatch) => {
  try {
    dispatch(loginStart());

    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("An error has occured while login");
    }

    const data = await response.json();
    const token = data.body.token;

    localStorage.setItem("token", token);

    navigation("/User");
  } catch (e) {
    dispatch(loginFailure());
  }
};

export const fetchMe = (token) => async (dispatch) => {
  const me = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const dataMe = await me.json();

  dispatch(loginSuccess({ token, me: dataMe.body }));
};

export const putMe = (token, userName) => async (dispatch) => {
  try {
    dispatch(editingStart());

    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName }),
    });

    if (!response.ok) {
      throw new Error("An error has occured while editing");
    }

    dispatch(editingSuccess({ userName }));
  } catch (e) {
    dispatch(editingFailure());
  }
};
