import { actionTypes } from "../actionTypes";

const baseUrl = `http://localhost:3001/api/v1/auth/signup`;

export const setName = (name) => ({
  type: actionTypes.SET_NAME,
  payload: name,
});

export const setEmail = (email) => ({
  type: actionTypes.SET_EMAIL,
  payload: email,
});

export const setPassword = (password) => ({
  type: actionTypes.SET_PASSWORD,
  payload: password,
});

export const setError = (error) => ({
  type: actionTypes.SET_ERROR,
  payload: error,
});

export const signUpUser = (name, email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama: name, email, password }), //TODO: fix backend, API requires 'nama'
      });

      if (!response.ok) {
        const errorData = await response.json();
        dispatch(setError(errorData.message || "Sign-up failed"));
        return;
      }

      const data = await response.json();
      console.log("Sign-up successful:", data);
      dispatch(setError(null)); // Clear error on success
    } catch {
      dispatch(setError("Network error: Unable to sign up"));
    }
  };
};
