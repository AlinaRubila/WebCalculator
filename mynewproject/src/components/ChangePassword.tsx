import { useState } from "react";
import { Navbar, Container, Nav, Button, Form } from "react-bootstrap";
import { PasswordCheck } from "./IdText";
import { useNavigate } from "react-router-dom";

const ChangePassword: React.FC = () =>
{
  const navigate = useNavigate();
  const handleBack = () => {navigate('/profile')}
  const [oldPassword, setOld] = useState("")
  const [newPassword, setNew] = useState("")
  const [repeatPassword, setRepeat] = useState("")
  const [message, setMessage] = useState('');
  const handlePasswordChange = async() =>
  {
    if (oldPassword == "" || newPassword == "" || repeatPassword == "") {setMessage("Заполните все поля!")}
    else {
    let u_id : number = Number(localStorage.getItem('userid'))
    var j : PasswordCheck = {oldPassword: oldPassword, newPassword: newPassword, 
      repeatPassword: repeatPassword, id: u_id}
    try 
    {
      const response = await fetch('https://localhost:7051/Change', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(j),});
      if (response.ok) {console.log("Пароль успешно изменён!")}
      else {throw new Error()}
    }
    catch (error) 
    {
      if (newPassword.length < 5) {setMessage("Пароль должен состоять из 5 символов и более")}
      else if (newPassword != repeatPassword) {setMessage("Пароли не совпадают!!")}
      else {console.log('Неверно введён старый пароль!')}
    }
    }
  }
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
      <Button id='but' onClick={handleBack}>Назад</Button>
      <center>
      <h1>Смена пароля</h1>
      <br/>
      <br/>
      <Form.Control id="form"
          type="password"
          placeholder="Старый пароль"
          value={oldPassword}
          onChange={(e) => setOld(e.target.value)}/>
      <br/>
      <Form.Control id="form"
          type="password"
          placeholder="Новый пароль"
          value={newPassword}
          onChange={(e) => setNew(e.target.value)}/>
        <br />
        <Form.Control id="form"
          type="password"
          placeholder="Повторите пароль"
          value={repeatPassword}
          onChange={(e) => setRepeat(e.target.value)}/>
        {message && <p style={{ color: 'red' }}>{message}</p>}
        <br />
        <Button id='but' onClick={handlePasswordChange}>Сменить пароль</Button>
       </center>
      </>
    );
}
export default ChangePassword