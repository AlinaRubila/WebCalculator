import { login, loginFailure, loginRequest } from "./authSlice";

interface RegisterPayload 
{
    name : string
    email: string;
    password: string;
}
export const register = (payload: RegisterPayload) => async (dispatch: any) =>
{
    dispatch(loginRequest());
    try {
        const response = await fetch('https://localhost:7051/Register', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        const result = await response.json();
        if (response.ok) {
          dispatch(login({username: result.username, userid: result.id }));
          localStorage.setItem('username', result.username)
          let s : string = String(result.id)
          localStorage.setItem('userid', s)
        }
      }
      catch (error) {
        dispatch(loginFailure('Registration failed'));
        console.log("You are not registrated in the system");
      }};