import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppDispatch} from "../redux/Hooks";
import { useState } from "react";
import { auth } from "../redux/authFetch";

const Login: React.FC = () =>
{
  const navigate = useNavigate();
  const handleBack = () => {navigate('/')}
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const[attempts, setAttempts] = useState(1)
  const dispatch = useAppDispatch();
  const handleClick = () => 
  {
    dispatch(auth({email, password}))
    //console.log(localStorage.getItem('userid'))
    setAttempts(attempts+1)
    console.log(attempts)
    if (localStorage.getItem('userid') != null) {navigate('/home')}
    else if(attempts > 1) 
      {
        setError("Неверный логин или пароль")
        setAttempts(0)
      }
  }
    return(
        <>
        <br/>
        <Button id='but' onClick={handleBack}>Назад</Button>
        <center>
        <h1>Вход</h1>
        <br/>
        <br/>
        <Form.Control id="form"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <Form.Control id="form"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <br />
      <Button id='but' onClick={handleClick}>Войти</Button></center>
      </>
    );
}
export default Login