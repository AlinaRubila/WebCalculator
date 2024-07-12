import { Button, Form } from "react-bootstrap";
import { useAppDispatch} from "../redux/Hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../redux/registerFetch";

const Register: React.FC = () => 
{
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [error, setError] = useState('');
  const[attempts, setAttempts] = useState(1)
  const handleBack = () => {navigate('/')}
  const dispatch = useAppDispatch();
  const handleClick = () => 
    {
      if (password != repeat) {setError('Пароли не совпадают!')}
      else if (name.length < 1 || name == "" || email.length < 5 || email == "" || password.length < 5 || password == "") 
      {
        setError("Имя должно быть больше 1 символа, email - 5, пароль - 5")
      }
      else 
      {
        dispatch(register({name, email, password}))
        setAttempts(attempts+1)
        if (localStorage.getItem('userid') != null) {navigate('/home')}
        else if (attempts > 1) 
        {
          setError('Пользователь с таким e-mail уже существует')
          setAttempts(0)
        }
      }
    }
    return(
        <>
        <br/>
        <Button id='but' variant="primary" onClick={handleBack}>Назад</Button>
        <center>
        <h1>Регистрация</h1>
        <br/>
        <br/>
        <Form.Control id="form"
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}/>
        <br />
        <Form.Control id="form"
          type="email"
          placeholder="Ваш e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <Form.Control id="form"
          type="password"
          placeholder="Ваш пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <Form.Control id="form"
          type="password"
          placeholder="Повторите пароль"
          value={repeat}
          onChange={(e) => setRepeat(e.target.value)}/>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <br />
        <Button id='but' variant="primary" onClick={handleClick}>
        Зарегистрироваться
        </Button>
        </center>
        </>  
    );
}
export default Register