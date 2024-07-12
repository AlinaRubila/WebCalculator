import { useState } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { IdText } from "./IdText";
import { useNavigate } from "react-router-dom";

const ChangeLogin: React.FC = () =>
{
  const navigate = useNavigate();
  const handleBack = () => {navigate('/profile')}
  const [newEmail, setNew] = useState("")
  const [message, setMessage] = useState('');
  const handleLoginChange = async() =>
    {
      if (newEmail.length < 5) {setMessage("Email должен состоять из 5 символов и более")}
      else if (newEmail == "") {setMessage("Заполните поле!")}
      else 
      {
        let u_id : number = Number(localStorage.getItem('userid'))
        var j: IdText =
        {
          text: newEmail,
          id: u_id
        }
        try {
          const response = await fetch('https://localhost:7051/Change', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(j),
          });
          if (response.ok) {setMessage("Email успешно изменён!")}
          else {throw new Error()}
          }
          catch (error) {setMessage("Пользователь с таким email уже существует!");}
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
      <Button id='but' onClick={handleBack}>Назад</Button><center>
      <h1>Смена email</h1>
      <br/>
      <br/>
      <Form.Control id="form"
          type="email"
          placeholder="Новый email"
          value={newEmail}
          onChange={(e) => setNew(e.target.value)}/>
          {message && <p style={{ color: 'red' }}>{message}</p>}
         <br />
        <Button id='but' onClick={handleLoginChange}>Сменить email</Button></center>
      </>
    );
}
export default ChangeLogin