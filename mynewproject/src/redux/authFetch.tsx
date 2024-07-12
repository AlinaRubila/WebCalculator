import { login, loginRequest, loginFailure  } from "./authSlice";

interface AuthPayload {
    email: string;
    password: string;
  }
export const auth = (payload: AuthPayload) => async (dispatch: any) => {
  dispatch(loginRequest());
  try {
    const response = await fetch('https://localhost:7051/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    if (response.ok) {
      localStorage.setItem('username', result.username)
      let s : string = String(result.id)
      localStorage.setItem('userid', s)
      dispatch(login({username: result.username, userid: result.id }));
    }
  } 
  catch (error) {
    dispatch(loginFailure('Login failed'));
    console.log("You are not registrated in the system");
  }};