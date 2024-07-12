import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Start: React.FC = () => 
{
const navigate = useNavigate();
const handleRegister = () => {navigate('/register')}
const handleLogin = () => {navigate('/login')}
const handleContinue = () => {navigate('/home')}
useEffect(() =>
{
    if (localStorage.getItem('userid') != null) {navigate('/home')}
}, [])
    return (
        <>
        <br/>
        <center><h1>Добро пожаловать!</h1></center>
        <br/>
        <div className='start-buttons'>
        <center><Button id='but' onClick={handleLogin} >Войти</Button> {' '}</center>
        <br/>
        <center><Button id='but' variant="primary" onClick={handleRegister} >Зарегистрироваться</Button> {' '}</center>
        <br/>
        <center><Button id='but' variant="primary" onClick={handleContinue} >Продолжить без авторизации</Button></center>
        </div>
        </>
    );
};
export default Start