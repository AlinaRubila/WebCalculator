import { useState } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { IdText } from "./IdText";
import { useNavigate } from "react-router-dom";

const ChangeName: React.FC = () =>
{
  const navigate = useNavigate();
  const handleBack = () => {navigate('/profile')}
  const [newName, setName] = useState("")
  const [message, setMessage] = useState('');
  const handleNameChange = async() =>
    {
      if (newName.length < 1) {setMessage("Имя должно состоять из 1 символа и более")}
      else if (newName == "") {setMessage("Заполните поле")}
      else 
      {
        let u_id : number = Number(localStorage.getItem('userid'))
        var j: IdText =
        {
          text: newName,
          id: u_id
        }
        try {
          const response = await fetch('https://localhost:7051/Change', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(j),
          });
          const result = await response.text();
          if (response.ok) 
          {
              localStorage.removeItem('username')
              localStorage.setItem('username', result)
              setMessage("Имя успешно изменено!")
          }
          else {throw new Error()}
          }
      catch (error) {setMessage("Не удалось изменить имя")}
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
      <h1>Смена имени</h1>
      <br/>
      <br/>
      <Form.Control id="form" type="text" placeholder="Новое имя" value={newName} onChange={(e) => setName(e.target.value)}/>
      {message && <p style={{ color: 'red' }}>{message}</p>}
      <br />
      <Button id='but' onClick={handleNameChange}>Сменить имя</Button></center>
      </>
    );
}
export default ChangeName