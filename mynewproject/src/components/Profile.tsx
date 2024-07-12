import { useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () =>
{
    const navigate = useNavigate();
    const handleExit = () => 
    {
      localStorage.removeItem('username')
      localStorage.removeItem('userid')
      navigate('/')
    }
    const handlePassword = () => {navigate('/changepassword')}
    const handleName = () => {navigate('/changename')}
    const handleLogin = () => {navigate('/changelogin')}
    useEffect(() =>
      {
        if (localStorage.getItem('username') == null || localStorage.getItem('userid') == null) {navigate('/')}
      })
    return(
        <>
        <Navbar data-bs-theme="dark" id="nav">
        <Container>
          <Navbar.Brand href="/home" >Считалочка!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home" >Главная</Nav.Link>
            <Nav.Link href="/counts" >Ваши подсчёты</Nav.Link>
            <Nav.Link href="/profile" >Профиль</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br/>
      <center>
      <h1>Профиль пользователя {localStorage.getItem('username')}</h1>
      <br/>
        <Button id='but' onClick={handleName}>Сменить имя </Button>{' '}
        <br/>
        <br/>
        <Button id='but' onClick={handleLogin}> Сменить email </Button>{' '}
        <br/>
        <br/>
        <Button id='but' onClick={handlePassword}> Сменить пароль </Button>{' '}
        <br/>
        <br/>
        <Button id='but' onClick={handleExit}> Выйти </Button>
        </center>
        </>
    )
}
export default Profile